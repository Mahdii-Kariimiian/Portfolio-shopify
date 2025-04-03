import React from "react";

const PricingCard = ({ title, price, description, isDarkMode }) => {
    return (
        <div
            className={`border rounded-md shadow-lg hover:shadow-xl p-6 flex flex-col items-center max-md:max-w-96 ${isDarkMode ? "hover:bg-darkGreen" : "hover:bg-slate-100"}`}
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
                {description.map((item, index) => (
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
