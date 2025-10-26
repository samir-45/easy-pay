// app/components/Features.tsx
"use client";

import { ShieldCheck, Wallet, FileText, Send } from "lucide-react";


const features = [
  {
    name: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
    icon: Send,
    color: "bg-[#2E68FD25]",
  },
  {
    name: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
    icon: FileText,
    color: "bg-[#FBF6EF]",
  },
  {
    name: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
    icon: Wallet,
    color: "bg-[#EEF9FE]",
  },
  {
    name: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
    icon: ShieldCheck,
    color: "bg-[#F4EDFC]",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#932EFA]">
            FEATURES
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why choose Easy Pay for <br /> effortless payments?
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className={`rounded-xl border border-gray-200  p-6 text-center shadow-sm hover:shadow-md transition ${feature.color}`}
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full `}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}