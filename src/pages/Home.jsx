import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <SectionTitle
          title="Featured Organic Produce"
          subtitle="Fresh harvest directly from our farm"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Optional subtle view more link */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#2E7D32] font-medium hover:text-[#1b5e20] transition-colors duration-200 group"
          >
            <span>View All Products</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section - Soft organic green background */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 border-y border-green-100">
        <SectionTitle
          title="Why Choose Thurai Organics"
          subtitle="Pure farming, trusted quality, natural growth"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto mt-8 md:mt-10">
          {[
            {
              emoji: "🌱",
              title: "100% Organic",
              desc: "Certified chemical-free farming",
            },
            {
              emoji: "🥬",
              title: "Fresh Harvest",
              desc: "Picked at peak ripeness",
            },
            {
              emoji: "🚫",
              title: "No Chemicals",
              desc: "Pure traditional methods",
            },
            {
              emoji: "🇱🇰",
              title: "Local Sri Lankan Farm",
              desc: "Supporting Sammanthurai growers",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <div className="font-semibold text-gray-800 text-lg mb-1">
                {item.title}
              </div>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-4 sm:px-6">
        <SectionTitle
          title="What Customers Say"
          subtitle="Trusted by families across Sri Lanka"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
          <TestimonialCard
            name="Nimal Perera"
            text="Best organic vegetables I've ever bought locally. The freshness is unmatched!"
          />
          <TestimonialCard
            name="Ayesha Fernando"
            text="Super fresh and delivered fast. Highly recommended for anyone looking for quality."
          />
          <TestimonialCard
            name="Rashid Ismail"
            text="Feels like real farm-to-table quality. Will definitely order again."
          />
        </div>

        {/* Trust badge */}
        <div className="text-center mt-10 md:mt-12 pt-6 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
            Join 1,000+ happy families
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
