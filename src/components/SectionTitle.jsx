import { GiLeafSkeleton } from "react-icons/gi";

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <div
      className={`mb-10 md:mb-12 lg:mb-16 ${centered ? "text-center" : "text-left"}`}
    >
      {/* Organic Icon */}
      <div
        className={`flex ${centered ? "justify-center" : "justify-start"} mb-3`}
      >
        <GiLeafSkeleton className="w-6 h-6 text-[#2E7D32]" />
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 tracking-tight">
        {title}
      </h2>

      {/* Organic Green Underline */}
      <div
        className={`w-20 h-0.5 bg-[#2E7D32] rounded-full mb-4 md:mb-5 ${centered ? "mx-auto" : "mx-0"}`}
      ></div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
