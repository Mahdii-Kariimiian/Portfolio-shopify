import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";

export default function FinalCTA({ isDarkMode }) {
    const { t, language } = useLanguage();
    const [storeUrl, setStoreUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init({
            publicKey: "mV9rGASfViXLoUkhx",
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!storeUrl.trim()) return;

        setIsSubmitting(true);
        
        try {
            const response = await emailjs.send(
                "service_xm5pbcm",
                "template_bqcniev",
                {
                    name: "Store Analysis Request",
                    email: "Not provided",
                    website: storeUrl,
                    message: "Store analysis request from final CTA",
                    businessType: "Store Analysis",
                    productsCount: "N/A",
                    businessModel: "N/A",
                    dropshipping: "N/A",
                    projectTime: "N/A",
                    budget: "N/A"
                }
            );

            if (response.status === 200) {
                setIsSubmitted(true);
                setStoreUrl("");
            } else {
                // Handle error
                console.error('EmailJS error:', response);
            }
        } catch (error) {
            console.error('EmailJS error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="final-cta" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <div className={`p-7 rounded-3xl ${
                    isDarkMode 
                        ? "bg-gradient-to-br from-green-900/20 via-olive-green/10 to-dark-surface border border-green-700/20 shadow-2xl" 
                        : "bg-gradient-to-br from-green-50 via-emerald-50 to-white border border-green-200/50 shadow-2xl"
                }`}>
                    <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        {t('finalCTA.title')}
                    </h2>
                    
                    <p className={`text-base sm:text-lg mb-4 ${
                        isDarkMode ? "text-white/90" : "text-gray-600"
                    }`}>
                        {t('finalCTA.subtitle')}
                    </p>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className={`flex flex-col sm:flex-row gap-0 w-full rounded-2xl overflow-hidden shadow-lg border ${
                                isDarkMode 
                                    ? "border-dark-border/50" 
                                    : "border-gray-200/50"
                            }`}>
                                <input
                                    type="url"
                                    value={storeUrl}
                                    onChange={(e) => setStoreUrl(e.target.value)}
                                    placeholder={t('finalCTA.placeholder')}
                                    className={`flex-1 px-6 py-4 border-0 focus:outline-none focus:ring-0 ${
                                        isDarkMode
                                            ? "bg-dark-surface/80 text-dark-text-primary placeholder-dark-text-tertiary" 
                                            : "bg-white text-gray-900 placeholder-gray-500"
                                    }`}
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !storeUrl.trim()}
                                    className={`inline-flex items-center justify-center space-x-2 px-8 py-4 text-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] bg-green-700 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[180px]`}
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
                            
                            {/* Trust Element */}
                            <p className={`text-xs ${
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}>
                                {t('finalCTA.trust')}
                            </p>
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
                                 {t('finalCTA.subtitle')}
                            </p>
                        </div>
                    )}

                
                    {/* Trust Indicators */}
                    <div className={`mt-8 pt-4 border-t ${
                        isDarkMode ? "border-gray-700" : "border-gray-200"
                    }`}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            <div className="space-y-3">
                                <div className={`text-3xl font-bold ${
                                    isDarkMode ? "text-green-400" : "text-green-600"
                                }`}>
                                    5 Minutes
                                </div>
                                <div className={`text-base font-medium ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    Quick Analysis
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className={`text-3xl font-bold ${
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
                            <div className="space-y-3">
                                <div className={`text-3xl font-bold ${
                                    isDarkMode ? "text-green-400" : "text-green-600"
                                }`}>
                                    Actionable
                                </div>
                                <div className={`text-base font-medium ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
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
