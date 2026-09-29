export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Organic Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
          <span className="text-sm">🌿</span>
          <span className="text-xs font-medium text-gray-700">Organic</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {product.desc}
        </p>

        <a
          href={`https://wa.me/947XXXXXXXX?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
        >
          <span>📞</span>
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
