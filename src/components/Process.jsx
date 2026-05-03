import { useLanguage } from "../contexts/LanguageContext";
import { HiCube, HiChartBar, HiLightningBolt } from "react-icons/hi";

export default function Process({ isDarkMode }) {
    const { t, language } = useLanguage();

    const icons = {
        0: <HiCube className="w-8 h-8" />,
        1: <HiChartBar className="w-8 h-8" />,
        2: <HiLightningBolt className="w-8 h-8" />
    };

    const stepServices = {
        0: [
            "Shopify Store Development",
            "Shopify Store Audit"
        ],
        1: [
            "CRO Optimization",
            "Conversion Audit & Strategy",
            "Speed Optimization"
        ],
        2: [
            "Email Marketing Setup",
            "Analytics & Tracking Setup",
            "Google Ads Setup & Optimization"
        ]
    };

    return (
        <section id="process" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        {t('process.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('process.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {t('process.steps').map((step, index) => (
                        <div key={index} className="relative">
                            
                            {/* Step Content */}
                            <div className={`group relative p-6 rounded-2xl h-full transition-all duration-300 hover:scale-[1.02] cursor-default ${
                                isDarkMode 
                                    ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40" 
                                    : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
                            }`}>
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-all duration-300 ${
                                    isDarkMode 
                                        ? "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-110" 
                                        : "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-110"
                                }`}>
                                    {icons[index]}
                                </div>

                                <h3 className="text-lg font-medium mb-4">
                                    {index + 1}. {step.phase}
                                </h3>

                                <p className={`leading-relaxed ${
                                    isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                                }`}>
                                    {step.description}
                                </p>

                                {/* Services Section */}
                                <div className="mt-6 pt-4 border-t border-gray-200/20">
                                    <div className={`text-xs font-medium mb-3 ${
                                        isDarkMode ? "text-gray-500" : "text-gray-400"
                                    }`}>
                                        Includes:
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {stepServices[index].map((service, serviceIndex) => (
                                            <span
                                                key={serviceIndex}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                                                    isDarkMode
                                                        ? "bg-green-700/10 text-green-700/80 border border-green-700/20 hover:bg-green-700/20 hover:text-green-700"
                                                        : "bg-green-50 text-green-600/80 border border-green-200 hover:bg-green-100 hover:text-green-700"
                                                }`}
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Subtle gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                                    isDarkMode
                                        ? "bg-gradient-to-br from-green-700/5 to-transparent"
                                        : "bg-gradient-to-br from-green-700/5 to-transparent"
                                }`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-6 text-center p-8 rounded-2xl ${
                    isDarkMode 
                        ? "bg-dark-surface border border-dark-border" 
                        : "bg-gray-50 border border-gray-200"
                }`}>
                    <div className={`text-lg sm:text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-green-700" : "text-green-700"
                    }`}>
                        No Guesswork, Just Results
                    </div>
                    <p className={`max-w-2xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        Every step is backed by data and proven strategies. 
                        This systematic approach ensures consistent, scalable results for every client.
                    </p>
                </div>
            </div>
        </section>
    );
}
