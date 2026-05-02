import { useLanguage } from "../contexts/LanguageContext";
import { HiStar, HiHome } from "react-icons/hi";

export default function Trust({ isDarkMode }) {
    const { t } = useLanguage();

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => (
            <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ));
    };

    return (
        <section id="trust" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-900"
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        {t('trust.title')}
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                        {t('trust.subtitle')}
                    </p>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {t('trust.testimonials').map((testimonial, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl ${
                                isDarkMode 
                                    ? "bg-gray-700 border border-gray-600" 
                                    : "bg-white border border-gray-200 shadow-lg"
                            }`}
                        >
                            <div className="flex mb-4">
                                {renderStars()}
                            </div>
                            
                            <blockquote className={`text-lg leading-relaxed mb-6 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                                "{testimonial.content}"
                            </blockquote>
                            
                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                    isDarkMode ? "bg-green-900 text-green-400" : "bg-green-100 text-green-600"
                                }`}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className={`text-sm ${
                                        isDarkMode ? "text-gray-400" : "text-gray-500"
                                    }`}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Highlights */}
                <div className={`p-8 rounded-2xl text-center ${
                    isDarkMode 
                        ? "bg-gray-700 border border-gray-600" 
                        : "bg-white border border-gray-200 shadow-lg"
                }`}>
                    <div className={`inline-flex items-center space-x-2 text-lg font-semibold mb-6 ${
                        isDarkMode ? "text-green-400" : "text-green-600"
                    }`}>
                        <HiHome className="w-6 h-6" />
                        <span>Featured Projects</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Velvet Pour', 'De Martini', 'Mister Spare Parts', 'Aquilone'].map((project, index) => (
                            <div key={index} className="space-y-2">
                                <div className={`w-full h-16 rounded-lg flex items-center justify-center ${
                                    isDarkMode ? "bg-gray-600" : "bg-gray-100"
                                }`}>
                                    <span className={`text-sm font-medium ${
                                        isDarkMode ? "text-gray-300" : "text-gray-600"
                                    }`}>
                                        {project}
                                    </span>
                                </div>
                                <div className={`text-xs ${
                                    isDarkMode ? "text-gray-400" : "text-gray-500"
                                }`}>
                                    Live Store
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className={`mt-8 pt-6 border-t ${
                        isDarkMode ? "border-gray-600" : "border-gray-200"
                    }`}>
                        <p className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}>
                            15+ stores launched • 6-figure results • 98% client satisfaction
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
