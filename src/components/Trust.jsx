import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HiStar, HiHome, HiBriefcase } from "react-icons/hi";

export default function Trust({ isDarkMode }) {
    const { t, language } = useLanguage();
    const [expandedReviews, setExpandedReviews] = useState({});

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ));
    };

    const toggleExpanded = (index) => {
        setExpandedReviews(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section id="trust" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        {t('trust.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('trust.subtitle')}
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {t('trust.testimonials').map((testimonial, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl flex flex-col h-full relative ${
                                isDarkMode 
                                    ? "bg-dark-surface border border-dark-border" 
                                    : "bg-white border border-gray-200 shadow-lg"
                            }`}
                        >
                            {/* Freelancer Badge */}
                            <div className="absolute top-4 right-4">
                                <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                                    isDarkMode
                                        ? "bg-green-700/10 text-green-700/80 border border-green-700/20"
                                        : "bg-green-50 text-green-600/80 border border-green-200"
                                }`}>
                                    <HiBriefcase className="w-3 h-3" />
                                    <span>{t('trust.badge')}</span>
                                </span>
                            </div>

                            <div className="flex mb-4">
                                {renderStars()}
                            </div>
                            
                            <div className="mb-6 flex-grow">
                                <blockquote className={`text-lg leading-relaxed ${
                                    isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                                } ${!expandedReviews[index] ? 'line-clamp-3' : ''}`}>
                                    "{testimonial.text}"
                                </blockquote>
                                
                                {/* See More/Less Button */}
                                {testimonial.text.length > 150 && (
                                    <button
                                        onClick={() => toggleExpanded(index)}
                                        className={`mt-2 text-sm font-medium transition-colors duration-200 ${
                                            isDarkMode
                                                ? "text-green-700 hover:text-green-600"
                                                : "text-green-600 hover:text-green-700"
                                        }`}
                                    >
                                        {expandedReviews[index] ? "See less" : "See more"}
                                    </button>
                                )}
                            </div>
                            
                            <div className="space-y-3">
                                <cite className={`font-semibold block ${
                                    isDarkMode ? "text-dark-text-primary" : "text-gray-900"
                                }`}>
                                    {testimonial.name}
                                </cite>
                                
                                {/* Skills/Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {testimonial.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                isDarkMode
                                                    ? "bg-green-700/20 text-green-700 border border-green-700/30"
                                                    : "bg-green-50 text-green-700 border border-green-200"
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
