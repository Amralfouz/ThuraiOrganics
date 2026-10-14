import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import products from "../data/products";
import { media } from "../data/site";
import {
  PageMeta,
  ProductCard,
  SectionHeading,
  WhatsApp,
  Eyebrow,
  PageIntro,
  ArrowButton,
} from "../components/UI";
function Detail({ product }) {
  const [selected, setSelected] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <PageMeta title={product.name} description={product.desc} />
      <div className="wrap section detail-section">
        <Link className="text-link back-link" to="/products">
          <ArrowLeft size={16} /> Back to the collection
        </Link>
        <div className="product-detail">
          <div>
            <div className="detail-media">
              {showVideo && product.video ? (
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  poster={media("images/optimized/drip-poster.webp")}
                  src={media(product.video)}
                  aria-label="Drip Irrigation System product demonstration"
                />
              ) : (
                <img
                  src={media(product.images[selected])}
                  alt={product.name + (selected ? " — additional view" : "")}
                  width="1000"
                  height="1000"
                />
              )}
            </div>
            {product.images.length > 1 && (
              <div className="thumbnails" aria-label="Product photographs">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => {
                      setSelected(i);
                      setShowVideo(false);
                    }}
                    aria-label={`View ${i === 0 ? "Potted Coriander Plant" : "Fresh Cilantro Plants"} photograph`}
                    aria-pressed={selected === i && !showVideo}
                  >
                    <img src={media(src)} alt="" width="80" height="80" />
                  </button>
                ))}
              </div>
            )}
            {product.video && (
              <button
                className="button demo-button"
                onClick={() => setShowVideo(!showVideo)}
              >
                <Play size={17} />
                {showVideo
                  ? "View product photograph"
                  : "Watch the product demonstration"}
              </button>
            )}
          </div>
          <div className="detail-copy">
            <Eyebrow>{product.category}</Eyebrow>
            <h1>{product.name}</h1>
            <p className="detail-description">{product.desc}</p>
            <div className="enquiry-note">
              <h2>Let’s find the right fit.</h2>
              <p>
                Contact our team for current price, availability and ordering
                details
                {product.category === "Plant Nutrition & Care"
                  ? ", including appropriate application guidance"
                  : ""}
                .
              </p>
            </div>
            <WhatsApp name={product.name} />
            <p className="quiet">
              Your enquiry opens WhatsApp with this product’s name ready to
              send.
            </p>
            <div className="detail-foot">
              <span>THURAI ORGANICS</span>
              <span>Sammanthurai, Sri Lanka</span>
            </div>
          </div>
        </div>
        {product.video && (
          <section className="demo-section">
            <SectionHeading
              eyebrow="SEE IT IN ACTION"
              title="Watering, thoughtfully directed."
            />
            <video
              className="large-demo"
              controls
              playsInline
              preload="none"
              poster={media("images/optimized/drip-poster.webp")}
              src={media(product.video)}
              aria-label="Full drip irrigation demonstration"
            />
          </section>
        )}
        <SectionHeading
          eyebrow="KEEP EXPLORING"
          title="More for your growing world."
          link="/products"
        />
        <div className="product-grid featured">
          {[
            ...products.filter(
              (p) => p.id !== product.id && p.category === product.category,
            ),
            ...products.filter(
              (p) => p.id !== product.id && p.category !== product.category,
            ),
          ]
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </>
  );
}
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  return product ? (
    <Detail key={id} product={product} />
  ) : (
    <>
      <PageIntro eyebrow="PRODUCT NOT FOUND" title="Let’s find something else.">
        This product is not in the current catalogue.
      </PageIntro>
      <div className="wrap section">
        <ArrowButton to="/products">Browse the collection</ArrowButton>
      </div>
    </>
  );
}
