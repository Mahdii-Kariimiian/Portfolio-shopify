import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const HeroProjectCard = ({ project, isDarkMode, index }) => {
  const { t } = useLanguage();
  
  const metricsText = "+25% ↑ Conversion   •   40% Faster   •   3x ROI";

  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col ${
      project.isReal 
        ? (isDarkMode 
            ? "bg-dark-surface/60 border border-green-700/30 hover:border-green-700/60 hover:bg-green-700/5" 
            : "bg-white/95 border border-green-700/30 hover:border-green-700/60 hover:bg-green-700/5 backdrop-blur-sm")
        : (isDarkMode 
            ? "bg-dark-surface/60 border border-dark-border/50 hover:border-green-700/40 hover:bg-green-700/10"
            : "bg-white/90 border border-gray-200/60 hover:border-green-700/40 hover:bg-green-700/5 backdrop-blur-sm")
    }`}>
      {/* Project Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.images.desktop[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Info */}
      <div className={`flex flex-col flex-grow ${project.isReal ? 'p-5' : 'p-4'}`}>
        {/* 1. LABEL */}
        <div className="mb-2">
          {project.isReal ? (
            <div className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
              isDarkMode 
                ? "bg-green-700 text-white border border-green-600" 
                : "bg-green-700 text-white border border-green-600"
            }`}>
              {t('heroProjectCard.realProject')}
            </div>
          ) : (
            <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              isDarkMode 
                ? "bg-gray-700/50 text-gray-400 border border-gray-600" 
                : "bg-gray-100 text-gray-600 border border-gray-300"
            }`}>
              {t('heroProjectCard.conceptProject')}
            </div>
          )}
        </div>

        {/* 2. TITLE */}
        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
          isDarkMode
            ? "text-white group-hover:text-green-700"
            : "text-gray-900 group-hover:text-green-700"
        }`}>
          {project.name}
        </h3>
        
        {/* 3. DESCRIPTION */}
        <p className={`text-sm leading-relaxed mb-4 ${
          isDarkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}>
          {project.description}
        </p>

        {/* 4. METRICS (only for real project) */}
        {project.isReal && (
          <div className="mb-4">
            <p className={`text-xs font-medium ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}>
              {metricsText}
            </p>
          </div>
        )}

        {/* 5. CTA - Pushed to bottom */}
        <div className="mt-auto">
          <Link
            to={`/projects/${index + 1}`}
            className={`inline-flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              project.isReal
                ? (isDarkMode
                  ? "bg-green-700 text-white hover:bg-green-600"
                  : "bg-green-700 text-white hover:bg-green-600")
                : (isDarkMode
                  ? "bg-green-700/20 text-green-700 hover:bg-green-700/30"
                  : "bg-green-700/10 text-green-700 hover:bg-green-700/20")
            }`}
          >
            <span>{project.isReal ? t('heroProjectCard.viewCaseStudy') : t('heroProjectCard.seeProject')}</span>
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        isDarkMode
          ? "bg-gradient-to-br from-green-700/10 to-transparent"
          : "bg-gradient-to-br from-green-700/8 to-transparent"
      }`} />
    </div>
  );
};

export default HeroProjectCard;
