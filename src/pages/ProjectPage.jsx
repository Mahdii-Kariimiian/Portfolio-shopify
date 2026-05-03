import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiEye, HiEyeOff, HiArrowRight, HiOutlineSparkles, HiOutlinePhone, HiLightBulb, HiCheckCircle, HiChartBar } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import { projects } from "../db/db";

const ProjectPage = ({ isDarkMode }) => {
  const { projectId } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [viewMode, setViewMode] = useState("desktop");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(projectId));
    setProject(foundProject);
    setCurrentImageIndex(0);
  }, [projectId]);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(project.password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  const handleProjectClick = (e, projectId) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    // Use setTimeout to ensure scroll happens before navigation
    setTimeout(() => {
      navigate(`/projects/${projectId}`);
    }, 100);
  };

  const nextImage = () => {
    const currentImages = viewMode === "desktop" ? project.imagesType.desktop : project.imagesType.mobile;
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    const currentImages = viewMode === "desktop" ? project.imagesType.desktop : project.imagesType.mobile;
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-darker-bg text-white" : "bg-light-bg text-gray-900"
      }`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
            isDarkMode ? "bg-green-700 text-dark-bg" : "bg-green-700 text-white"
          }`}>
            <HiArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentImages = viewMode === "desktop" ? project.imagesType.desktop : project.imagesType.mobile;
  const hasMultipleImages = (project.imagesType.desktop.length > 1) || (project.imagesType.mobile.length > 1);

  return (
    <div className={`min-h-screen overflow-x-hidden ${
      isDarkMode ? "bg-darker-bg text-dark-text-primary" : "bg-light-bg text-gray-900"
    } ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 backdrop-blur-sm border-b ${
        isDarkMode ? "bg-dark-bg/80 border-dark-border" : "bg-white/80 border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/projects" 
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white hover:bg-dark-surface/50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <HiArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
            
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDarkMode ? "bg-green-700/20 text-green-700" : "bg-green-700/10 text-green-700"
            }`}>
              Case Study
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center mb-16">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              {project.name}
            </h1>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              {project.description}
            </p>
          </div>

          {/* Main Image Gallery */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start overflow-x-hidden">
            {/* Left Side - Image Gallery */}
            <div className="order-2 lg:order-1">
              {/* View Mode Toggle */}
              <div className={`flex p-1 rounded-lg mb-6 ${
                isDarkMode 
                  ? "bg-dark-surface/50 border border-dark-border/50" 
                  : "bg-white/80 border border-gray-200/60 backdrop-blur-sm"
              }`}>
                <button
                  onClick={() => {
                    setViewMode("desktop");
                    setCurrentImageIndex(0);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === "desktop"
                      ? isDarkMode
                        ? "bg-green-700 text-dark-bg"
                        : "bg-green-700 text-white"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <HiOutlineSparkles className="w-4 h-4" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => {
                    setViewMode("mobile");
                    setCurrentImageIndex(0);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    viewMode === "mobile"
                      ? isDarkMode
                        ? "bg-green-700 text-dark-bg"
                        : "bg-green-700 text-white"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <HiOutlinePhone className="w-4 h-4" />
                  <span>Mobile</span>
                </button>
              </div>

              {/* Image Preview */}
              <div className={`relative rounded-3xl overflow-hidden border w-full min-w-0 ${
                isDarkMode
                  ? "border-dark-border/50"
                  : "border-gray-200/60"
              }`}>
                <div className="relative min-w-0">
                  <img
                    src={currentImages[currentImageIndex]}
                    alt={`${project.name} - ${viewMode} view`}
                    className={`w-full min-w-0 ${
                      viewMode === "desktop" ? "h-[500px]" : "h-[300px]"
                    } object-contain transition-transform duration-500`}
                  />

                  {/* Image Navigation */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isDarkMode
                            ? "bg-black/60 text-white hover:bg-black/80"
                            : "bg-white/80 text-gray-800 hover:bg-white"
                        }`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isDarkMode
                            ? "bg-black/60 text-white hover:bg-black/80"
                            : "bg-white/80 text-gray-800 hover:bg-white"
                        }`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {hasMultipleImages && (
                    <div className={`absolute top-4 right-4 px-3 py-2 rounded-lg text-sm font-medium ${
                      isDarkMode
                        ? "bg-black/60 text-white"
                        : "bg-white/80 text-gray-800"
                    }`}>
                      {currentImageIndex + 1} / {currentImages.length}
                    </div>
                  )}
                </div>

                {/* Image Indicators */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? "bg-green-700 w-6"
                            : isDarkMode
                            ? "bg-white/50"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
              
              {/* Features */}
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.bullet.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-green-700 mr-3 mt-1 text-lg">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Live Link */}
              <div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-green-700 text-dark-bg hover:bg-green-700"
                      : "bg-green-700 text-white hover:bg-green-700"
                  }`}
                >
                  <span>View Live Project</span>
                  <HiArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Password Section */}
              {project.password && project.password !== "No Password needed" && (
                <div className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-dark-surface/50 border-dark-border/50"
                    : "bg-gray-50 border-gray-200/50"
                }`}>
                  <h4 className={`text-lg font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    Access Password
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 min-w-0">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      value={project.password}
                      readOnly
                      className={`flex-1 min-w-0 px-4 py-3 rounded-lg border ${
                        isDarkMode
                          ? "bg-dark-surface border-dark-border text-gray-300"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    />
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        className={`p-3 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                          isDarkMode
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {isPasswordVisible ? (
                          <HiEyeOff className="w-5 h-5" />
                        ) : (
                          <HiEye className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={handleCopyPassword}
                        className={`px-4 py-3 rounded-lg transition-colors duration-200 flex-shrink-0 ${
                          passwordCopied
                            ? "text-green-500"
                            : isDarkMode
                            ? "text-green-700 hover:text-green-700/80"
                            : "text-green-700 hover:text-green-700/80"
                        }`}
                      >
                        {passwordCopied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <p className={`text-sm mt-3 ${
                    isDarkMode ? "text-gray-500" : "text-gray-500"
                  }`}>
                    Password required for site access
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <div className={`border-t ${
        isDarkMode ? "border-dark-border" : "border-gray-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  onClick={(e) => handleProjectClick(e, relatedProject.id)}
                  className={`block p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDarkMode
                      ? "bg-dark-surface/60 border-dark-border/50 hover:border-green-700/40"
                      : "bg-white/90 border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
                  }`}
                >
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img
                      src={relatedProject.imagesType.desktop[0]}
                      alt={relatedProject.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {relatedProject.name}
                  </h3>
                  <p className={`text-sm line-clamp-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {relatedProject.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
