import React from 'react';

const HowItWorksCard = ({ step, title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg">
      <div className="relative mb-4">
        <span className="text-5xl font-bold text-gray-200 absolute -top-2 -left-2 opacity-75">{step}</span>
        <div className="pt-4 z-50 relative">
          <Icon className="h-8 w-8 " />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorksCard;