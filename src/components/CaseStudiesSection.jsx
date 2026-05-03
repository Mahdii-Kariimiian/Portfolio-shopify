import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import ProjectTabs from "./ProjectTabs";
import ProjectDetails from "./ProjectDetails";
import ProjectPreview from "./ProjectPreview";
import caseStudiesData from "../db/caseStudiesData";

const CaseStudiesSection = ({ isDarkMode }) => {
  const { language } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState(caseStudiesData[0].id);
  
  const selectedProject = caseStudiesData.find(project => project.id === selectedProjectId);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  if (!selectedProject) {
    return null; // Fallback while data loads
  }

  return (
    <section id="case-studies" className={`py-20 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
        } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Case Studies
                    </h2>
                    <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
                    }`}>
                        Real-world examples of how I've helped businesses transform their Shopify stores 
                        and achieve measurable growth through custom development and optimization.
                    </p>
                </div>

        {/* Project Tabs */}
        <div className="mb-12">
          <ProjectTabs
            projects={caseStudiesData}
            selectedProjectId={selectedProjectId}
            onProjectSelect={handleProjectSelect}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Project Details */}
          <div className="order-2 lg:order-1">
            <ProjectDetails
              project={selectedProject}
              isDarkMode={isDarkMode}
            />
          </div>

          {/* Right Side - Project Preview */}
          <div className="order-1 lg:order-2">
            <ProjectPreview
              project={selectedProject}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Additional CTA */}
        <div className={`mt-16 text-center p-8 rounded-3xl ${
          isDarkMode 
            ? "bg-dark-surface/60 border border-dark-border/50" 
            : "bg-gray-50/80 border border-gray-200/50"
        }`}>
          <div className={`text-lg sm:text-xl font-medium mb-4 ${
            isDarkMode ? "text-green-700/80" : "text-green-700/80"
          }`}>
            Want similar results for your business?
          </div>
          <p className={`max-w-2xl mx-auto text-sm mb-6 ${
            isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
          }`}>
            Let's discuss your project and create a custom solution that drives real growth and 
            measurable results for your Shopify store.
          </p>
          <a
            href="#final-cta"
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode
                ? "bg-green-700 text-dark-bg hover:bg-olive-green"
                : "bg-green-700 text-white hover:bg-olive-green"
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

export default CaseStudiesSection;
