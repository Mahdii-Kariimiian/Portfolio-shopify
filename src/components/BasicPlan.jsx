import React from "react";
import basic from "../assets/basic.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BasicPlan = ({ isDarkMode }) => {
    return (
        <div
            className={`container mx-auto p-6 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            {/* Header */}
            <header className="text-center my-12">
                <h1 className="text-4xl font-bold">
                    Basic Shopify Store Development Plan
                </h1>
                <p
                    className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    This plan is designed for businesses aiming to establish an
                    online store efficiently and cost-effectively.
                </p>
            </header>

            {/* Services Section */}
            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div>
                    <section className="mb-12">
                        <h2
                            className={`text-2xl font-semibold ${
                                isDarkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                        >
                            Services Included:
                        </h2>
                        <ul
                            className={`list-disc pl-6 mt-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            <li>
                                <strong>Pre-made Template Design:</strong>{" "}
                                Selection and customization of a pre-designed
                                Shopify template that aligns with your brand's
                                identity and meets your business needs.
                            </li>
                            <li>
                                <strong>
                                    Shopify Store Setup and Installation:
                                </strong>
                                Initial configuration of your Shopify store,
                                including plan selection, general settings, and
                                domain connection.
                            </li>
                            <li>
                                <strong>Adding Initial Products:</strong>{" "}
                                Incorporation of up to 50 products, complete
                                with images, detailed descriptions, and pricing
                                information.
                            </li>
                            <li>
                                <strong>
                                    Initial Payment and Shipping Settings:
                                </strong>
                                Configuration of payment gateways and shipping
                                options to ensure smooth transactions and
                                delivery processes.
                            </li>
                            <li>
                                <strong>Basic Admin Panel Training:</strong>{" "}
                                Provision of a training session to familiarize
                                you with managing products, processing orders,
                                and utilizing other administrative features of
                                your store.
                            </li>
                        </ul>
                    </section>
                    {/* Sample Projects Section */}
                    <section className="mb-12">
                        <h2
                            className={`text-2xl font-semibold ${
                                isDarkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                        >
                            Sample Projects:
                        </h2>
                        <ul
                            className={`list-disc pl-6 mt-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            <li>
                                <strong>Online Clothing Store:</strong>{" "}
                                Developed a Shopify store for a local clothing
                                brand, featuring a responsive design and
                                user-friendly navigation.
                            </li>
                            <li>
                                <strong>Beauty Products Shop:</strong> Set up an
                                online store for a beauty product line,
                                emphasizing high-quality images and detailed
                                product descriptions.
                            </li>
                            <li>
                                <strong>Home Appliances Retailer:</strong>{" "}
                                Created a Shopify store for a home appliance
                                retailer, incorporating customer reviews and
                                product comparison features.
                            </li>
                        </ul>
                        <p
                            className={`mt-4 italic ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            More projects will be added soon!
                        </p>
                    </section>
                    {/* Why Choose This Plan Section */}
                    <section className="mb-12">
                        <h2
                            className={`text-2xl font-semibold ${
                                isDarkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                        >
                            Why Choose This Plan?
                        </h2>
                        <ul
                            className={`list-disc pl-6 mt-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            <li>
                                <strong>Cost-Effective:</strong> Utilizes
                                pre-designed templates and standardized services
                                to offer an affordable solution for launching
                                your online store.
                            </li>
                            <li>
                                <strong>Quick Launch:</strong> Streamlined
                                processes ensure your store is operational in a
                                shorter timeframe, allowing you to start selling
                                sooner.
                            </li>
                            <li>
                                <strong>Essential Features:</strong> Covers all
                                fundamental aspects required for a functional
                                online store, ensuring a smooth user experience
                                for both you and your customers.
                            </li>
                        </ul>
                    </section>
                    {/* Important Notes Section */}
                    <section className="mb-12">
                        <h2
                            className={`text-2xl font-semibold ${
                                isDarkMode ? "text-gray-200" : "text-gray-800"
                            }`}
                        >
                            Important Notes:
                        </h2>
                        <ul
                            className={`list-disc pl-6 mt-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            <li>
                                <strong>Product Limit:</strong> Ideal for stores
                                with up to 50 products.
                            </li>
                            <li>
                                <strong>Feature Limitations:</strong> Advanced
                                Shopify features may not be included in this
                                plan.
                            </li>
                            <li>
                                <strong>Limited Support:</strong> Post-launch
                                support is available for a specified period;
                                extended support may incur additional charges.
                            </li>
                        </ul>
                    </section>
                </div>
                <img src={basic} alt="basic plan" className="max-w-[500px] w-full" />
            </div>
            <Link to="/order" className="flex items-center text-darkGreen">
                <FaArrowLeft className="mr-2" /> Back
            </Link>
        </div>
    );
};

export default BasicPlan;
