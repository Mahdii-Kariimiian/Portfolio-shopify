import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import { pricingData } from "../db/db";

const Order = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: "",
        goal: "",
        budget: "",
        products_count: "under20",
        business_type: "",
        business_model: "",
        timeline: "no-rush",
        website: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
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

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        // Pre-fill form based on selected plan
        if (plan.title === "Basic Plan") {
            setFormData(prev => ({ ...prev, products_count: "under20", budget: "500-1000" }));
        } else if (plan.title === "Advanced Plan") {
            setFormData(prev => ({ ...prev, budget: "2000+" }));
        }
    };

    const handleNextStep = () => {
        if (currentStep === 1 && formData.from_name && formData.from_email) {
            setCurrentStep(2);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await emailjs.send(
                "service_xm5pbcm",
                "template_bqcniev",
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    message: formData.message,
                    goal: formData.goal,
                    budget: formData.budget,
                    products_count: formData.products_count,
                    business_model: formData.business_model,
                    timeline: formData.timeline,
                    website: formData.website || "not provided",
                }
            );

            if (response.status === 200) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error('EmailJS error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 py-8 md:px-10 px-4 justify-center">
                {pricingData.map((card) => {
                    const isFeatured = card.featured;
                    return (
                        <div
                            key={card.title}
                            className={`relative max-md:m-auto transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                                isFeatured ? 'scale-105 z-10' : ''
                            }`}
                            onClick={() => handlePlanSelect(card)}
                        >
                            {isFeatured && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <Link
                                className="block"
                                to={card.url}
                            >
                                <div className={`relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                                    isDarkMode 
                                        ? isFeatured 
                                            ? "bg-dark-surface/90 border-2 border-green-600 shadow-lg"
                                            : "bg-dark-surface/60 border border-dark-border/50 hover:border-green-600/40"
                                        : isFeatured
                                            ? "bg-white border-2 border-green-600 shadow-lg"
                                            : "bg-white border border-gray-200 hover:border-green-600/40"
                                }`}>
                                    <h3 className={`text-lg font-medium mb-2 ${
                                        isDarkMode ? "text-white" : "text-gray-900"
                                    }`}>
                                        {card.title}
                                    </h3>
                                    <div className={`text-2xl font-bold mb-4 ${
                                        isDarkMode ? "text-green-400" : "text-green-600"
                                    }`}>
                                        {card.price}
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        {card.description.map((item, index) => (
                                            <li key={index} className={`flex items-start ${
                                                isDarkMode ? "text-gray-300" : "text-gray-600"
                                            }`}>
                                                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </section>

            <section
                className={`w-full max-w-xl mx-auto text-center p-8 mt-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
                {!submitted ? (
                    <div>
                        <h1
                            className={`text-3xl font-bold mb-4 ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Get Your Custom Quote
                        </h1>
                        
                        <p className={`text-sm mb-6 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                            No commitment • Free estimate • 24h response
                        </p>

                        {/* Progress Indicator */}
                        <div className="mb-6">
                            <div className={`text-sm font-medium mb-2 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                                Step {currentStep} of 2 – Takes less than 30 seconds
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: currentStep === 1 ? '50%' : '100%' }}
                                ></div>
                            </div>
                        </div>

                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {currentStep === 1 ? (
                                // Step 1: Basic Information
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="from_name"
                                        placeholder="Your Name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                            isDarkMode
                                                ? "bg-dark-surface/60 border-dark-border/50 text-white placeholder-gray-400 hover:bg-dark-surface/80"
                                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                                        }`}
                                    />
                                    <input
                                        type="email"
                                        name="from_email"
                                        placeholder="Your Email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                            isDarkMode
                                                ? "bg-dark-surface/60 border-dark-border/50 text-white placeholder-gray-400 hover:bg-dark-surface/80"
                                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                                        }`}
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 resize-none ${
                                            isDarkMode
                                                ? "bg-dark-surface/60 border-dark-border/50 text-white placeholder-gray-400 hover:bg-dark-surface/80"
                                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                                        }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        disabled={!formData.from_name || !formData.from_email}
                                        className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                                            !formData.from_name || !formData.from_email
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-green-700 hover:bg-green-600 text-white hover:shadow-lg"
                                        }`}
                                    >
                                        Next Step →
                                    </button>
                                </div>
                            ) : (
                                // Step 2: Project Details
                                <div className="space-y-4">
                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            What is your main goal? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-2 flex-wrap">
                                            {["Launch new store", "Improve conversions", "Redesign store", "Fix issues"].map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => setFormData({...formData, goal: option})}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                        formData.goal === option
                                                            ? isDarkMode
                                                                ? "bg-green-600 text-white"
                                                                : "bg-green-600 text-white"
                                                            : isDarkMode
                                                                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            What's your budget? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-2 flex-wrap">
                                            {["$500 – $1000", "$1000 – $2000", "$2000+"].map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => setFormData({...formData, budget: option})}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                        formData.budget === option
                                                            ? isDarkMode
                                                                ? "bg-green-600 text-white"
                                                                : "bg-green-600 text-white"
                                                            : isDarkMode
                                                                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            Number of Products
                                        </label>
                                        <select
                                            name="products_count"
                                            value={formData.products_count}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-dark-surface/60 border-dark-border/50 text-white hover:bg-dark-surface/80"
                                                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                                            }`}
                                        >
                                            <option value="under20">Under 20</option>
                                            <option value="20-100">20–100</option>
                                            <option value="100+">100+</option>
                                        </select>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            Business Model
                                        </label>
                                        <div className="flex gap-2 flex-wrap">
                                            {["Dropshipping", "Own Products"].map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => setFormData({...formData, business_model: option})}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                        formData.business_model === option
                                                            ? isDarkMode
                                                                ? "bg-green-600 text-white"
                                                                : "bg-green-600 text-white"
                                                            : isDarkMode
                                                                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            Business Type
                                        </label>
                                        <select
                                            name="business_type"
                                            value={formData.business_type}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-dark-surface/60 border-dark-border/50 text-white hover:bg-dark-surface/80"
                                                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                                            }`}
                                        >
                                            <option value="">Select business type</option>
                                            <option value="Fashion">Fashion</option>
                                            <option value="Beauty">Beauty</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            Timeline
                                        </label>
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-dark-surface/60 border-dark-border/50 text-white hover:bg-dark-surface/80"
                                                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                                            }`}
                                        >
                                            <option value="under-2-weeks">Under 2 weeks</option>
                                            <option value="2-weeks-to-1-month">2 weeks to 1 month</option>
                                            <option value="no-rush">No rush</option>
                                        </select>
                                    </div>

                                    <div className="text-left">
                                        <label className={`block text-sm font-medium mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            Your website (if any)
                                        </label>
                                        <input
                                            type="text"
                                            name="website"
                                            placeholder="https://yourstore.com"
                                            value={formData.website}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-dark-surface/60 border-dark-border/50 text-white placeholder-gray-400 hover:bg-dark-surface/80"
                                                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
                                            }`}
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePrevStep}
                                            className={`flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                            }`}
                                        >
                                            ← Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !formData.goal || !formData.budget}
                                            className={`flex-1 px-6 py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                                                isSubmitting || !formData.goal || !formData.budget
                                                    ? "bg-gray-400 cursor-not-allowed"
                                                    : "bg-green-700 hover:bg-green-600 text-white hover:shadow-lg"
                                            }`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Get My Quote'}
                                        </button>
                                    </div>
                                </div>
                            )}
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
