import { useLanguage } from "../contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
import { projects } from "../db/db";

const Projects = ({ isDarkMode }) => {
    const { language } = useLanguage();

    return (
        <section id="projects" className={`py-10 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Featured Projects
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        Explore my portfolio of high-performance Shopify stores. Each project showcases custom design, advanced functionality, and conversion optimization.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="h-full">
                            <ProjectCard 
                                project={project} 
                                isDarkMode={isDarkMode} 
                            />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-16 text-center p-8 rounded-3xl ${
                    isDarkMode 
                        ? "bg-dark-surface/60 border border-dark-border/50" 
                        : "bg-gray-50/80 border border-gray-200/50"
                }`}>
                    <div className={`text-lg sm:text-xl font-medium mb-4 ${
                        isDarkMode ? "text-green-700/80" : "text-green-700/80"
                    }`}>
                        Ready to build your dream Shopify store?
                    </div>
                    <p className={`max-w-2xl mx-auto text-sm mb-6 ${
                        isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
                    }`}>
                        Let's discuss your project and create a custom solution that drives real results for your business.
                    </p>
                    <a
                        href="#final-cta"
                        className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                            isDarkMode
                                ? "bg-green-700 text-dark-bg hover:bg-lime-green"
                                : "bg-green-700 text-white hover:bg-lime-green"
                        }`}
                    >
                        <span>Start Your Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
