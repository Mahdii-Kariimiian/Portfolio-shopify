import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../db/db";
import { FaArrowLeft, FaCheck, FaPlus, FaClock } from "react-icons/fa";

const ServiceDetail = ({ isDarkMode }) => {
    const { slug } = useParams();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the service data from services array
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="container mx-auto p-6 text-center">
                <h1 className="text-2xl font-semibold text-red-600">Service not found</h1>
                <Link to="/" className="text-green-600 hover:text-green-700 underline">
                    Back to home
                </Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-darkerGreen text-white" : "bg-white text-gray-800"}`}>
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[600px] mx-auto text-center">
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        {service.hero.title}
                    </h1>

                    <p className={`text-xl sm:text-2xl mb-6 leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {service.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a
                            href="/order"
                            className={`px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                isDarkMode
                                    ? "bg-green-700 text-white hover:bg-green-600"
                                    : "bg-green-700 text-white hover:bg-green-600"
                            }`}
                        >
                            {service.hero.ctaPrimary}
                        </a>
                        {service.hero.ctaSecondary && (
                            <a
                                href="/order"
                                className={`px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                    isDarkMode ? "bg-white text-gray-900 hover:bg-gray-100" : "bg-gray-900 text-white hover:bg-gray-800"
                                }`}
                            >
                                {service.hero.ctaSecondary}
                            </a>
                        )}
                    </div>

                    {/* Trust Benefits */}
                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex justify-center space-x-8 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Results-driven approach</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Proven methodology</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCheck className="w-4 h-4 text-green-600" />
                                <span>Expert implementation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Problems We Solve
                    </h2>
                    
                    <div className="space-y-8 max-w-3xl">
                        {service.problem.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className={`w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0`}></div>
                                <div>
                                    <p className={`text-lg leading-relaxed ${
                                        isDarkMode ? "text-gray-300" : "text-gray-700"
                                    }`}>
                                        <span className="font-semibold">{item.split(' ').map(word => 
                                            word.includes('conversion') || word.includes('performance') || word.includes('speed') || word.includes('tracking') 
                                                ? `<span class="${isDarkMode ? 'text-green-400 font-semibold' : 'text-green-600 font-semibold'}">${word}</span>` 
                                                : word
                                        ).join(' ')}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section - More Structured */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-gray-900/30" : "bg-gray-50"
            }`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Our Solutions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.solution.map((item, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
                                    isDarkMode ? "border-green-700/30 bg-green-700/10" : "border-green-600/30 bg-green-600/10"
                                }`}>
                                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className={`text-xl font-bold mb-3 ${
                                        isDarkMode ? "text-white" : "text-gray-900"
                                    }`}>
                                        {item}
                                    </h3>
                                    <p className={`text-base leading-relaxed ${
                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}>
                                        Strategic implementation with measurable results
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        What's Included
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.includes.map((item, index) => (
                            <div key={index} className={`p-6 rounded-xl border ${
                                isDarkMode 
                                    ? "border-gray-700/30 bg-gray-800/20" 
                                    : "border-gray-200/50 bg-white/50"
                            }`}>
                                <div className="flex items-start space-x-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                        isDarkMode ? "bg-blue-700/20" : "bg-blue-600/20"
                                    }`}>
                                        <FaPlus className={`w-4 h-4 ${
                                            isDarkMode ? "text-blue-400" : "text-blue-600"
                                        }`} />
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-semibold mb-2 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            {item}
                                        </h4>
                                        <p className={`text-sm leading-relaxed ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            Complete setup with ongoing support
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-gray-900/20" : "bg-white"
            }`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Our Process
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
                        <div className="space-y-12 max-w-3xl ml-8">
                            {service.process.map((item, index) => (
                                <div key={index} className="relative flex items-start">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-green-700 text-white font-bold text-sm z-10 ${
                                        isDarkMode ? "ring-4 ring-green-700/30" : "ring-4 ring-green-600/30"
                                    }`}>
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 bg-white p-8 rounded-xl ml-6 shadow-lg">
                                        <h3 className={`text-xl font-bold mb-3 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            {item}
                                        </h3>
                                        <p className={`text-base leading-relaxed ${
                                            isDarkMode ? "text-gray-600" : "text-gray-600"
                                        }`}>
                                            Clear implementation with measurable results
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal For Section */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-gray-900/10" : "bg-gray-50"
            }`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Ideal For
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {service.idealFor.map((item, index) => (
                            <div key={index} className={`px-6 py-3 rounded-full text-base font-medium border-2 ${
                                isDarkMode ? "border-gray-700/50 bg-gray-800/50 text-gray-300" : "border-gray-300/50 bg-white/50 text-gray-700"
                            }`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - Accordion Style */}
            {service.faq && (
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-left ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            Frequently Asked Questions
                        </h2>
                        
                        <div className="space-y-4 max-w-3xl">
                            {service.faq.map((faq, index) => (
                                <details key={index} className={`group border rounded-xl ${
                                    isDarkMode ? "border-gray-700/30 bg-gray-800/20" : "border-gray-200/50 bg-white/50"
                                }`}>
                                    <summary className={`flex items-center justify-between p-6 cursor-pointer list-none ${
                                        isDarkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-100"
                                    }`}>
                                        <h3 className={`text-lg font-semibold ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            {faq.q}
                                        </h3>
                                        <span className={`ml-2 transform transition-transform group-open:rotate-90`}>
                                            ▼
                                        </span>
                                    </summary>
                                    <div className={`p-6 pt-0 ${
                                        isDarkMode ? "text-gray-300" : "text-gray-600"
                                    }`}>
                                        <p className="text-base leading-relaxed">{faq.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Positioning Statement - Green Strip */}
            <section className={`py-24 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-green-900/20" : "bg-green-50"
            }`}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-12 rounded-2xl ${
                        isDarkMode 
                            ? "bg-green-900 border border-green-700/30" 
                            : "bg-green-700 border-green-600/30"
                    }`}>
                        <h2 className={`text-3xl font-bold mb-4 text-white`}>
                            {service.positioning}
                        </h2>
                        <p className="text-lg text-white mb-6">
                            Strategic approach with measurable impact
                        </p>
                        <a
                            href="/order"
                            className={`inline-block px-12 py-5 text-lg font-bold rounded-full bg-white text-green-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300`}
                        >
                            {service.finalCTA.button}
                        </a>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <div className="py-12 text-center">
                <Link to="/" className={`inline-flex items-center space-x-2 text-green-600 hover:text-green-700 ${
                    isDarkMode ? "text-green-400" : ""
                }`}>
                    <FaArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
