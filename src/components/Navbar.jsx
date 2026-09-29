import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    // { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Container */}
            {/* <div className="w-20 h-20 rounded-xl bg-green-50 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-green-100 transition-all duration-300">
            </div> */}
            <img
              src="/images/logo.png"
              alt="Thurai Organics Logo"
              className="w-20 h-20 object-contain"
              // style={{ borderRadius: "20px" }}
            />

            {/* Brand Text */}
            <span className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
              Thurai <span className="text-[#2E7D32] font-bold">Organics</span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#2E7D32] bg-green-50"
                    : "text-gray-600 hover:text-[#2E7D32] hover:bg-gray-50"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#2E7D32] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#2E7D32] hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#2E7D32] bg-green-50"
                    : "text-gray-600 hover:text-[#2E7D32] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
