import Link from "next/link";

// components/CallToAction.jsx
export default function CallToAction() {
  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/cta.svg"
            alt="Secure payments"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 lg:py-24 gap-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl  font-bold text-white leading-tight">
            Ready to experience seamless <br /> secure payments globally
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 text-base md:text-lg max-w-2xl">
            Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today. It’s fast, free, and focused on keeping your transactions secure!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Download the App
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}