import { useLanguage } from "../contexts/LanguageContext";
import { HiCube, HiChartBar, HiLightningBolt, HiArrowRight, HiShoppingBag, HiCheckCircle, HiSparkles, HiGlobe } from "react-icons/hi";

export default function AboutPage({ isDarkMode }) {
    const { language } = useLanguage();

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

    const stats = [
        {
            text: "7+ Shopify projects delivered",
            icon: <HiShoppingBag className="w-8 h-8" />
        },
        {
            text: "Conversion focused approach",
            icon: <HiCheckCircle className="w-8 h-8" />
        },
        {
            text: "Performance optimized builds",
            icon: <HiSparkles className="w-8 h-8" />
        },
        {
            text: "Based in Italy, working globally",
            icon: <HiGlobe className="w-8 h-8" />
        }
    ];

    const skills = {
        "Development": [
            "Shopify Liquid",
            "JavaScript",
            "TypeScript",
            "Shopify CLI",
            "Shopify API (GraphQL)",
            "React"
        ],
        "CRO & UX": [
            "Conversion Rate Optimization (CRO)",
            "User Experience (UX) Optimization",
            "A/B Testing",
            "Landing Page Optimization"
        ],
        "Performance": [
            "Performance Optimization",
            "Core Web Vitals",
            "Speed Optimization"
        ],
        "Marketing & Growth": [
            "Google Ads",
            "Email Marketing (Klaviyo)",
            "SEO",
            "Funnel Optimization"
        ],
        "Data & Tracking": [
            "Google Analytics (GA4)",
            "Google Tag Manager",
            "Google Merchant Center",
            "Conversion Tracking",
            "Data Analysis"
        ],
        "Shopify Specific": [
            "Theme Customization",
            "Store Setup & Configuration",
            "Payment & Tax Setup",
            "Shopify Apps Integration",
            "Shopify Markets"
        ]
    };

    return (
        <div className={`min-h-screen ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                            isDarkMode 
                                ? "bg-green-700 text-white" 
                                : "bg-green-700 text-white"
                        }`}>
                            About Me
                        </span>
                    </div>

                    <h1 className={`text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight ${
                        isDarkMode ? "!text-white" : "!text-gray-900"
                    }`}>
                        I Build Shopify Stores That Actually Convert
                    </h1>

                    <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        I help brands turn traffic into revenue through data driven design, performance optimization, and conversion focused development.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-default ${
                                isDarkMode 
                                    ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40" 
                                    : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
                            }`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                                        isDarkMode 
                                            ? "bg-green-700/10 text-green-700" 
                                            : "bg-green-700/10 text-green-700"
                                    }`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-lg font-semibold flex-1 ${
                                        isDarkMode ? "text-green-700" : "text-green-600"
                                    }`}>
                                        {stat.text}
                                    </div>
                                </div>
                                
                                {/* Subtle gradient overlay on hover */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                                    isDarkMode
                                        ? "bg-gradient-to-br from-green-700/5 to-transparent"
                                        : "bg-gradient-to-br from-green-700/5 to-transparent"
                                }`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        What I Do
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        I design and develop Shopify stores that are built to sell, not just look good.
                    </p>
                    <p className={`text-lg leading-relaxed max-w-3xl mx-auto mt-2 ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        From custom theme development to CRO and performance optimization, every decision is focused on increasing conversions and improving user experience.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className={`py-10 px-4 sm:px-6 lg:px-8 ${
                isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
            }`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            How I Work
                        </h2>
                        <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                            isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                        }`}>
                            I follow a structured approach to ensure consistent results:
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                phase: "Build",
                                description: "Create a solid foundation with clean, scalable, conversion focused design."
                            },
                            {
                                phase: "Optimize", 
                                description: "Analyze behavior, fix friction points, and improve conversion rates."
                            },
                            {
                                phase: "Scale",
                                description: "Apply growth strategies like SEO, email flows, and paid acquisition."
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className={`group relative p-6 rounded-2xl h-full transition-all duration-300 hover:scale-105 cursor-default ${
                                    isDarkMode 
                                        ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40" 
                                        : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
                                }`}>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-all duration-300 ${
                                        isDarkMode 
                                            ? "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-105" 
                                            : "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-105"
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

                                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                                        isDarkMode
                                            ? "bg-gradient-to-br from-green-700/5 to-transparent"
                                            : "bg-gradient-to-br from-green-700/5 to-transparent"
                                    }`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 text-center ${
                        isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                        Skills / Tech
                    </h2>
                    <p className={`text-lg leading-relaxed text-center mb-8 max-w-3xl mx-auto ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        I work with a focused stack of technologies and tools specifically chosen for building high-performance Shopify stores that drive conversions and scale with your business.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                            <div key={categoryIndex} className={`p-6 rounded-2xl ${
                                isDarkMode 
                                    ? "bg-dark-surface/60 border border-dark-border/50" 
                                    : "bg-white/90 border border-gray-200/60 backdrop-blur-sm"
                            }`}>
                                <h3 className={`text-lg font-semibold mb-4 ${
                                    isDarkMode ? "text-white" : "text-gray-900"
                                }`}>
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                isDarkMode
                                                    ? "bg-green-700/10 text-green-700/80 border border-green-700/20 hover:bg-green-700/20 hover:text-green-700"
                                                    : "bg-green-50 text-green-600/80 border border-green-200 hover:bg-green-100 hover:text-green-700"
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-8 rounded-3xl ${
                        isDarkMode 
                            ? "bg-gradient-to-br from-green-900/20 via-olive-green/10 to-dark-surface border border-green-700/20 shadow-2xl" 
                            : "bg-gradient-to-br from-green-50 via-emerald-50 to-white border border-green-200/50 shadow-2xl"
                    }`}>
                        <h2 className={`text-xl sm:text-2xl font-semibold mb-4 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}>
                            Ready to build your high-converting Shopify store?
                        </h2>
                        
                        <p className={`text-base sm:text-lg mb-8 ${
                            isDarkMode ? "text-white/90" : "text-gray-600"
                        }`}>
                            Let's discuss how I can help you turn traffic into revenue.
                        </p>

                        <a
                            href="#final-cta"
                            className={`inline-flex items-center space-x-2 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 transform hover:scale-105 bg-green-700 text-white`}
                        >
                            <span>Get In Touch</span>
                            <HiArrowRight />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
