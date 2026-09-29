import { Link } from "react-router-dom";
import { ShoppingBag, MessageCircle, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
    relative
    h-[550px]
    min-h-[350px]
    sm:min-h-[500px]
    md:h-[90vh]
    lg:h-[90vh]
    flex
    items-center
    justify-center
    overflow-hidden
  "
    >
      {/* Background Image with subtle zoom effect on load */}
      <img
        src="/images/tropical-farm-landscape-stockcake.webp"
        alt="Cover"
        className="
        absolute inset-0
        w-full h-full
        blur-[2px]
        scale-105
        max-w-full
        max-h-full
      "
      />
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Organic Leaf Accent */}
        <div className="flex justify-center mb-6 animate-fade-in">
          {/* <div className="w-20 h-20 rounded-[10px] bg-[rgba(254, 254, 254, 0.5)] backdrop-blur-sm flex items-center justify-center border border-white/30">
            <img
              src="/images/logo.png"
              alt="Thurai Organics Logo"
              className="w-18 h-18 object-contain"
              style={{ borderRadius: "10px" }}
            />
          </div> */}
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
          Fresh Organic Produce from{" "}
          <span className="relative inline-block">
            Sammanthurai
            <svg
              className="absolute bottom-2 left-0 w-full h-3 -z-10"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10, 100 5 Q 150 0, 200 5"
                stroke="#4caf50"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up animation-delay-100">
          We grow and deliver fresh organic produce straight from our farm in
          Sri Lanka. 100% chemical-free, sustainably grown with traditional
          farming values.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1b5e20] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>View Products</span>
          </Link>

          <a
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm hover:bg-white text-[#2E7D32] px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg border border-white/30"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order via WhatsApp</span>
          </a>
        </div>

        {/* Trust Badge */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm animate-fade-in-up animation-delay-300">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            100% Organic
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            Fresh Harvest
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            No Chemicals
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            Local Farm
          </span>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Add these custom animations to your global CSS or Tailwind config
// If you don't want custom CSS, remove the animate-* classes
