import { media } from "../data/site";
import products from "../data/products";
import {
  PageMeta,
  PageIntro,
  ContactCTA,
  Eyebrow,
  ArrowButton,
} from "../components/UI";
const solutions = [
  [
    "Plants for a new beginning",
    "From fruit plants and vegetable seedlings to herbs, flowering plants and coconut saplings, explore a growing collection for home gardens and farms.",
    "mango-saplings",
    "Plants & Saplings",
  ],
  [
    "Care for the soil beneath you",
    "Explore vermicompost and burnt rice husk for your growing projects. Ask us about suitable soil care and organic growing solutions.",
    "vermicompost",
    "Compost & Soil Care",
  ],
  [
    "Support through the growing season",
    "Discover the Thurai plant nutrition and care range. Our team can share product details and application guidance suited to your enquiry.",
    "thurai-fruit-plant-booster",
    "Plant Nutrition & Care",
  ],
  [
    "A considered approach to watering",
    "Explore drip irrigation equipment and watch our supplied demonstration. Discuss the requirements of your own growing space with us.",
    "drip-irrigation-system",
    "Garden & Farm Equipment",
  ],
];
export default function Solutions() {
  return (
    <>
      <PageMeta
        title="Farm & Garden Solutions"
        description="Explore plants, compost, plant nutrition and irrigation solutions for households and farms from Thurai Organics."
      />
      <PageIntro
        eyebrow="FARM & GARDEN SOLUTIONS"
        title={
          <>
            More than a harvest.
            <br />
            <em>A whole growing world.</em>
          </>
        }
      >
        Thoughtfully selected essentials for the soil, the plants and the people
        who care for them.
      </PageIntro>
      <section className="wrap section solutions-list">
        {solutions.map(([title, desc, id, category], i) => (
          <article className="solution-editorial" key={id}>
            <img
              src={media(products.find((p) => p.id === id).images[0])}
              alt={products.find((p) => p.id === id).name}
              width="1000"
              height="1000"
              loading="lazy"
            />
            <div>
              <Eyebrow>
                0{i + 1} / {category}
              </Eyebrow>
              <h2>{title}</h2>
              <p>{desc}</p>
              <ArrowButton
                to={
                  id === "drip-irrigation-system"
                    ? `/products/${id}`
                    : `/products?category=${encodeURIComponent(category)}`
                }
              >
                {id === "drip-irrigation-system"
                  ? "View irrigation demonstration"
                  : "Explore the collection"}
              </ArrowButton>
            </div>
          </article>
        ))}
      </section>
      <ContactCTA />
    </>
  );
}
