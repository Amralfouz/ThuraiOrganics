import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import products, { categories } from "../data/products";
import { media } from "../data/site";
import {
  HeroVideo,
  Eyebrow,
  ArrowButton,
  SectionHeading,
  ProductCard,
  Values,
  ContactCTA,
  PageMeta,
} from "../components/UI";
const categoryPhotos = [
  "Golden Watermelon",
  "Mango Saplings",
  "Mint Plant",
  "Red Rose Plants",
  "Thurai Fruit Plant Booster",
  "Vermicompost",
  "Drip Irrigation System",
];
export default function Home() {
  return (
    <>
      <PageMeta
        title="Rooted in Nature. Grown with Care."
        description="Discover fresh produce, plants, herbs and farm and garden solutions from Thurai Organics in Sammanthurai, Sri Lanka."
      />
      <section className="hero">
        <HeroVideo />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <Eyebrow>THURAI ORGANICS — SRI LANKA</Eyebrow>
          <h1>
            Rooted in Nature.
            <br />
            <em>Grown with Care.</em>
          </h1>
          <p>
            Discover naturally grown produce, healthy plants, and thoughtfully
            selected agricultural solutions from Thurai Organics.
          </p>
          <div className="button-row">
            <ArrowButton to="/products" className="ivory">
              Explore our products
            </ArrowButton>
            <Link to="/about" className="hero-story">
              Discover our story <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>SAMMANTHURAI · EASTERN PROVINCE</span>
          <a href="#welcome">
            A little closer to nature <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="nature-strip">
        <span>Fresh, seasonal produce</span>
        <i>✦</i>
        <span>Plants for every growing space</span>
        <i>✦</i>
        <span>Thoughtful farm & garden solutions</span>
      </div>
      <section id="welcome" className="section wrap intro-split">
        <div className="editorial-photo">
          <img
            src={media("images/optimized/coverPic.webp")}
            alt="Entrance to Thurai Organics in Sammanthurai"
            width="899"
            height="600"
            loading="lazy"
          />
          <span className="image-note">Our roots, here in Sammanthurai.</span>
        </div>
        <div className="intro-copy">
          <Eyebrow>WELCOME TO THURAI ORGANICS</Eyebrow>
          <h2>
            Good things begin
            <br />
            with <em>healthy roots.</em>
          </h2>
          <p>
            We are a Sri Lankan organic farming and agricultural solutions
            company with a simple purpose: to bring people closer to nature
            through what they eat and what they grow.
          </p>
          <p>
            From fresh fruits and herbs to nursery plants, organic compost and
            irrigation essentials, we bring together the needs of households,
            farmers and agricultural businesses.
          </p>
          <Link className="text-link" to="/about">
            Get to know us <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
      <section className="section category-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="FROM OUR WORLD TO YOURS"
            title="Something good for every garden."
            link="/products"
          >
            Explore fresh flavours, living plants and the essentials that help
            them grow.
          </SectionHeading>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <Link
                className="category-card"
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
              >
                <img
                  src={media(
                    products.find((p) => p.name === categoryPhotos[i])
                      .images[0],
                  )}
                  loading="lazy"
                  alt=""
                  width="500"
                  height="500"
                />
                <div>
                  <small>0{i + 1}</small>
                  <h3>{cat}</h3>
                  <ArrowUpRight size={22} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          eyebrow="A FEW FAVOURITES"
          title="Fresh finds. New beginnings."
          link="/products"
        />
        <div className="product-grid featured">
          {[
            "golden-watermelon",
            "mango-saplings",
            "thurai-fruit-plant-booster",
            "red-rose-plants",
          ].map((id) => (
            <ProductCard key={id} product={products.find((p) => p.id === id)} />
          ))}
        </div>
      </section>
      <section className="story-band">
        <div className="wrap story-inner">
          <Eyebrow>OUR PURPOSE</Eyebrow>
          <h2>
            A healthier way to grow.
            <br />
            <em>A greener future to share.</em>
          </h2>
          <p>
            Our commitment is to sustainable agriculture, healthy living and
            environmentally responsible farming. We encourage home gardening and
            organic growing within our local communities.
          </p>
          <Link to="/about" className="text-link">
            Our mission & vision <ArrowUpRight size={18} />
          </Link>
        </div>
        <span className="story-mark" aria-hidden="true">
          ❧
        </span>
      </section>
      <section className="section wrap solutions-teaser">
        <div>
          <Eyebrow>BEYOND THE HARVEST</Eyebrow>
          <h2>
            Everything starts
            <br />
            with the right care.
          </h2>
          <p>
            Build a garden, nourish your soil or plan your watering. Our
            agricultural range brings the essentials together.
          </p>
          <ArrowButton to="/solutions">Farm & garden solutions</ArrowButton>
        </div>
        <div className="solution-lines">
          {[
            [
              "01",
              "Plants with potential",
              "Fruit, vegetable, herbal and flowering plants.",
              "Plants & Saplings",
            ],
            [
              "02",
              "Better beginnings in the soil",
              "Compost, growing media and plant nutrition.",
              "Compost & Soil Care",
            ],
            [
              "03",
              "Water where it matters",
              "Irrigation equipment for your growing space.",
              "Garden & Farm Equipment",
            ],
          ].map(([n, t, d, c]) => (
            <Link key={n} to={`/products?category=${encodeURIComponent(c)}`}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
      </section>
      <section className="section values-section">
        <div className="wrap">
          <SectionHeading
            eyebrow="THE THURAI APPROACH"
            title="Rooted in what matters."
          />
          <Values />
        </div>
      </section>
      <section className="section wrap farm-teaser">
        <div>
          <Eyebrow>OUR FARM, OUR ROOTS</Eyebrow>
          <h2>
            A little closer
            <br />
            to the source.
          </h2>
          <p>
            Meet Thurai Organics through our supplied farm film and a view of
            our entrance in Sammanthurai.
          </p>
          <Link className="text-link" to="/gallery">
            Visit our farm gallery <ArrowUpRight size={19} />
          </Link>
        </div>
        <img
          src={media("images/optimized/farm-poster.webp")}
          alt="Still from the supplied Thurai Organics farm film"
          loading="lazy"
          width="1280"
          height="720"
        />
      </section>
      <ContactCTA />
    </>
  );
}
