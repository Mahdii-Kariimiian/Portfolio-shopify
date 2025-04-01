import React from "react";
import intermediateImage from "../assets/intermediate.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const IntermediatePlan = ({ isDarkMode }) => {
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
                    Intermediate Shopify Store Development Plan
                </h1>
                <p
                    className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    This plan is perfect for businesses that require more
                    customization and advanced features for their online store.
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
                                <strong>
                                    Custom Template Design or Editing Pre-made
                                    Templates:
                                </strong>{" "}
                                Customization of pre-designed templates or full
                                custom design to match your brand's identity and
                                business needs.
                            </li>
                            <li>
                                <strong>Adding 50 to 100 Products:</strong>{" "}
                                Incorporation of up to 100 products, with
                                images, detailed descriptions, and accurate
                                pricing information.
                            </li>
                            <li>
                                <strong>Multi-language Support:</strong>{" "}
                                Integration of multiple languages to cater to a
                                global customer base, ensuring a personalized
                                shopping experience.
                            </li>
                            <li>
                                <strong>
                                    Adding Product Pages and Additional Pages:
                                </strong>{" "}
                                Creation of custom product pages and additional
                                pages (FAQs, Terms of Service, Privacy Policy,
                                etc.)
                            </li>
                            <li>
                                <strong>
                                    Installing Shopify Apps and Tools:
                                </strong>{" "}
                                Installation of essential Shopify apps and tools
                                for better functionality (analytics, SEO,
                                marketing tools, etc.).
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
                                <strong>International Fashion Store:</strong>{" "}
                                Custom Shopify store with multi-language support
                                and product customization options.
                            </li>
                            <li>
                                <strong>Tech Gadgets E-Commerce:</strong>{" "}
                                Advanced product filtering, enhanced product
                                pages, and multiple Shopify apps integration.
                            </li>
                            <li>
                                <strong>Home Décor Brand:</strong> Highly
                                customized Shopify store with custom product
                                pages and detailed category navigation.
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
                                <strong>Advanced Customization:</strong> Ensures
                                your store stands out and meets your unique
                                business needs.
                            </li>
                            <li>
                                <strong>
                                    Multi-language and Global Reach:
                                </strong>{" "}
                                Ideal for expanding internationally with
                                localized shopping experiences.
                            </li>
                            <li>
                                <strong>Enhanced Functionality:</strong>{" "}
                                Additional tools and apps improve store
                                performance and scalability.
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
                                <strong>Product Limit:</strong> Suitable for
                                stores with 50 to 100 products.
                            </li>
                            <li>
                                <strong>Feature Limitations:</strong> Highly
                                customized features may have additional costs.
                            </li>
                            <li>
                                <strong>Extended Support:</strong> Post-launch
                                support may incur additional charges.
                            </li>
                        </ul>
                    </section>
                </div>
                <img
                    src={intermediateImage}
                    alt="intermediate plan"
                    className="max-w-[500px] w-full"
                />
            </div>
            <Link to="/order" className="flex items-center text-darkGreen">
                <FaArrowLeft className="mr-2" /> Back
            </Link>
        </div>
    );
};

export default IntermediatePlan;
