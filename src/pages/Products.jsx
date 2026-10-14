import { Link, useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import products, { categories } from "../data/products";
import { PageMeta, PageIntro, ProductCard } from "../components/UI";
export default function Products() {
  const [params, setParams] = useSearchParams();
  const search = params.get("q") || "";
  const category = params.get("category") || "";
  const filtered = products.filter(
    (p) =>
      (!category || p.category === category) &&
      p.name.toLowerCase().includes(search.trim().toLowerCase()),
  );
  function update(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  }
  return (
    <>
      <PageMeta
        title="Our Products"
        description="Browse plants, fresh produce, herbs, compost, plant care and irrigation equipment from Thurai Organics. Search the catalogue and enquire directly on WhatsApp."
      />
      <PageIntro
        eyebrow="THE THURAI COLLECTION"
        title={
          <>
            For your table.
            <br />
            <em>For your growing world.</em>
          </>
        }
      >
        Explore our produce, plants and agricultural essentials. Ask us for
        current prices, availability and ordering details.
      </PageIntro>
      <section className="wrap catalogue">
        <div className="filter-bar">
          <label className="search">
            <Search size={20} />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              placeholder="Find something to grow…"
              value={search}
              onChange={(e) => update("q", e.target.value)}
            />
          </label>
          <label className="category-select">
            <span className="sr-only">Product category</span>
            <select
              aria-label="Product category"
              value={category}
              onChange={(e) => update("category", e.target.value)}
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="catalogue-layout">
          <aside className="category-sidebar">
            <h2>Our collections</h2>
            <button
              className={!category ? "selected" : ""}
              onClick={() => update("category", "")}
            >
              All products <span>{products.length}</span>
            </button>
            {categories.map((c) => (
              <button
                key={c}
                className={category === c ? "selected" : ""}
                onClick={() => update("category", c)}
              >
                {c}
                <span>{products.filter((p) => p.category === c).length}</span>
              </button>
            ))}
            <div className="sidebar-note">
              A little help choosing?
              <p>Talk to us about your garden, farm or next harvest.</p>
              <Link to="/contact">Get in touch ↗</Link>
            </div>
          </aside>
          <div>
            <div className="results-line">
              <p role="status">
                {filtered.length}{" "}
                {filtered.length === 1 ? "product" : "products"}
                {category ? ` in ${category}` : " to explore"}
              </p>
              {(search || category) && (
                <button className="clear-button" onClick={() => setParams({})}>
                  <X size={15} />
                  Clear filters
                </button>
              )}
            </div>
            {filtered.length ? (
              <div className="product-grid">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No matching products yet.</h2>
                <p>Try a shorter name or explore another category.</p>
                <button className="button" onClick={() => setParams({})}>
                  Show all products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
