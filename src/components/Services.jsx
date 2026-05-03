import { useLanguage } from "../contexts/LanguageContext";
import ServiceCard from "./ServiceCard";

export default function Services({ isDarkMode }) {
    const { t, language } = useLanguage();


    return (
        <section id="services" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        {t('services.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t('services.items').map((service, index) => (
                        <div key={index} className="h-full">
                            <ServiceCard 
                                service={service} 
                                index={index} 
                                isDarkMode={isDarkMode} 
                            />
                        </div>
                    ))}
                </div>

                <div className={`mt-12 text-center p-6 rounded-2xl ${
                    isDarkMode 
                        ? "bg-dark-surface/60 border border-dark-border/50" 
                        : "bg-gray-50/80 border border-gray-200/50"
                }`}>
                    <div className={`text-base sm:text-lg font-medium mb-3 ${
                        isDarkMode ? "text-green-700/80" : "text-green-700/80"
                    }`}>
                        Ready to scale your Shopify store?
                    </div>
                    <p className={`max-w-2xl mx-auto text-sm ${
                        isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
                    }`}>
                        Every service is tailored to your specific business needs. 
                        No templates, no shortcuts - just strategic solutions that drive real growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
