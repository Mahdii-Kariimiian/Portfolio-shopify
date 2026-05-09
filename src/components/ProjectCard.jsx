import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight, HiEye, HiEyeOff, HiArrowRight } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";

const ProjectCard = ({ project, isDarkMode }) => {
    const { t } = useLanguage();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(project.password);
        setPasswordCopied(true);
        setTimeout(() => setPasswordCopied(false), 2000);
    };

    const nextImage = () => {
        const totalImages = project.imagesType.desktop.length;
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const prevImage = () => {
        const totalImages = project.imagesType.desktop.length;
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <Link to={`/projects/${project.id}`} className={`group relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer h-full flex flex-col justify-between ${
            isDarkMode
                ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40"
                : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm"
        }`}>
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={project.imagesType.desktop[currentImageIndex]}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Image Navigation */}
                {project.imagesType.desktop.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                                isDarkMode
                                    ? "bg-black/50 text-white hover:bg-black/70"
                                    : "bg-white/80 text-gray-800 hover:bg-white"
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                                isDarkMode
                                    ? "bg-black/50 text-white hover:bg-black/70"
                                    : "bg-white/80 text-gray-800 hover:bg-white"
                            }`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image Indicators */}
                {project.imagesType.desktop.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                        {project.imagesType.desktop.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentImageIndex
                                        ? "bg-green-700"
                                        : isDarkMode
                                        ? "bg-white/50"
                                        : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Project Name */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    isDarkMode
                        ? "text-white group-hover:text-green-700"
                        : "text-gray-900 group-hover:text-green-700"
                }`}>
                    {project.name}
                </h3>

                {/* Project Description */}
                <p className={`text-base leading-relaxed mb-6 line-clamp-3 ${
                    isDarkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                }`}>
                    {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                    <div className={`text-sm font-medium mb-3 uppercase tracking-wide ${
                        isDarkMode ? "text-green-700/80" : "text-green-700/80"
                    }`}>
                        {t('projectCard.keyFeatures')}
                    </div>
                    <ul className="space-y-3">
                        {project.bullet.slice(0, 3).map((item, index) => (
                            <li
                                key={index}
                                className={`text-sm flex items-start ${
                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                <span className="text-green-700 mr-3 mt-1 text-lg">•</span>
                                <span className="line-clamp-2">{item}</span>
                            </li>
                        ))}
                        {project.bullet.length > 3 && (
                            <li className={`text-sm ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}>
                                {t('projectCard.moreFeatures', { count: project.bullet.length - 3 })}
                            </li>
                        )}
                    </ul>
                </div>

                {/* Live Link Button */}
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        isDarkMode
                            ? "bg-green-700/20 text-green-700 hover:bg-green-700/30"
                            : "bg-green-700/10 text-green-700 hover:bg-green-700/20"
                    }`}
                >
                    <span>{t('projectCard.viewLive')}</span>
                    <HiArrowRight className="w-4 h-4" />
                </a>

                {/* Password Section */}
                {project.password && project.password !== "No Password needed" && (
                    <div className={`mt-4 p-3 rounded-xl border ${
                        isDarkMode
                            ? "bg-dark-surface/50 border-dark-border/50"
                            : "bg-gray-50 border-gray-200/50"
                    }`}>
                        <div className="flex items-center space-x-2">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                value={project.password}
                                readOnly
                                className={`flex-1 px-3 py-1 text-sm rounded-lg border ${
                                    isDarkMode
                                        ? "bg-dark-surface border-dark-border text-gray-300"
                                        : "bg-white border-gray-300 text-gray-700"
                                }`}
                            />
                            <button
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                className={`p-1.5 rounded-lg transition-colors duration-200 ${
                                    isDarkMode
                                        ? "text-gray-400 hover:text-gray-300"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                {isPasswordVisible ? (
                                    <HiEyeOff className="w-4 h-4" />
                                ) : (
                                    <HiEye className="w-4 h-4" />
                                )}
                            </button>
                            <button
                                onClick={handleCopyPassword}
                                className={`px-2 py-1 text-xs rounded-lg transition-colors duration-200 ${
                                    passwordCopied
                                        ? "text-green-500"
                                        : isDarkMode
                                        ? "text-green-700 hover:text-green-700/80"
                                        : "text-green-700 hover:text-green-700/80"
                                }`}
                            >
                                {passwordCopied ? t('projectCard.copied') : t('projectCard.copy')}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Subtle gradient overlay on hover */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDarkMode
                    ? "bg-gradient-to-br from-green-700/5 to-transparent"
                    : "bg-gradient-to-br from-green-700/5 to-transparent"
            }`} />
        </Link>
    );
};

export default ProjectCard;
