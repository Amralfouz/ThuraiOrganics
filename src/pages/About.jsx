import { GiPlantSeed } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-green-50 to-white border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center">
                <GiPlantSeed className="w-6 h-6 text-[#2E7D32]" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              About Us
            </h2>

            <div className="w-20 h-0.5 bg-[#2E7D32] rounded-full mx-auto mb-6"></div>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Thurai Organics is built on traditional farming values, focusing
              on chemical-free cultivation and sustainable agriculture in
              Sammanthurai, Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Image Card */}
      <div className="py-2 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100">
        <img
          src="/images/coverPic.jpg"
          alt="Organic farm landscape in Sammanthurai, Sri Lanka"
          className="w-full h-auto  object-cover aspect-video md:aspect-[21/9]"
        />
        <div className="p-4 md:p-5 bg-white border-t border-gray-50">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E7D32]"></span>
            Our heritage farm in Sammanthurai — chemical-free since day one
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="my-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
        <div className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
          <PiPlantFill className="w-8 h-8 text-[#2E7D32] mb-3" />
          <h3 className="font-semibold text-gray-800 text-lg mb-1">
            100% Chemical-Free
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Traditional composting & natural pest control methods
          </p>
        </div>

        <div className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
          <PiPlantFill className="w-8 h-8 text-[#2E7D32] mb-3" />
          <h3 className="font-semibold text-gray-800 text-lg mb-1">
            Sustainably Grown
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Regenerative practices for future generations
          </p>
        </div>

        <div className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
          <PiPlantFill className="w-8 h-8 text-[#2E7D32] mb-3" />
          <h3 className="font-semibold text-gray-800 text-lg mb-1">
            Farmer-First
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Direct support to local Sammanthurai growers
          </p>
        </div>
      </div>
    </div>
  );
}
