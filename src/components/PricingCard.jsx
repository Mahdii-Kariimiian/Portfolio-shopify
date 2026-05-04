import React from "react";

const PricingCard = ({ title, price, features, isDarkMode }) => {
    return (
        <div
            className={`group relative border rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-default p-6 flex flex-col items-center max-md:max-w-96 ${
                isDarkMode
                    ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40"
                    : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
            }`}
        >
            <h3 className={`text-xl font-semibold`}>{title}</h3>
            <p
                className={`text-lg mt-2 ${
                    isDarkMode ? "text-lightGreen" : "text-darkGreen"
                }`}
            >
                {price}
            </p>
            <ul className="mt-4 space-y-2">
                {features.map((item, index) => (
                    <li key={index} className='flex items-start'>
                        <span className='mr-2'>•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;
