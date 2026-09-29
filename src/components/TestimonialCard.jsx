export default function TestimonialCard({ name, text }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <p className="text-gray-600 italic">"{text}"</p>
      <h4 className="mt-4 font-semibold text-green-700">- {name}</h4>
    </div>
  );
}
