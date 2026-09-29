import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <div className="absolute bottom-14 right-0 mb-2 hidden group-hover:block">
        <div className="bg-gray-800 text-white text-xs rounded-lg py-1 px-2 whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>
      <a
        href="https://wa.me/94706099960"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20b859] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center z-50 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
