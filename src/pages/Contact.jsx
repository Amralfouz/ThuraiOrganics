import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";
import { PageMeta, PageIntro, WhatsApp, Eyebrow } from "../components/UI";
export default function Contact() {
  const [status, setStatus] = useState("");
  function submit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website enquiry from " + f.get("name"))}&body=${encodeURIComponent(`Name: ${f.get("name")}\nReply email: ${f.get("email")}\n\n${f.get("message")}`)}`;
    setStatus(
      "Your email app should open with your message ready. Please send it there. If it does not open, use the email address or WhatsApp link on this page.",
    );
  }
  return (
    <>
      <PageMeta
        title="Contact Us"
        description="Contact Thurai Organics in Sammanthurai. Call 070 609 0960, email thuraiorganics@gmail.com or enquire on WhatsApp at 070 609 9960."
      />
      <PageIntro
        eyebrow="LET’S TALK"
        title={
          <>
            A good conversation.
            <br />
            <em>A fresh beginning.</em>
          </>
        }
      >
        Looking for fresh produce, a new plant or help with your growing space?
        We’d love to hear from you.
      </PageIntro>
      <section className="wrap section contact-grid">
        <div>
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>Here to help you grow.</h2>
          <div className="contact-method">
            <Phone />
            <div>
              <h3>Call us</h3>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-method">
            <Mail />
            <div>
              <h3>Email us</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="contact-method">
            <MapPin />
            <div>
              <h3>Find us</h3>
              <p>{site.location}</p>
              <a
                className="text-link"
                href="https://www.google.com/maps/search/?api=1&query=Sammanthurai%2C%20Sri%20Lanka"
                target="_blank"
                rel="noreferrer"
              >
                Explore Sammanthurai on Maps <ArrowUpRight size={15} />
              </a>
              <p className="quiet">
                Contact us for directions and to arrange a visit.
              </p>
            </div>
          </div>
          <div className="whatsapp-panel">
            <h3>Prefer a quick chat?</h3>
            <p>WhatsApp: {site.whatsappDisplay}</p>
            <WhatsApp />
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <Eyebrow>WRITE TO US</Eyebrow>
          <h2>What’s on your mind?</h2>
          <p>
            Prepare an email to our team. Your email app will open so you can
            review and send it.
          </p>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Your name"
          />
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
          />
          <label htmlFor="message">Your enquiry</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            placeholder="Tell us what you’re looking for…"
          />
          <button className="button" type="submit">
            Prepare email <ArrowUpRight size={18} />
          </button>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
      </section>
    </>
  );
}
