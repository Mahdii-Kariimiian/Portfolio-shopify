import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import { pricingData } from "../db/db";

const Order = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        productsCount: "under10",
        businessType: "",
        isPhysical: "yes",
        needCustomDesign: "no",
        message: "",
        dropshipping: "no",
        multilingual: "no",
        orderManagement: "no",
        projectTime: "no-rush",
    });

    const [submitted, setSubmitted] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "radio") {
            setFormData({ ...formData, [name]: value });
        } else if (type === "checkbox") {
            if (checked) {
                setFormData({
                    ...formData,
                    [name]: [...formData[name], value],
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: formData[name].filter((item) => item !== value),
                });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xm5pbcm",
                "template_bqcniev",
                form.current,
                "mV9rGASfViXLoUkhx"
            )
            .then(
                (response) => {
                    console.log("Success:", response);
                    setSubmitted(true);
                },
                (error) => {
                    console.log("Error:", error);
                }
            );
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 items-stretch gap-5 py-10 md:px-10 px-4 justify-center">
                {pricingData.map((card) => {
                    return (
                        <Link
                            className="max-md:m-auto"
                            to={card.url}
                            key={card.title}
                        >
                            <PricingCard
                                isDarkMode={isDarkMode}
                                title={card.title}
                                price={card.price}
                                description={card.description}
                            />
                        </Link>
                    );
                })}
            </section>

            <section
                className={`w-full max-w-2xl mx-auto text-center p-8 mt-10 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
                {!submitted ? (
                    <div>
                        <h1
                            className={`text-3xl font-bold mb-16 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Share your website details, and I'll provide a
                            personalized quote.
                        </h1>

                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="mt-6 flex flex-col space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen ${
                                    isDarkMode
                                        ? "bg-gray-500 placeholder-white text-white"
                                        : ""
                                }`}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen ${
                                    isDarkMode
                                        ? "bg-gray-500 placeholder-white text-white"
                                        : ""
                                }`}
                            />
                            <div className="text-left mt-4">
                                <label
                                    className={`text-gray-700 font-semibold mb-2 block ${
                                        isDarkMode ? "text-white" : ""
                                    }`}
                                >
                                    Number of Products:
                                </label>
                                <select
                                    name="productsCount"
                                    value={formData.productsCount}
                                    onChange={handleChange}
                                    className={`p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen w-full ${
                                        isDarkMode
                                            ? "bg-gray-500 placeholder-white text-white"
                                            : ""
                                    }`}
                                >
                                    <option value="under10">Under 10</option>
                                    <option value="10to20">10 to 20</option>
                                    <option value="20to40">20 to 40</option>
                                    <option value="above40">Above 40</option>
                                </select>
                            </div>
                            <input
                                type="text"
                                name="businessType"
                                placeholder="Business Type (e.g., Fashion, Electronics)"
                                value={formData.businessType}
                                onChange={handleChange}
                                className={`p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen ${
                                    isDarkMode
                                        ? "bg-gray-500 placeholder-white text-white"
                                        : ""
                                }`}
                            />
                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    Are your products physical?
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="isPhysical"
                                            value="yes"
                                            checked={
                                                formData.isPhysical === "yes"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="isPhysical"
                                            value="no"
                                            checked={
                                                formData.isPhysical === "no"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    Do you need a custom design?
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="needCustomDesign"
                                            value="yes"
                                            checked={
                                                formData.needCustomDesign ===
                                                "yes"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="needCustomDesign"
                                            value="no"
                                            checked={
                                                formData.needCustomDesign ===
                                                "no"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            {/* New Questions */}
                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    Do you do dropshipping?
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="dropshipping"
                                            value="yes"
                                            checked={
                                                formData.dropshipping === "yes"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="dropshipping"
                                            value="no"
                                            checked={
                                                formData.dropshipping === "no"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    Do you need a multilingual website?
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="multilingual"
                                            value="yes"
                                            checked={
                                                formData.multilingual === "yes"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="multilingual"
                                            value="no"
                                            checked={
                                                formData.multilingual === "no"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    Do you need order management for a specific
                                    period after launch?
                                </label>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="orderManagement"
                                            value="yes"
                                            checked={
                                                formData.orderManagement ===
                                                "yes"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="orderManagement"
                                            value="no"
                                            checked={
                                                formData.orderManagement ===
                                                "no"
                                            }
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className="text-left mt-4">
                                <label
                                    className={`${
                                        isDarkMode
                                            ? "text-white"
                                            : "text-gray-700"
                                    } font-semibold`}
                                >
                                    What is your expected project completion
                                    time?
                                </label>
                                <select
                                    name="projectTime"
                                    value={formData.projectTime}
                                    onChange={handleChange}
                                    className={`p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen w-full ${
                                        isDarkMode
                                            ? "bg-gray-500 placeholder-white text-white"
                                            : ""
                                    }`}
                                >
                                    <option value="under-2-weeks">
                                        Under 2 weeks
                                    </option>
                                    <option value="2-weeks-to-1-month">
                                        2 weeks to 1 month
                                    </option>
                                    <option value="no-rush">No rush</option>
                                </select>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Additional Details (optional)"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className={`p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-darkGreen ${
                                    isDarkMode
                                        ? "bg-gray-500 placeholder-white text-white"
                                        : ""
                                }`}
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-darkGreen hover:bg-lightGreen text-white rounded-md transition duration-200"
                            >
                                Submit Order
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-10 mt-10">
                        <h2
                            className={`text-3xl font-bold ${
                                isDarkMode
                                    ? "text-lightGreen"
                                    : "text-darkGreen"
                            }`}
                        >
                            Thank You!
                        </h2>
                        <p
                            className={`text-lg ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            Your request has been received. I will contact you
                            shortly!
                        </p>
                        <Link
                            className={`px-6 py-3 ${
                                isDarkMode
                                    ? "text-lightGreen hover:text-white"
                                    : "text-darkGreen hover:text-lightGreen"
                            } rounded-md transition duration-200 mt-16`}
                            to="/"
                        >
                            <p>Back to home</p>
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Order;
