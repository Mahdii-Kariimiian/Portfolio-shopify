import { useLanguage } from "../contexts/LanguageContext";

export default function Results({ isDarkMode }) {
    const { t } = useLanguage();

    return (
        <section id="results" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        {t('results.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {t('results.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t('results.metrics').map((metric, index) => (
                        <div
                            key={index}
                            className={`text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? "bg-gray-700 hover:bg-gray-600" 
                                    : "bg-white hover:bg-gray-50 shadow-lg"
                            }`}
                        >
                            <div className={`text-4xl sm:text-5xl font-bold mb-4 ${
                                isDarkMode ? "text-green-400" : "text-green-600"
                            }`}>
                                {metric.value}
                            </div>
                            <div className={`text-sm sm:text-base font-medium ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center p-8 rounded-2xl ${
                    isDarkMode 
                        ? "bg-gray-700 border border-gray-600" 
                        : "bg-white border border-gray-200 shadow-lg"
                }`}>
                    <div className={`text-lg sm:text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        Proven Track Record
                    </div>
                    <p className={`max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        These aren't just numbers - they're real results from real stores I've built and optimized. 
                        Every project is focused on one thing: increasing your revenue.
                    </p>
                </div>
            </div>
        </section>
    );
}
