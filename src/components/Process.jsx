import { useLanguage } from "../contexts/LanguageContext";
import { HiArrowRight, HiCube, HiChartBar, HiLightningBolt } from "react-icons/hi";

export default function Process({ isDarkMode }) {
    const { t } = useLanguage();

    const icons = {
        0: <HiCube className="w-8 h-8" />,
        1: <HiChartBar className="w-8 h-8" />,
        2: <HiLightningBolt className="w-8 h-8" />
    };

    return (
        <section id="process" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        {t('process.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {t('process.subtitle')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {t('process.steps').map((step, index) => (
                        <div key={index} className="relative">
                            {/* Step Number */}
                            <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                                isDarkMode ? "bg-green-600 text-white" : "bg-green-600 text-white"
                            }`}>
                                {index + 1}
                            </div>

                            {/* Step Content */}
                            <div className={`p-8 rounded-2xl h-full ${
                                isDarkMode 
                                    ? "bg-gray-800 border border-gray-700 hover:bg-gray-700" 
                                    : "bg-gray-50 border border-gray-200 hover:bg-white shadow-lg"
                            } transition-all duration-300`}>
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                                    isDarkMode ? "bg-green-900 text-green-400" : "bg-green-100 text-green-600"
                                }`}>
                                    {icons[index]}
                                </div>

                                <h3 className="text-2xl font-bold mb-4">
                                    {step.phase}
                                </h3>

                                <p className={`leading-relaxed ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow Connector */}
                            {index < t('process.steps').length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                                    <HiArrowRight className={`w-8 h-8 ${
                                        isDarkMode ? "text-gray-600" : "text-gray-400"
                                    }`} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center p-8 rounded-2xl ${
                    isDarkMode 
                        ? "bg-gray-800 border border-gray-700" 
                        : "bg-gray-50 border border-gray-200"
                }`}>
                    <div className={`text-lg sm:text-xl font-semibold mb-4 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        No Guesswork, Just Results
                    </div>
                    <p className={`max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        Every step is backed by data and proven strategies. 
                        This systematic approach ensures consistent, scalable results for every client.
                    </p>
                </div>
            </div>
        </section>
    );
}
