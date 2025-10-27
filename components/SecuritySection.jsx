// components/SecuritySection.jsx
export default function SecuritySection() {
  const features = [
    {
      title: "Two-factor authentication",
      desc: "Two-factor authentication ensures added protection by using verification steps.",
      iconColor: "bg-blue-500",
    },
    {
      title: "Fraud detection and alerts",
      desc: "Fraud detection safeguards your money, sending instant alerts for any activity.",
      iconColor: "bg-red-500",
    },
    {
      title: "Transaction notifications",
      desc: "Instant notifications for transactions keep you informed to manage your finances.",
      iconColor: "bg-green-500",
    },
    {
      title: "Biometric access",
      desc: "Easily and securely log in with biometric features, and facial recognition.",
      iconColor: "bg-cyan-500",
    },
    {
      title: "End-to-end encryption",
      desc: "By encryption, protecting your data from unauthorized access.",
      iconColor: "bg-yellow-500",
    },
    {
      title: "24/7 Protection support",
      desc: "Our dedicated team is available around the clock to help you.",
      iconColor: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Security
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            We protect your money at every step with Easy Pay
          </h2>
        </div>

        {/* Right: Description */}
        <div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 rounded-full ${feature.iconColor} flex items-center justify-center shadow-md`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}