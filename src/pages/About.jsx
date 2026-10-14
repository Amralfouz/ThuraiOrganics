import { media, mission, vision } from "../data/site";
import {
  PageMeta,
  PageIntro,
  Eyebrow,
  Values,
  ContactCTA,
} from "../components/UI";
export default function About() {
  return (
    <>
      <PageMeta
        title="Our Story"
        description="Meet Thurai Organics, an organic farming and agricultural solutions company in Sammanthurai, Eastern Province, Sri Lanka. Read our mission and vision."
      />
      <PageIntro
        eyebrow="OUR STORY"
        title={
          <>
            Rooted here.
            <br />
            <em>Growing for tomorrow.</em>
          </>
        }
      >
        Organic farming. Healthy living. A shared commitment to a greener
        future.
      </PageIntro>
      <section className="wrap about-image">
        <img
          src={media("images/optimized/coverPic.webp")}
          width="899"
          height="600"
          alt="Thurai Organics entrance in Sammanthurai"
        />
        <span>THURAI ORGANICS · SAMMANTHURAI, SRI LANKA</span>
      </section>
      <section className="section wrap about-intro">
        <Eyebrow>WHO WE ARE</Eyebrow>
        <div>
          <h2>
            From our soil
            <br />
            to your everyday life.
          </h2>
          <p>
            Thurai Organics is a Sri Lankan organic farming and agricultural
            solutions company based in Sammanthurai, Eastern Province. We
            produce and supply fresh organic fruits, vegetables, herbs, compost,
            organic pesticides, plants, and garden and farm solutions.
          </p>
          <p>
            We serve households, farmers and agricultural businesses with a
            commitment to sustainable agriculture, healthy living and
            environmentally responsible farming. Our approach to cultivating
            crops avoids harmful chemicals, synthetic fertilizers, preservatives
            and artificial additives.
          </p>
        </div>
      </section>
      <section className="mission-section section">
        <div className="wrap mission-grid">
          <div>
            <Eyebrow>OUR VISION</Eyebrow>
            <h2>
              A greener future,
              <br />
              grown together.
            </h2>
            <p className="vision">{vision}</p>
          </div>
          <div>
            <Eyebrow>OUR MISSION</Eyebrow>
            <ol className="mission-list">
              {mission.map((m, i) => (
                <li key={m}>
                  <span>0{i + 1}</span>
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <Eyebrow>OUR VALUES IN PRACTICE</Eyebrow>
        <h2>Care at every stage.</h2>
        <Values />
        <div className="sustainability">
          <h3>Growing with the environment in mind.</h3>
          <p>
            Natural biodegradable materials are central to our compost and
            organic solutions. Our work supports soil care, responsible growing
            practices and home gardening within local communities.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
