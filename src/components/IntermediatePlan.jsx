import { useEffect } from "react";
import intermediateImage from "../assets/intermediate.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const IntermediatePlan = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    This plan is ideal for businesses that need a balance of
                    customization and functionality to create a professional
                    online store.
                </p>
            </header>

            {/* Services Section */}
            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div>
                    <section className="mb-12">
                        <p className="mb-6 text-3xl">
                            Price: Up to <strong>€149</strong>{" "}
                        </p>
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
                                Customization of pre-made templates to match
                                your brand's identity or a simple custom design
                                to meet your business goals.
                            </li>
                            <li>
                                <strong> Product Listing:</strong>{" "}
                                Incorporation of up to 50 products with images, descriptions, and accurate pricing
                            </li>
                            <li>
                                <strong>Multi-Currency Support:</strong>{" "}
                                Integration of multiple currencies for global
                                customer support.
                            </li>
                            <li>
                                <strong>Custom Pages and Features:</strong>{" "}
                                Creation of essential custom pages (About Us,
                                Contact, Blog) and simple functionalities like
                                product filters.
                            </li>
                            <li>
                                <strong>
                                    Integrating Shopify Apps for Enhanced
                                    Functionality:
                                </strong>{" "}
                                Installation of essential apps like SEO, email
                                marketing, and reviews to enhance the store's
                                performance.
                            </li>
                        </ul>
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
                                <strong>Balanced Customization:</strong> Offers
                                flexibility in design and features without going
                                overboard on complexity.
                            </li>
                            <li>
                                <strong>Global Reach:</strong> Multi-currency
                                support helps you reach an international
                                customer base.
                            </li>
                            <li>
                                <strong>Enhanced Performance:</strong>{" "}
                                Integration of key Shopify apps for better
                                functionality and store growth.
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
                                stores with up to 50 products.
                            </li>
                            <li>
                                <strong>Feature Limitations:</strong> Some
                                advanced features may require additional
                                charges.
                            </li>
                            <li>
                                <strong>Extended Support:</strong> Post-launch
                                support is available with an additional charge.
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
