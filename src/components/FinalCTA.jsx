import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

export default function FinalCTA({ isDarkMode }) {
    const { t } = useLanguage();
    const [storeUrl, setStoreUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!storeUrl.trim()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        setStoreUrl("");
        
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="final-cta" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
            <div className="max-w-4xl mx-auto text-center">
                <div className={`p-12 rounded-3xl ${
                    isDarkMode 
                        ? "bg-gradient-to-br from-green-900 to-gray-800 border border-gray-700" 
                        : "bg-gradient-to-br from-green-50 to-white border border-gray-200 shadow-xl"
                }`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        {t('finalCTA.title')}
                    </h2>
                    
                    <p className={`text-lg sm:text-xl mb-8 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {t('finalCTA.subtitle')}
                    </p>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="url"
                                    value={storeUrl}
                                    onChange={(e) => setStoreUrl(e.target.value)}
                                    placeholder={t('finalCTA.placeholder')}
                                    className={`flex-1 px-6 py-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-500 ${
                                        isDarkMode 
                                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                                    }`}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !storeUrl.trim()}
                                    className={`px-8 py-4 font-semibold rounded-full transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                                        isDarkMode
                                            ? "bg-green-600 hover:bg-green-700 text-white"
                                            : "bg-green-600 hover:bg-green-700 text-white"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center space-x-2">
                                            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                                            <span>Analyzing...</span>
                                        </span>
                                    ) : (
                                        <span className="flex items-center space-x-2">
                                            <span>{t('finalCTA.button')}</span>
                                            <HiArrowRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className={`p-6 rounded-2xl ${
                            isDarkMode ? "bg-green-800" : "bg-green-100"
                        }`}>
                            <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                                <HiCheckCircle className="w-6 h-6" />
                                <span className="font-semibold">Audit Request Received!</span>
                            </div>
                            <p className={`text-sm ${
                                isDarkMode ? "text-green-200" : "text-green-700"
                            }`}>
                                I'll analyze your store and get back to you within 24 hours with actionable insights.
                            </p>
                        </div>
                    )}

                    <div className={`mt-8 text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                        <p>{t('finalCTA.note')}</p>
                    </div>

                    {/* Trust Indicators */}
                    <div className={`mt-12 pt-8 border-t ${
                        isDarkMode ? "border-gray-700" : "border-gray-200"
                    }`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div className="space-y-2">
                                <div className={`text-2xl font-bold ${
                                    isDarkMode ? "text-green-400" : "text-green-600"
                                }`}>
                                    5 Minutes
                                </div>
                                <div className={`text-sm ${
                                    isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}>
                                    Quick Analysis
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className={`text-2xl font-bold ${
                                    isDarkMode ? "text-green-400" : "text-green-600"
                                }`}>
                                    100% Free
                                </div>
                                <div className={`text-sm ${
                                    isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}>
                                    No Hidden Costs
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className={`text-2xl font-bold ${
                                    isDarkMode ? "text-green-400" : "text-green-600"
                                }`}>
                                    Actionable
                                </div>
                                <div className={`text-sm ${
                                    isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}>
                                    Real Insights
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
