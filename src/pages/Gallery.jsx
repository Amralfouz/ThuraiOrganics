import { useState } from "react";
import { GiLeafSkeleton, GiPlantRoots, GiFarmer } from "react-icons/gi";
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  {
    src: "/images/istockphoto-1326644171-612x612.jpg",
    alt: "Organic farm landscape",
    category: "farm",
  },
  {
    src: "/images/images.jpg",
    alt: "Sustainable farming practices",
    category: "farm",
  },
  {
    src: "/images/harvest1.jpg.webp",
    alt: "Fresh harvest season",
    category: "harvest",
  },
  { src: "/images/veg2.jpg", alt: "Organic vegetables", category: "produce" },
  {
    src: "/images/fruit1.webp",
    alt: "Fresh organic fruits",
    category: "produce",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src,
    );
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            {/* Icon Accent */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                <GiFarmer className="w-7 h-7 text-[#2E7D32]" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
              Farm Gallery
            </h1>
            <div className="w-20 h-0.5 bg-[#2E7D32] rounded-full mx-auto mb-5"></div>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Explore our organic farming journey — from seed to harvest,
              witness the beauty of sustainable agriculture in Sammanthurai
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-[#2E7D32] text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <GiPlantRoots className="w-3 h-3 text-green-300" />
                    <span className="text-white/80 text-xs">Organic Farm</span>
                  </div>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FiZoomIn className="w-4 h-4 text-[#2E7D32]" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {filteredImages.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <GiLeafSkeleton className="w-5 h-5 text-[#2E7D32]" />
                <span className="text-sm text-gray-600">
                  {filteredImages.length}{" "}
                  {filteredImages.length === 1 ? "Photo" : "Photos"}
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">🌱 100% Organic</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  📍 Sammanthurai, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            aria-label="Close"
          >
            <FiX className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                aria-label="Next image"
              >
                <FiChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-center text-base font-medium">
                {selectedImage.alt}
              </p>
              <p className="text-white/70 text-center text-sm mt-1">
                Thurai Organics • Sammanthurai, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
