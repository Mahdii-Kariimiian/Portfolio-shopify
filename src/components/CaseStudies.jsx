import { useLanguage } from "../contexts/LanguageContext";
import { HiArrowRight, HiTrendingUp, HiLightBulb, HiCheckCircle } from "react-icons/hi";

export default function CaseStudies({ isDarkMode }) {
    const { t, language } = useLanguage();

    return (
        <section id="case-studies" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        {t('caseStudies.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('caseStudies.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t('caseStudies.studies').map((study, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? "bg-dark-surface hover:bg-dark-surface-hover border border-dark-border" 
                                    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-lg"
                            }`}
                        >
                            {/* Problem */}
                            <div className="space-y-4">
                                <div className={`inline-flex items-center space-x-2 text-red-500 font-semibold`}>
                                    <HiLightBulb className="w-5 h-5" />
                                    <span>Problem</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{study.name}</h3>
                                <p className={`leading-relaxed ${
                                    isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                                }`}>
                                    {study.problem}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="space-y-4">
                                <div className={`inline-flex items-center space-x-2 text-blue-500 font-semibold`}>
                                    <HiCheckCircle className="w-5 h-5" />
                                    <span>Solution</span>
                                </div>
                                <p className={`leading-relaxed ${
                                    isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                                }`}>
                                    {study.solution}
                                </p>
                            </div>

                            {/* Result */}
                            <div className="space-y-4">
                                <div className={`inline-flex items-center space-x-2 text-green-500 font-semibold`}>
                                    <HiTrendingUp className="w-5 h-5" />
                                    <span>Result</span>
                                </div>
                                <p className={`leading-relaxed ${
                                    isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                                }`}>
                                    {study.result}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center p-8 rounded-2xl ${
                    isDarkMode 
                        ? "bg-gray-700 border border-gray-600" 
                        : "bg-white border border-gray-200 shadow-lg"
                }`}>
                    <div className={`text-lg sm:text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        Ready for Similar Results?
                    </div>
                    <p className={`mb-6 max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        These case studies show what's possible with the right strategy and implementation. 
                        Your store could be the next success story.
                    </p>
                    <a
                        href="#final-cta"
                        className={`inline-flex items-center space-x-2 px-8 py-3 font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                            isDarkMode
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                    >
                        Get Your Free Audit
                        <HiArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
