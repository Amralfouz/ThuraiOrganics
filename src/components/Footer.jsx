import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <div className="w-20 h-20flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Thurai Organics Logo"
                  className="w-full h-full object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                />
              </div>
              {/* <span className="text-xl font-bold text-gray-800">
                Thurai <span className="text-[#2E7D32]">Organics</span>
              </span> */}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Pure farming, trusted quality, natural growth. Serving fresh
              organic produce from Sammanthurai, Sri Lanka.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#2E7D32] text-[#2E7D32] hover:bg-green-50 hover:text-[#000000] hover:border-[#000000] transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookSquare className="w-5 h-5" />
                <span className="text-sm font-medium">Thurai Organics</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-gray-500 hover:text-[#2E7D32] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm text-gray-500">
                <FiMapPin className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                <span>Sammanthurai, Sri Lanka</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm text-gray-500">
                <FiPhone className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                <span>+94 70 609 0960</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 text-sm text-gray-500">
                <FiMail className="w-4 h-4 text-[#2E7D32] flex-shrink-0" />
                <span>thuraiorganics@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-500 mb-3">
              Get fresh updates about harvests & offers
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] transition-all duration-200 outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Thurai Organics. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a
                href="#"
                className="hover:text-[#2E7D32] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="hover:text-[#2E7D32] transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="hover:text-[#2E7D32] transition-colors duration-200"
              >
                Returns Policy
              </a>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
              <span className="inline-block w-1 h-1 rounded-full bg-[#2E7D32]"></span>
              Fresh • Organic • Trusted
              <span className="inline-block w-1 h-1 rounded-full bg-[#2E7D32]"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
