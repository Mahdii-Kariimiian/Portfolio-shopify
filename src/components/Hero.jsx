import { HiArrowNarrowRight } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection({ isDarkMode }) {
    const { t } = useLanguage();

    return (
        <section className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}>
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-6">
                    <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                        isDarkMode 
                            ? "bg-green-900 text-green-200" 
                            : "bg-green-100 text-green-800"
                    }`}>
                        Shopify Developer & CRO Expert
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {t('hero.headline')}
                </h1>

                <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}>
                    {t('hero.subheadline')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#final-cta"
                        className={`inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                            isDarkMode
                                ? "bg-green-600 hover:bg-green-700 text-white"
                                : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                    >
                        {t('hero.primaryCTA')}
                        <HiArrowNarrowRight />
                    </a>
                    
                    <a
                        href="#case-studies"
                        className={`inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                            isDarkMode
                                ? "border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
                                : "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                        }`}
                    >
                        {t('hero.secondaryCTA')}
                    </a>
                </div>

                <div className={`mt-12 text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                    <p> Free 5-minute audit  No obligation  Real insights</p>
                </div>
            </div>

            {/* Background gradient */}
            <div className={`absolute inset-0 -z-10 ${
                isDarkMode 
                    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                    : "bg-gradient-to-br from-white via-gray-50 to-white"
            }`} />
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 -z-10 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>
        </section>
    );
}
