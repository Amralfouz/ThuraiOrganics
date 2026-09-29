import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend, FiFacebook } from "react-icons/fi";
import { GiLeafSkeleton } from "react-icons/gi";
import { FaUserFriends, FaWhatsapp } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuClock1, LuMessageSquareMore } from "react-icons/lu";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}

      <div className="relative bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                <FaUserFriends className="w-7 h-7 text-[#2E7D32]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
              Contact Us
            </h1>
            <div className="w-20 h-0.5 bg-[#2E7D32] rounded-full mx-auto mb-5"></div>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Get in touch with us — we're here to help with your organic
              produce needs
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                {/* <LuMessageSquareMore className="w-5 h-5 text-[#000000]" /> */}
                <h2 className="text-xl font-semibold text-gray-800">
                  Send us a message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Nimal Perera"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] transition-all duration-200 outline-none text-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] transition-all duration-200 outline-none text-gray-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry or feedback..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] transition-all duration-200 outline-none text-gray-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#2E7D32] hover:bg-[#1b5e20] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-sm text-[#2E7D32] font-medium">
                    ✓ Thank you! We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 md:order-2 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-4">
              <div className="flex items-center gap-2 mb-6">
                {/* <FaHandshakeSimple className="w-5 h-5 text-[#2E7D32]" /> */}
                <h2 className="text-xl font-semibold text-gray-800">
                  Get in touch
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FiMapPin className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-sm text-gray-500">
                      Hijra Puram, Malwatha-1, <br />
                      Sammanthurai, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FiPhone className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Mobile</p>
                    <p className="text-sm text-gray-500">+94 70 609 9960</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FaWhatsapp className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-500">+94 70 609 9960</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <FiMail className="w-5 h-5 text-[#2E7D32] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-500">
                      thuraiorganics@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-[#2E7D32]" />
                  <span className="text-sm font-medium text-gray-700">
                    Our Location
                  </span>
                </div>
              </div>
              <iframe
                title="Thurai Organics Location - Sammanthurai"
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5!2d81.802!3d7.368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afac123456789ab%3A0x123456789abcdef!2sSammanthurai%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Business Hours Banner */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {/* <LuClock1 className="w-5 h-5 text-[#2E7D32]" /> */}
              <span className="font-semibold text-gray-800">
                Business Hours
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <LuClock1 className="w-4 h-4 text-[#2E7D32]" />
              <p className="text-sm text-gray-600 font-medium">
                Always Open — 24/7
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Orders placed anytime will be processed promptly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
