// components/SecuritySection.jsx
const securityFeatures = [
  { title: "Two-factor authentication", description: "Two-factor authentication ensures added protection by using verification steps.", colorClasses: "bg-blue-500 shadow-blue-500/40" },
  { title: "Fraud detection and alerts", description: "Fraud detection safeguards your money, sending instant alerts for any activity.", colorClasses: "bg-red-500 shadow-red-500/40" },
  { title: "Transaction notifications", description: "Instant notifications for transactions keep you informed to manage your finances.", colorClasses: "bg-green-500 shadow-green-500/40" },
  { title: "Biometric access", description: "Easily and securely log in with biometric features, and facial recognition.", colorClasses: "bg-teal-500 shadow-teal-500/40" },
  { title: "End-to-end encryption", description: "By encryption, protecting your data from unauthorized access.", colorClasses: "bg-orange-500 shadow-orange-500/40" },
  { title: "24/7 Protection support", description: "Our dedicated team is available around the clock to help you.", colorClasses: "bg-purple-500 shadow-purple-500/40" }
];

const SecuritySection = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white">
      
      {/* GLOW BACKGROUND - Fixed */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]">
          <img
            src="/glow.svg"
            alt="Glow background"
            className="w-full h-full object-contain opacity-60 blur-3xl animate-pulse"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#932EFA]">Security</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We protect your money at every step with Easy Pay
            </h2>
          </div>
          <div className="flex items-center pt-2">
            <p className="text-base text-gray-600">
              Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-0">
          {securityFeatures.map((feature, idx) => {
            const isFirstInRow = idx % 3 === 0;
            const isBottomRow = idx >= 3;

            return (
              <div
                key={feature.title}
                className={`
                  p-8
                  ${!isFirstInRow ? "border-l border-gray-200" : ""}
                  ${isBottomRow ? "border-t border-gray-200" : ""}
                  bg-white/80 backdrop-blur-sm
                `}
              >
                <span
                  className={`block h-3 w-3 rounded-full mb-4 shadow-lg ${feature.colorClasses}`}
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;