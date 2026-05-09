import { HiArrowNarrowRight } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import HeroProjectCard from "./HeroProjectCard";
import caseStudiesData from "../db/caseStudiesData";
import heroImageLight from "../assets/hero-image-light.png";
import heroImageDark from "../assets/hero-image-dark.png";

export default function HeroSection({ isDarkMode }) {
    const { t, language } = useLanguage();

    return (
        <section className={`relative py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
        
            <div className="max-w-7xl mx-auto mt-10">
                {/* Desktop: Two-column layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* Left Column: Content */}
                    <div className="text-left">
                        <div className="mb-6">
                            <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                                isDarkMode 
                                    ? "bg-green-700 text-white" 
                                    : "bg-green-700 text-white"
                            }`}>
                                {t('hero.expertise')}
                            </span>
                        </div>

                        <h1 className={`text-3xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight ${
                            isDarkMode ? "!text-white" : "!text-gray-900"
                        }`}>
                            {t('hero.headline')}
                        </h1>

                        <p className={`text-lg sm:text-xl lg:text-xl mb-8 max-w-2xl leading-relaxed ${
                            isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                        }`}>
                            {t('hero.subheadline')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-4">
                            <div className="flex flex-col items-center">
                                <a
                                    href="#final-cta"
                                    className={`inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 bg-green-700 text-white`}
                                >
                                    {t('hero.primaryCTA')}
                                    <HiArrowNarrowRight />
                                </a>
                               
                            </div>
                            
                            <a
                                href="/projects"
                                className={`inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                                    isDarkMode
                                        ? "border-2 border-gray-600 text-gray-300"
                                        : "border-2 border-gray-300 text-gray-700"
                                }`}
                            >
                                {t('hero.secondaryCTA')}
                            </a>
                        </div>

                        <div className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                            <p>{t('hero.trustIndicators')}</p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={isDarkMode ? heroImageDark : heroImageLight}
                            alt="Shopify Store Development"
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Mobile: Stack layout */}
                <div className="lg:hidden">
                    {/* Headline */}
                    <h1 className={`text-4xl sm:text-5xl font-bold mb-6 leading-tight text-center ${
                        isDarkMode ? "!text-white" : "!text-gray-900"
                    }`}>
                        {t('hero.headline')}
                    </h1>

                    {/* Subheadline */}
                    <p className={`text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-center ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        {t('hero.subheadline')}
                    </p>

                    {/* Image */}
                    <div className="flex justify-center mb-8">
                        <img
                            src={isDarkMode ? heroImageDark : heroImageLight}
                            alt="Shopify Store Development"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 w-full max-w-sm mx-auto">
                        <a
                            href="#final-cta"
                            className={`w-full inline-flex items-center justify-center space-x-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 bg-green-700 text-white`}
                        >
                            {t('hero.primaryCTA')}
                            <HiArrowNarrowRight />
                        </a>
                        
                        <a
                            href="/projects"
                            className={`w-full inline-flex items-center justify-center space-x-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 ${
                                isDarkMode
                                    ? "border-2 border-gray-600 text-gray-300"
                                    : "border-2 border-gray-300 text-gray-700"
                            }`}
                        >
                            {t('hero.secondaryCTA')}
                        </a>
                    </div>

                    {/* Micro text */}
                    <div className={`text-center text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}>
                        <p>{t('hero.trustIndicators')}</p>
                    </div>
                </div>
            </div>

            {/* Project Showcase */}
            <div className="mt-12">
                <div className="text-center mb-12">
                    <h3 className={`text-2xl sm:text-3xl font-semibold mb-4 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Featured Projects
                    </h3>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                        Explore some of my recent Shopify store projects
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStudiesData.slice(0, 4).map((project, index) => (
                        <HeroProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isDarkMode={isDarkMode}
                        />
                    ))}
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
