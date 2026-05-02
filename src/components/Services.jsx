import { useLanguage } from "../contexts/LanguageContext";
import { HiArrowRight, HiChartBar, HiLightningBolt, HiMail, HiShoppingCart } from "react-icons/hi";

export default function Services({ isDarkMode }) {
    const { t } = useLanguage();

    const icons = {
        0: <HiShoppingCart className="w-6 h-6" />,
        1: <HiChartBar className="w-6 h-6" />,
        2: <HiLightningBolt className="w-6 h-6" />,
        3: <HiMail className="w-6 h-6" />
    };

    return (
        <section id="services" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        {t('services.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {t('services.items').map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                                isDarkMode 
                                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                                    : "bg-gray-50 hover:bg-white border border-gray-200 shadow-lg"
                            }`}
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                                isDarkMode ? "bg-green-900 text-green-400" : "bg-green-100 text-green-600"
                            }`}>
                                {icons[index]}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                {service.title}
                            </h3>

                            <p className={`mb-6 leading-relaxed ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                                {service.description}
                            </p>

                            <div className={`flex items-center space-x-2 font-semibold ${
                                isDarkMode ? "text-green-400" : "text-green-600"
                            }`}>
                                <span>{service.outcome}</span>
                                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`mt-16 text-center p-8 rounded-2xl ${
                    isDarkMode 
                        ? "bg-gray-800 border border-gray-700" 
                        : "bg-gray-50 border border-gray-200"
                }`}>
                    <div className={`text-lg sm:text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        No Cookie-Cutter Solutions
                    </div>
                    <p className={`max-w-2xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        Every service is tailored to your specific business needs and goals. 
                        No templates, no shortcuts - just strategic solutions that drive real growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
