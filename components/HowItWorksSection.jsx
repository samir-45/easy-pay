import React from 'react';
import HowItWorksCard from './HowItWorksCard';
import Image from 'next/image';

// SVG Icons (replace with your actual SVG components or paths)
const DownloadIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LinkIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const PayIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1M12 8V4m0 4a8.01 8.01 0 013.06 1.05m-3.06-1.05C12.378 8.017 12 8.005 12 8c-.005.005-.378.017-.75.05m0 0C9.916 8.028 9 8 9 8c-.71 0-1.41.05-2.06.15M9 14c-.05.71-.1 1.41-.15 2.06M9 14c-.028-.378-.005-.75-.005-1.15m0 0c.05-.71.1-1.41.15-2.06m0 0c.378-.028.75-.005 1.15-.005M12 14v4m0-4c1.657 0 3-.895 3-2s-1.343-2-3-2m0 0c-.005-.005-.378-.017-.75-.05m0 0C9.916 8.028 9 8 9 8c-.71 0-1.41.05-2.06.15M9 14c-.05.71-.1 1.41-.15 2.06M9 14c-.028-.378-.005-.75-.005-1.15m0 0c.05-.71.1-1.41.15-2.06m0 0c.378-.028.75-.005 1.15-.005" />
  </svg>
);


const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-16 my-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-[#932EFA] uppercase font-semibold text-sm">How it works</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Make payments, transfers, and more in 3 simple steps
            </h2>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-[#2E68FD] text-white font-medium  shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Get Started Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 mb-16 bg-white rounded-xl">
          <HowItWorksCard
            step="01"
            title="Download Easy Pay"
            description="Get the Easy Pay app today from the App Store or Google Play hassle free."
            icon={DownloadIcon}
          />
          <HowItWorksCard
            step="02"
            title="Link your bank or card"
            description="Easily connect your account in seconds with advanced security for peace of mind."
            icon={LinkIcon}
          />
          <HowItWorksCard
            step="03"
            title="Start paying"
            description="Easily split bills, send money to friends, and make smooth online payments instantly."
            icon={PayIcon}
          />
        </div>

        {/* Image section */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <Image src="/middle-man.svg" alt="Man using laptop in a cafe" layout="responsive" width={700} height={475} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;