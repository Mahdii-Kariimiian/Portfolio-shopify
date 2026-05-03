import { useState } from "react";
import { HiEye, HiEyeOff, HiArrowRight, HiLightBulb, HiCheckCircle, HiTrendingUp } from "react-icons/hi";

const ProjectDetails = ({ project, isDarkMode }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(project.password);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Project Title and Description */}
      <div>
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          {project.name}
        </h2>
        <p className={`text-lg leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}>
          {project.description}
        </p>
      </div>

      {/* Case Study Sections */}
      <div className="space-y-6">
        {/* Problem */}
        <div className={`p-4 rounded-xl border ${
          isDarkMode 
            ? "bg-red-900/20 border-red-800/50" 
            : "bg-red-50 border-red-200"
        }`}>
          <div className="flex items-center space-x-2 mb-3">
            <HiLightBulb className={`w-5 h-5 ${
              isDarkMode ? "text-red-400" : "text-red-600"
            }`} />
            <h3 className={`font-semibold ${
              isDarkMode ? "text-red-400" : "text-red-600"
            }`}>
              Problem
            </h3>
          </div>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            {project.caseStudy.problem}
          </p>
        </div>

        {/* Solution */}
        <div className={`p-4 rounded-xl border ${
          isDarkMode 
            ? "bg-blue-900/20 border-blue-800/50" 
            : "bg-blue-50 border-blue-200"
        }`}>
          <div className="flex items-center space-x-2 mb-3">
            <HiCheckCircle className={`w-5 h-5 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`} />
            <h3 className={`font-semibold ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}>
              Solution
            </h3>
          </div>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            {project.caseStudy.solution}
          </p>
        </div>

        {/* Result */}
        <div className={`p-4 rounded-xl border ${
          isDarkMode 
            ? "bg-green-900/20 border-green-800/50" 
            : "bg-green-50 border-green-200"
        }`}>
          <div className="flex items-center space-x-2 mb-3">
            <HiTrendingUp className={`w-5 h-5 ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`} />
            <h3 className={`font-semibold ${
              isDarkMode ? "text-green-400" : "text-green-600"
            }`}>
              Result
            </h3>
          </div>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            {project.caseStudy.result}
          </p>
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className={`text-lg font-semibold mb-3 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Key Features
        </h3>
        <ul className="space-y-2">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="text-lime-green mr-3 mt-1">•</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Live Link */}
      <div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            isDarkMode
              ? "bg-green-700 text-dark-bg hover:bg-lime-green"
              : "bg-green-700 text-white hover:bg-lime-green"
          }`}
        >
          <span>View Live</span>
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Password Section */}
      {project.password && project.password !== "No Password needed" && (
        <div className={`p-4 rounded-xl border ${
          isDarkMode
            ? "bg-dark-surface/50 border-dark-border/50"
            : "bg-gray-50 border-gray-200/50"
        }`}>
          <div className="flex items-center space-x-3">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={project.password}
              readOnly
              className={`flex-1 px-3 py-2 text-sm rounded-lg border ${
                isDarkMode
                  ? "bg-dark-surface border-dark-border text-gray-300"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            />
            <button
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
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
              className={`px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                passwordCopied
                  ? "text-green-500"
                  : isDarkMode
                  ? "text-lime-green hover:text-lime-green/80"
                  : "text-lime-green hover:text-lime-green/80"
              }`}
            >
              {passwordCopied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className={`text-xs mt-2 ${
            isDarkMode ? "text-gray-500" : "text-gray-500"
          }`}>
            Password required for site access
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
