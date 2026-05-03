import { useLanguage } from "../contexts/LanguageContext";
import CountUp from "./CountUp";

export default function Results({ isDarkMode }) {
    const { t, language } = useLanguage();

    return (
        <section id="results" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                        {t('results.title')}
                    </h2>
                    <p className={`text-base sm:text-lg max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('results.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t('results.metrics').map((metric, index) => (
                        <div
                            key={index}
                            className={`text-center p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-default ${
                                isDarkMode 
                                    ? "bg-dark-surface hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40" 
                                    : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
                            }`}
                        >
                            <div className={`text-4xl sm:text-5xl font-bold mb-4 ${
                                isDarkMode ? "text-green-700" : "text-green-700"
                            }`}>
                                <CountUp 
                                    end={parseFloat(metric.value)} 
                                    suffix={metric.value.includes('%') ? '%' : metric.value.includes('x') ? 'x' : ''}
                                    duration={2000}
                                />
                            </div>
                            <div className={`text-sm sm:text-base font-medium mb-3 ${
                                isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                            }`}>
                                {metric.label}
                            </div>
                            <div className={`text-xs ${
                                isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
                            }`}>
                                {metric.context}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-6 text-center p-4 rounded-2xl ${
                    isDarkMode 
                        ? "bg-dark-surface/60 border border-dark-border/50" 
                        : "bg-gray-50/80 border border-gray-200/50"
                }`}>
                    <div className={`text-base sm:text-lg font-medium mb-2 ${
                        isDarkMode ? "text-green-700/80" : "text-green-700/80"
                    }`}>
                        Proven Track Record
                    </div>
                    <p className={`max-w-2xl mx-auto text-sm mb-3 ${
                        isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
                    }`}>
                        These aren't just numbers - they're real results from real stores I've built and optimized. 
                        Every project is focused on one thing: increasing your revenue.
                    </p>
                    <p className={`max-w-2xl mx-auto text-xs font-medium ${
                        isDarkMode ? "text-green-700/60" : "text-green-600/60"
                    }`}>
                        {t('results.projectReference')}
                    </p>
                </div>
            </div>
        </section>
    );
}
