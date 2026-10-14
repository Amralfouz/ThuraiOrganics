import { media } from "../data/site";
import {
  PageMeta,
  PageIntro,
  ContactCTA,
  SectionHeading,
} from "../components/UI";
export default function Gallery() {
  return (
    <>
      <PageMeta
        title="Our Farm"
        description="See the supplied Thurai Organics farm film and entrance photograph from Sammanthurai, Sri Lanka."
      />
      <PageIntro
        eyebrow="OUR FARM"
        title={
          <>
            Closer to the land.
            <br />
            <em>Closer to our roots.</em>
          </>
        }
      >
        A glimpse into the world of Thurai Organics in Sammanthurai.
      </PageIntro>
      <section className="wrap gallery section">
        <figure>
          <video
            controls
            playsInline
            preload="none"
            poster={media("images/optimized/farm-poster.webp")}
            src={media("images/videos/farm-homepage.mp4")}
            aria-label="Thurai Organics farm film"
          />
          <figcaption>
            <span>01 / THE FARM FILM</span> A view from the supplied Thurai
            Organics film.
          </figcaption>
        </figure>
        <SectionHeading
          eyebrow="WHERE IT BEGINS"
          title="Welcome to Thurai Organics."
        />
        <figure className="entrance-figure">
          <img
            src={media("images/optimized/coverPic.webp")}
            width="899"
            height="600"
            alt="Entrance to Thurai Organics, with the company sign above the gate"
            loading="lazy"
          />
          <figcaption>
            <span>02 / OUR ENTRANCE</span> Sammanthurai, Eastern Province, Sri
            Lanka.
          </figcaption>
        </figure>
      </section>
      <ContactCTA />
    </>
  );
}
