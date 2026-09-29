import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { FiSearch, FiFilter } from "react-icons/fi";
import { GiPlantsAndAnimals } from "react-icons/gi";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories from products (if categories exist in your data)
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category || "Vegetables")),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                <GiPlantsAndAnimals className="w-7 h-7 text-[#2E7D32]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Organic Products
            </h1>
            <div className="w-20 h-0.5 bg-[#2E7D32] rounded-full mx-auto mb-5"></div>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Fresh from our farm to your table — 100% chemical-free,
              sustainably grown in Sammanthurai
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Search and Filter Bar */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] transition-all duration-200 outline-none text-gray-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FiFilter className="w-5 h-5 text-gray-400" />
              {/* <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-[#2E7D32] text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div> */}
              <div className="w-full sm:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="
                  w-full
                  sm:w-48
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  text-gray-700
                  text-sm
                  font-medium
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#2E7D32]
                "
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredProducts.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">
              {products.length}
            </span>{" "}
            products
          </p>
        </div>
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16 md:py-20">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-6 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Trust Banner */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="bg-green-50 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <p className="font-medium text-gray-800">Free Delivery</p>
                  <p className="text-sm text-gray-500">
                    On orders over LKR 5,000
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">🌿</span>
                  <p className="font-medium text-gray-800">100% Organic</p>
                  <p className="text-sm text-gray-500">
                    Certified chemical-free
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <p className="font-medium text-gray-800">Customer Love</p>
                  <p className="text-sm text-gray-500">
                    4.9/5 from 500+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
