import { useState } from "react";

const ProjectPreview = ({ project, isDarkMode }) => {
  const [viewMode, setViewMode] = useState("desktop");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = viewMode === "desktop" ? project.images.desktop : project.images.mobile;
  const hasMultipleImages = currentImages.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="space-y-4">
      {/* View Mode Toggle */}
      <div className={`flex p-1 rounded-lg ${
        isDarkMode 
          ? "bg-dark-surface/50 border border-dark-border/50" 
          : "bg-white/80 border border-gray-200/60 backdrop-blur-sm"
      }`}>
        <button
          onClick={() => {
            setViewMode("desktop");
            setCurrentImageIndex(0);
          }}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            viewMode === "desktop"
              ? isDarkMode
                ? "bg-lime-green text-dark-bg"
                : "bg-lime-green text-white"
              : isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Desktop
        </button>
        <button
          onClick={() => {
            setViewMode("mobile");
            setCurrentImageIndex(0);
          }}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            viewMode === "mobile"
              ? isDarkMode
                ? "bg-lime-green text-dark-bg"
                : "bg-lime-green text-white"
              : isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Mobile
        </button>
      </div>

      {/* Image Preview */}
      <div className={`relative rounded-2xl overflow-hidden border ${
        isDarkMode
          ? "border-dark-border/50"
          : "border-gray-200/60"
      }`}>
        <div className="relative">
          <img
            src={currentImages[currentImageIndex]}
            alt={`${project.name} - ${viewMode} view`}
            className={`w-full ${
              viewMode === "desktop" ? "h-96" : "h-80"
            } object-cover transition-transform duration-500`}
          />

          {/* Image Navigation */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isDarkMode
                    ? "bg-black/60 text-white hover:bg-black/80"
                    : "bg-white/80 text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isDarkMode
                    ? "bg-black/60 text-white hover:bg-black/80"
                    : "bg-white/80 text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {hasMultipleImages && (
            <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium ${
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
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? "bg-lime-green w-6"
                    : isDarkMode
                    ? "bg-white/50"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image Info */}
      <div className={`text-center text-sm ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}>
        {viewMode === "desktop" ? "Desktop preview" : "Mobile preview"}
        {hasMultipleImages && ` • Image ${currentImageIndex + 1} of ${currentImages.length}`}
      </div>
    </div>
  );
};

export default ProjectPreview;
