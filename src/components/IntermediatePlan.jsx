import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pricingData } from "../db/db";
import { FaArrowLeft, FaCheck, FaStar, FaClock, FaRocket } from "react-icons/fa";

const IntermediatePlan = ({ isDarkMode }) => {
    const { planType } = useParams();
    
    // Handle both /order/intermediate and /order/intermediate/:planType formats
    const actualPlanType = planType || 'intermediate';
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the plan data from pricingData
    const plan = pricingData.find(p => p.url === actualPlanType);

    if (!plan) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-semibold text-red-600">Plan not found</h1>
                <Link to="/order" className="text-green-600 hover:text-green-700 underline">
                    Back to plans
                </Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-darkerGreen text-white" : "bg-white text-gray-800"}`}>
            {/* Hero Section */}
            <section className="relative py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    {plan.badge && (
                        <div className="mb-3">
                            <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                                isDarkMode ? "bg-green-700 text-white" : "bg-green-600 text-white"
                            }`}>
                                {plan.badge}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        {plan.title}
                    </h1>

                    {/* Price */}
                    <div className={`text-2xl sm:text-3xl lg:text-3xl font-bold mb-3 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        {plan.price}
                    </div>

                    {/* Short Description */}
                    <p className={`text-lg sm:text-xl mb-4 max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {plan.shortDescription}
                    </p>

                    {/* Delivery Time */}
                    {plan.deliveryTime && (
                        <div className={`flex items-center justify-center space-x-2 mb-6 ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                            <FaClock className="w-5 h-5" />
                            <span className="text-sm font-medium">{plan.deliveryTime} delivery</span>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/order"
                            className={`inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                                isDarkMode
                                    ? "border-2 border-gray-600 text-gray-300 hover:scale-105"
                                    : "border-2 border-gray-300 text-gray-700 hover:scale-105"
                            }`}
                        >
                            Get Free Audit
                        </a>
                        <a
                            href="/order"
                            className={`inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 bg-green-700 text-white hover:shadow-lg`}
                        >
                            Start Your Store
                            <FaRocket className="w-4 h-4" />
                        </a>
                    </div>
                    
                    {/* Trust Indicators */}
                    <div className={`mt-4 text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Launch-ready in weeks</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Built for scaling businesses</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Advanced customization options</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-10 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        What's Included
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {plan.features.map((feature, index) => (
                            <div key={index} className={`p-5 rounded-2xl ${
                                isDarkMode 
                                    ? "bg-dark-surface/80 border border-dark-border/50" 
                                    : "bg-white border border-gray-200 shadow-lg"
                            }`}>
                                <div className="flex items-start space-x-3">
                                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                                        isDarkMode ? "bg-green-700" : "bg-green-600"
                                    }`}>
                                        <FaCheck className="w-3 h-3 text-white" />
                                    </div>
                                    <p className={`text-sm font-medium ${
                                        isDarkMode ? "text-gray-300" : "text-gray-700"
                                    }`}>
                                        {feature}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-12 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Why Choose This Plan
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {plan.benefits.map((benefit, index) => (
                            <div key={index} className={`p-6 rounded-2xl text-center ${
                                isDarkMode 
                                    ? "bg-dark-surface/80 border border-dark-border/50" 
                                    : "bg-white border border-gray-200 shadow-lg"
                            }`}>
                                <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                                    isDarkMode ? "bg-green-700" : "bg-green-600"
                                }`}>
                                    <FaStar className="w-6 h-6 text-white" />
                                </div>
                                <p className={`text-sm font-medium ${
                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}>
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            {plan.outcomes && (
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            What You Get After Launch
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {plan.outcomes.map((outcome, index) => (
                                <div key={index} className={`p-6 rounded-2xl text-center ${
                                    isDarkMode 
                                        ? "bg-dark-surface/80 border border-dark-border/50" 
                                        : "bg-white border border-gray-200 shadow-lg"
                                }`}>
                                    <div className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                                        isDarkMode ? "bg-green-700" : "bg-green-600"
                                    }`}>
                                        <FaStar className="w-6 h-6 text-white" />
                                    </div>
                                    <p className={`text-sm font-medium ${
                                        isDarkMode ? "text-gray-300" : "text-gray-700"
                                        }`}>
                                        {outcome}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Ideal For Section */}
            {plan.idealFor && (
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-12 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            Ideal For
                        </h2>
                        
                        <div className="flex flex-wrap justify-center gap-3">
                            {plan.idealFor.map((item, index) => (
                                <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    isDarkMode 
                                        ? "bg-dark-surface/80 border border-dark-border/50 text-gray-300" 
                                        : "bg-gray-100 border border-gray-300 text-gray-700"
                                }`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Limitations Section */}
            {plan.limitations && (
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            Important Notes
                        </h2>
                        
                        <div className={`p-6 rounded-2xl ${
                            isDarkMode 
                                ? "bg-dark-surface/60 border border-dark-border/50" 
                                : "bg-gray-50 border border-gray-200"
                        }`}>
                            <ul className="space-y-2">
                                {plan.limitations.map((limitation, index) => (
                                    <li key={index} className={`flex items-start space-x-3 ${
                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}>
                                        <span className="text-red-500 mt-1">•</span>
                                        <span className="text-sm">{limitation}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-8 rounded-2xl ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-green-900/20 via-olive-green/10 to-dark-surface border border-green-700/20 shadow-2xl" 
                            : "bg-gradient-to-br from-green-50 via-emerald-50 to-white border border-green-200/50 shadow-2xl"
                    }`}>
                        <h2 className={`text-2xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            Ready to Launch Your Store?
                        </h2>
                        <p className={`text-lg mb-6 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                            Let's build a professional Shopify store that actually works.
                        </p>
                        <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                            Limited availability for new projects
                        </p>
                        <a
                            href="/order"
                            className={`inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 bg-green-700 text-white hover:shadow-lg`}
                        >
                            Get Free Audit
                        </a>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <div className="py-8 text-center">
                <Link to="/order" className={`inline-flex items-center space-x-2 text-green-600 hover:text-green-700 ${
                    isDarkMode ? "text-green-400" : ""
                }`}>
                    <FaArrowLeft className="w-4 h-4" />
                    Back to Plans
                </Link>
            </div>
        </div>
    );
};

export default IntermediatePlan;
