import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../db/db";
import { FaArrowLeft, FaCheck, FaPlus, FaClock, FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

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
        <div className={`min-h-screen ${isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"}`}>
            {/* Hero Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[600px] mx-auto text-center">
                    <h1 className={`text-3xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        {service.hero.title}
                    </h1>

                    <p className={`text-xl sm:text-2xl mb-6 leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {service.hero.subtitle}
                    </p>

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
            <section className="py-10 px-4 sm:px-6 lg:px-8">
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
                                <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
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

            {/* Problems and Solutions Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Mobile Layout - Stacked */}
                    <div className="lg:hidden space-y-12">
                        {/* Problems Section */}
                        <div>
                            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                Problems I Solve
                            </h2>
                            
                            <div className="space-y-6">
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
                                                    <FaStar className={`w-5 h-5 ${
                                                        hasHighlightKeywords
                                                            ? "text-green-600"
                                                            : isDarkMode ? "text-gray-400" : "text-gray-600"
                                                    }`} />
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

                        {/* Solutions Section */}
                        <div>
                            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                My Solutions
                            </h2>
                            
                            <div className="space-y-6">
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
                                                <FaStar className={`w-5 h-5 ${
                                                    isDarkMode ? "text-green-600" : "text-green-600"
                                                }`} />
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
                    </div>

                    {/* Desktop Layout - Side by Side */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-2 gap-12 mb-12">
                            <h2 className={`text-2xl sm:text-3xl font-bold text-center ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                Problems I Solve
                            </h2>
                            <h2 className={`text-2xl sm:text-3xl font-bold text-center ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}>
                                My Solutions
                            </h2>
                        </div>
                        
                        <div className="space-y-6">
                            {service.problem.map((item, index) => {
                                const hasHighlightKeywords = item.toLowerCase().includes('conversion') || 
                                                            item.toLowerCase().includes('performance') || 
                                                            item.toLowerCase().includes('speed') || 
                                                            item.toLowerCase().includes('tracking');
                                const solutionItem = service.solution[index];
                                
                                return (
                                    <div key={index} className="grid grid-cols-2 gap-6">
                                        {/* Problem Card */}
                                        <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
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
                                                    <FaStar className={`w-5 h-5 ${
                                                        hasHighlightKeywords
                                                            ? "text-green-600"
                                                            : isDarkMode ? "text-gray-400" : "text-gray-600"
                                                    }`} />
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

                                        {/* Solution Card */}
                                        {solutionItem && (
                                            <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
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
                                                        <FaStar className={`w-5 h-5 ${
                                                            isDarkMode ? "text-green-600" : "text-green-600"
                                                        }`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className={`text-lg font-bold mb-3 ${
                                                            isDarkMode ? "text-white" : "text-gray-900"
                                                        }`}>
                                                            {solutionItem}
                                                        </h3>
                                                        <p className={`text-sm leading-relaxed ${
                                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                                        }`}>
                                                            Strategic implementation with measurable results
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-2xl sm:text-3xl font-bold mb-12 text-center ${
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
                                            ? "bg-green-700/20 border border-green-700/30" 
                                            : "bg-green-600/20 border border-green-600/30"
                                    }`}>
                                        <FaPlus className={`w-5 h-5 ${
                                            isDarkMode ? "text-green-400" : "text-green-600"
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
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto" style={{maxWidth: '900px'}}>
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
                                        ? "bg-green-700/20 text-green-400 border border-green-700/30" 
                                        : "bg-green-600/20 text-green-700 border border-green-600/30"
                                }`}>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Step-by-Step
                                </div>
                                <h2 className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${
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
                            
                            <div className="max-w-4xl mx-auto">
                                {service.process.map((item, index) => (
                                    <div key={index} className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mb-6 ${
                                        isDarkMode 
                                            ? "bg-gray-800/40 border-gray-700/50 hover:border-green-700/50 hover:bg-gray-800/60" 
                                            : "bg-white/60 border-gray-200/60 hover:border-green-600/50 hover:bg-white/80"
                                    }`}>
                                        <div className="flex items-center space-x-6">
                                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                isDarkMode 
                                                    ? "bg-green-700/20 border border-green-700/30" 
                                                    : "bg-green-600/20 border border-green-600/30"
                                            }`}>
                                                <span className={`text-2xl font-bold ${
                                                    isDarkMode ? "text-green-400" : "text-green-600"
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

            {/* Positioning Statement - CTA Card */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-7 rounded-3xl ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-green-800/30 via-emerald-700/20 to-green-900/40 border border-green-600/30 shadow-2xl backdrop-blur-sm" 
                            : "bg-gradient-to-br from-green-200/90 via-emerald-100/95 to-lime-200/90 border border-green-400/50 shadow-2xl backdrop-blur-sm"
                    }`}>
                        <h2 className={`text-3xl font-bold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            {service.positioning}
                        </h2>
                        
                        <p className={`text-lg mb-6 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}>
                            Strategic approach with measurable impact
                        </p>

                        <div className={`mt-10 flex flex-col sm:flex-row gap-0 w-full rounded-[16px] overflow-hidden shadow-lg border ${
                            isDarkMode 
                                ? "border-dark-border/50" 
                                : "border-gray-200/50"
                        }`}>
                            <input
                                type="text"
                                placeholder="Enter your store URL"
                                className={`flex-1 px-6 py-4 border-0 focus:outline-none focus:ring-0 ${
                                    isDarkMode
                                        ? "bg-dark-surface/80 text-dark-text-primary placeholder-dark-text-tertiary" 
                                        : "bg-white text-gray-900 placeholder-gray-500"
                                }`}
                            />
                            <a
                                href="/order"
                                className={`inline-flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-green-700 hover:bg-green-600 text-white min-w-[180px]`}
                            >
                                <span>{service.finalCTA.button}</span>
                                <HiArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

                    </div>
    );
};

export default ServiceDetail;
