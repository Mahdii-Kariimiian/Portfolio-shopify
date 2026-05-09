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
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 ${
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
                                    ? "bg-green-700 text-white"
                                    : "bg-green-700 text-white"
                            }`}
                        >
                            {service.hero.ctaPrimary}
                        </a>
                        {service.hero.ctaSecondary && (
                            <a
                                href="/order"
                                className={`px-10 py-5 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                                    isDarkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
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

            {/* Ideal For Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className={`relative p-8 rounded-3xl overflow-hidden ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30" 
                            : "bg-gradient-to-br from-gray-50/80 to-white/80 border border-gray-200/50"
                    }`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className={`h-full w-full ${isDarkMode ? "bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px]" : "bg-[radial-gradient(circle_at_1px_1px,gray_1px,transparent_1px)] [background-size:24px_24px]"}`}></div>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold mb-4 ${
                                    isDarkMode 
                                        ? "bg-green-700/20 text-green-400 border border-green-700/30" 
                                        : "bg-green-600/20 text-green-700 border border-green-600/30"
                                }`}>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Perfect Match For
                                </div>
                                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}>
                                    Who This Service Is Ideal For
                                </h2>
                                <p className={`text-lg max-w-2xl mx-auto ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}>
                                    We specialize in helping businesses that match these profiles achieve exceptional results
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {service.idealFor.map((item, index) => (
                                    <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                                        isDarkMode 
                                            ? "bg-gray-800/40 border-gray-700/50 hover:border-green-700/50 hover:bg-gray-800/60" 
                                            : "bg-white/60 border-gray-200/60 hover:border-green-600/50 hover:bg-white/80"
                                    }`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                isDarkMode 
                                                    ? "bg-green-700/20 border border-green-700/30" 
                                                    : "bg-green-600/20 border border-green-600/30"
                                            }`}>
                                                <svg className={`w-5 h-5 ${isDarkMode ? "text-green-400" : "text-green-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-semibold ${
                                                    isDarkMode ? "text-white" : "text-gray-900"
                                                }`}>
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Problems I Solve
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.problem.map((item, index) => {
                            const hasHighlightKeywords = item.toLowerCase().includes('conversion') || 
                                                         item.toLowerCase().includes('performance') || 
                                                         item.toLowerCase().includes('speed') || 
                                                         item.toLowerCase().includes('tracking');
                            
                            return (
                                <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                                    isDarkMode 
                                        ? "bg-gray-800/40 border-gray-700/50 hover:border-green-700/50" 
                                        : "bg-white/60 border-gray-200/60 hover:border-green-600/50"
                                }`}>
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                            hasHighlightKeywords
                                                ? isDarkMode 
                                                    ? "bg-green-700/20 border border-green-700/30" 
                                                    : "bg-green-600/20 border border-green-600/30"
                                                : isDarkMode 
                                                    ? "bg-gray-700/30 border border-gray-600/30" 
                                                    : "bg-gray-100/80 border border-gray-300/50"
                                        }`}>
                                            <span className={`text-xl font-bold ${
                                                hasHighlightKeywords
                                                    ? "text-green-600"
                                                    : isDarkMode ? "text-gray-400" : "text-gray-600"
                                            }`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-lg leading-relaxed ${
                                                isDarkMode ? "text-gray-200" : "text-gray-800"
                                            }`}>
                                                {item.split(' ').map((word, wordIndex) => {
                                                    const lowerWord = word.toLowerCase();
                                                    const isHighlight = lowerWord.includes('conversion') || 
                                                                      lowerWord.includes('performance') || 
                                                                      lowerWord.includes('speed') || 
                                                                      lowerWord.includes('tracking');
                                                    
                                                    return (
                                                        <span key={wordIndex}>
                                                            {isHighlight ? (
                                                                <span className={`font-bold ${
                                                                    isDarkMode ? "text-green-400" : "text-green-600"
                                                                }`}>
                                                                    {word}
                                                                </span>
                                                            ) : (
                                                                <span className="font-medium">{word}</span>
                                                            )}
                                                            {' '}
                                                        </span>
                                                    );
                                                })}
                                            </p>
                                            
                                            {hasHighlightKeywords && (
                                                <div className={`mt-3 inline-flex items-center space-x-1 text-xs font-medium px-3 py-1 rounded-full ${
                                                    isDarkMode 
                                                        ? "bg-green-700/20 text-green-400 border border-green-700/30" 
                                                        : "bg-green-600/20 text-green-600 border border-green-600/30"
                                                }`}>
                                                    <span>Priority Issue</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Solutions Section - More Structured */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        My Solutions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.solution.map((item, index) => (
                            <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                                isDarkMode 
                                    ? "bg-gray-800/40 border-gray-700/50 hover:border-green-700/50" 
                                    : "bg-white/60 border-gray-200/60 hover:border-green-600/50"
                            }`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                        isDarkMode 
                                            ? "bg-green-700/20 border border-green-700/30" 
                                            : "bg-green-600/20 border border-green-600/30"
                                    }`}>
                                        <span className={`text-xl font-bold ${
                                            isDarkMode ? "text-green-600" : "text-green-600"
                                        }`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold mb-3 ${
                                            isDarkMode ? "text-white" : "text-gray-900"
                                        }`}>
                                            {item}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            Strategic implementation with measurable results
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        What's Included
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.includes.map((item, index) => (
                            <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                                isDarkMode 
                                    ? "bg-gray-800/40 border-gray-700/50 hover:border-green-700/50" 
                                    : "bg-white/60 border-gray-200/60 hover:border-green-600/50"
                            }`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                        isDarkMode 
                                            ? "bg-blue-700/20 border border-blue-700/30" 
                                            : "bg-blue-600/20 border border-blue-600/30"
                                    }`}>
                                        <FaPlus className={`w-5 h-5 ${
                                            isDarkMode ? "text-blue-400" : "text-blue-600"
                                        }`} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`text-lg font-bold mb-3 ${
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
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto" style={{maxWidth: '600px'}}>
                    <div className={`relative p-8 rounded-3xl overflow-hidden ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30" 
                            : "bg-gradient-to-br from-gray-50/80 to-white/80 border border-gray-200/50"
                    }`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className={`h-full w-full ${isDarkMode ? "bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px]" : "bg-[radial-gradient(circle_at_1px_1px,gray_1px,transparent_1px)] [background-size:24px_24px]"}`}></div>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold mb-4 ${
                                    isDarkMode 
                                        ? "bg-blue-700/20 text-blue-400 border border-blue-700/30" 
                                        : "bg-blue-600/20 text-blue-700 border border-blue-600/30"
                                }`}>
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                    Step-by-Step
                                </div>
                                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-center ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}>
                                   My Process
                                </h2>
                                <p className={`text-lg max-w-2xl mx-auto text-left ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}>
                                    A structured approach to deliver exceptional results every time
                                </p>
                            </div>
                            
                            <div className="mx-auto" style={{maxWidth: '600px'}}>
                                {service.process.map((item, index) => (
                                    <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mb-6 ${
                                        isDarkMode 
                                            ? "bg-gray-800/40 border-gray-700/50 hover:border-blue-700/50 hover:bg-gray-800/60" 
                                            : "bg-white/60 border-gray-200/60 hover:border-blue-600/50 hover:bg-white/80"
                                    }`}>
                                        <div className="flex items-center space-x-6">
                                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                isDarkMode 
                                                    ? "bg-blue-700/20 border border-blue-700/30" 
                                                    : "bg-blue-600/20 border border-blue-600/30"
                                            }`}>
                                                <span className={`text-2xl font-bold ${
                                                    isDarkMode ? "text-blue-400" : "text-blue-600"
                                                }`}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-lg font-bold mb-3 text-left ${
                                                    isDarkMode ? "text-white" : "text-gray-900"
                                                }`}>
                                                    {item}
                                                </h3>
                                                <p className={`text-sm leading-relaxed ${
                                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                                }`}>
                                                    Strategic implementation with measurable results
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Accordion Style */}
            {service.faq && (
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
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
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-12 rounded-2xl ${
                        isDarkMode 
                            ? "bg-green-900 border border-green-700/30" 
                            : "bg-green-700 border-green-600/30"
                    }`}>
                        <h2 className={`text-3xl font-bold mb-4 text-white text-center`}>
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

                    </div>
    );
};

export default ServiceDetail;
