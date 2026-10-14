import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Leaf,
  Sprout,
  Droplets,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site, media, enquiry } from "../data/site";

export function WhatsApp({
  name,
  children = "Enquire on WhatsApp",
  className = "",
}) {
  return (
    <a
      className={`button whatsapp ${className}`}
      href={enquiry(name)}
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp aria-hidden="true" />
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "Our Story"],
    ["/products", "Products"],
    ["/solutions", "Farm & Garden"],
    ["/gallery", "Our Farm"],
    ["/contact", "Contact"],
  ];
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topline">
        <span>Fresh from Nature — Pure, Healthy, Organic.</span>
        <a href={`tel:${site.phoneHref}`}>
          Sammanthurai, Sri Lanka{" "}
          <span className="top-phone"> · {site.phone}</span>
        </a>
      </div>
      <header>
        <div className="nav wrap">
          <Link
            to="/"
            className="brand"
            aria-label="Thurai Organics home"
            onClick={() => setOpen(false)}
          >
            <img
              src={media("images/logo.png")}
              alt="Thurai Organics original logo"
              width="64"
              height="64"
            />
            <span>
              THURAI ORGANICS<small>ROOTED IN NATURE</small>
            </span>
          </Link>
          <button
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="navigation"
            className={open ? "open" : ""}
            aria-label="Main navigation"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                document.querySelector(".menu-button")?.focus();
              }
            }}
          >
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <WhatsApp className="nav-enquiry">Let’s talk</WhatsApp>
          </nav>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <img
              src={media("images/logo.png")}
              width="74"
              height="74"
              alt="Thurai Organics"
            />
            <span>
              THURAI ORGANICS<small>FRESH FROM NATURE</small>
            </span>
          </Link>
          <p>{site.tagline}</p>
          <p>
            Organic farming and agricultural solutions
            <br />
            from Sammanthurai, Sri Lanka.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/about">Our story</Link>
          <Link to="/products">Our products</Link>
          <Link to="/solutions">Farm & garden solutions</Link>
          <Link to="/gallery">Our farm</Link>
        </div>
        <div>
          <h3>Grow with us</h3>
          <Link to="/products?category=Plants%20%26%20Saplings">
            Plants & saplings
          </Link>
          <Link to="/products?category=Compost%20%26%20Soil%20Care">
            Compost & soil care
          </Link>
          <Link to="/products?category=Herbs%20%26%20Medicinal%20Plants">
            Herbs & medicinal plants
          </Link>
          <Link to="/products?category=Fresh%20Fruits%20%26%20Vegetables">
            Fresh produce
          </Link>
        </div>
        <div>
          <h3>Get in touch</h3>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={enquiry()}>WhatsApp: {site.whatsappDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>{site.location}</p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Thurai Organics.</span>
        <span>Cultivating a greener, healthier future.</span>
      </div>
    </footer>
  );
}
export function PageMeta({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${title} | Thurai Organics`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, title, description]);
  return null;
}
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
export function SectionHeading({
  eyebrow,
  title,
  children,
  link,
  label = "View all products",
}) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link}>
          {label}
          <ArrowUpRight size={19} />
        </Link>
      )}
    </div>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <div className="page-intro wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>LET’S GROW SOMETHING GOOD</Eyebrow>
          <h2>
            Your next growing season
            <br />
            starts with a conversation.
          </h2>
          <p>From a single plant to your farm’s needs, we’re here to help.</p>
        </div>
        <WhatsApp>Talk to our team</WhatsApp>
      </div>
    </section>
  );
}
export function Values() {
  const values = [
    [
      Leaf,
      "Naturally minded",
      "A commitment to organic agriculture and chemical-free growing practices.",
    ],
    [
      Sprout,
      "From soil to harvest",
      "Produce, plants and growing essentials together under one brand.",
    ],
    [
      Droplets,
      "Care for the environment",
      "Sustainable farming and environmentally responsible agricultural solutions.",
    ],
    [
      MapPin,
      "Rooted in Sammanthurai",
      "Serving households, growers and agricultural businesses from Eastern Sri Lanka.",
    ],
  ];
  return (
    <div className="values">
      {values.map(([Icon, title, text]) => (
        <div key={title}>
          <Icon size={27} strokeWidth={1.3} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-photo">
        <img
          src={media(product.images[0])}
          alt={product.name}
          loading="lazy"
          width="1000"
          height="1000"
        />
        {product.video && (
          <span className="video-label">
            <Play size={13} /> View demonstration
          </span>
        )}
        <span className="photo-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      {product.video && (
        <video
          className="card-video"
          controls
          muted
          loop
          playsInline
          preload="none"
          poster={media("images/optimized/drip-poster.webp")}
          src={media(product.video)}
          aria-label="Preview Drip Irrigation System"
        />
      )}
      <div className="product-copy">
        <span className="category-label">{product.category}</span>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>{product.desc}</p>
        <WhatsApp name={product.name} />
      </div>
    </article>
  );
}
export function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      setEnabled(
        !motion.matches &&
          !navigator.connection?.saveData &&
          !["slow-2g", "2g"].includes(navigator.connection?.effectiveType),
      );
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);
  return (
    <>
      <img
        className="hero-backdrop"
        src={media("images/optimized/farm-poster.webp")}
        alt=""
        fetchPriority="high"
      />
      {enabled && (
        <video
          ref={ref}
          className="hero-backdrop"
          src={media("images/videos/farm-homepage.mp4")}
          poster={media("images/optimized/farm-poster.webp")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setEnabled(false)}
          aria-label="Thurai Organics farm film"
        />
      )}
      <button
        className="video-toggle"
        onClick={() => {
          if (!enabled) {
            setEnabled(true);
            return;
          }
          if (playing) ref.current?.pause();
          else ref.current?.play().catch(() => setPlaying(false));
        }}
        aria-label={playing ? "Pause farm video" : "Play farm video"}
      >
        {playing ? <Pause size={15} /> : <Play size={15} />}
        <span>{playing ? "Pause film" : "Play film"}</span>
      </button>
    </>
  );
}
export function ArrowButton({ to, children, className = "" }) {
  return (
    <Link to={to} className={`button ${className}`}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
