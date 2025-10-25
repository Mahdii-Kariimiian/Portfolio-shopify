import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import advanced from "../assets/advanced.jpeg";

const AdvancedPlan = ({ isDarkMode }) => {
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
                    Advanced Shopify Store Development Plan
                </h1>
                <p
                    className={`text-lg mt-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    This plan is designed for businesses aiming for a fully
                    customized Shopify store with advanced features to scale
                    their online presence.
                </p>
            </header>

            {/* Services Section */}
            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div>
                    <section className="mb-12">
                        <p className="mb-6 text-3xl">
                            Price: <strong>Upon Agreement</strong>{" "}
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
                                    Fully Custom Design from Scratch:
                                </strong>{" "}
                                Complete custom design and branding tailored to
                                your specific business needs, from scratch.
                            </li>
                            <li>
                                <strong>Product Listing:</strong> Adding a large
                                number of products (up to 200) with full product
                                descriptions, images, and other details.
                            </li>
                            <li>
                                <strong>
                                    Customizing Store Pages and Product Pages:
                                </strong>{" "}
                                Full customization of both store and product
                                pages to match your brand and optimize customer
                                experience.
                            </li>
                            <li>
                                <strong>
                                    Installing Business-Specific Apps and Tools:
                                </strong>{" "}
                                Installation of Shopify apps tailored to your
                                business needs to enhance functionality and
                                customer engagement.
                            </li>
                            <li>
                                <strong>
                                    Search Engine Optimization (SEO):
                                </strong>{" "}
                                Implementation of SEO strategies to ensure your
                                store ranks higher on search engines, driving
                                more organic traffic.
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
                                <strong>Luxury Watch Store:</strong> Created a
                                fully customized Shopify store for a luxury
                                watch retailer, with advanced product filtering,
                                high-quality images, and integrated customer
                                reviews.
                            </li>
                            <li>
                                <strong>Furniture Store:</strong> Developed a
                                custom Shopify store for a high-end furniture
                                retailer, with interactive product galleries and
                                unique store page layouts.
                            </li>
                            <li>
                                <strong>Fitness Equipment Store:</strong>{" "}
                                Designed a store for a fitness equipment brand
                                with personalized product pages, advanced search
                                functionality, and custom apps for
                                fitness-related sales.
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
                                <strong>Completely Tailored Design:</strong> A
                                fully custom design based on your unique
                                business needs ensures your store stands out.
                            </li>
                            <li>
                                <strong>Advanced Features:</strong> Incorporates
                                advanced features like custom apps, SEO, and
                                more to enhance the functionality and
                                performance of your store.
                            </li>
                            <li>
                                <strong>Scalable Solution:</strong> This plan
                                offers scalability, allowing your store to grow
                                with your business by adding numerous products
                                (up to 200) and custom functionality.
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
                                with over 200 products.
                            </li>
                            <li>
                                <strong>Custom Features:</strong> Custom design
                                and advanced features are included in this plan,
                                offering a fully unique store experience.
                            </li>
                            <li>
                                <strong>Extended Support:</strong> Post-launch
                                support is included for an extended period to
                                ensure smooth operations.
                            </li>
                        </ul>
                    </section>
                </div>
                <img
                    src={advanced}
                    alt="advanced plan"
                    className="max-w-[500px] w-full"
                />
            </div>
            <Link to="/order" className="flex items-center text-darkGreen">
                <FaArrowLeft className="mr-2" /> Back
            </Link>
        </div>
    );
};

export default AdvancedPlan;
