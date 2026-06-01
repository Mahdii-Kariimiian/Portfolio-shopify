import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiArrowNarrowRight, HiChevronDown } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const MobileMenuOverlay = ({ isOpen, onClose, isDarkMode, setIsDarkMode }) => {
  const { language, changeLanguage, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'it', name: 'IT' },
    { code: 'fa', name: 'فا' }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectLanguage = (langCode) => {
    changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Dark Background Overlay - covers entire screen */}
      <div
        className="fixed inset-0 bg-black/90 z-[9999] md:hidden"
        onClick={onClose}
      />
      
      {/* Fullscreen Menu Panel - modern overlay */}
      <div className={`fixed inset-0 z-[10000] md:hidden flex flex-col ${
        isDarkMode
          ? "bg-dark-bg text-white"
          : "bg-white text-black"
      }`}>
        {/* TOP CONTROL BAR - Single Row */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}>
          {/* LEFT GROUP - Dark Mode + Language */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
                isDarkMode 
                  ? "bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80" 
                  : "bg-gray-100/80 text-gray-700 hover:bg-gray-200/80"
              }`}
            >
              {!isDarkMode ? (
                <FaMoon className="w-5 h-5" />
              ) : (
                <FaSun className="w-5 h-5" />
              )}
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  setIsServicesDropdownOpen(false);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors duration-200 ${
                  isDarkMode 
                    ? "bg-gray-800/80 text-white hover:bg-gray-700/80" 
                    : "bg-gray-100/80 text-gray-900 hover:bg-gray-200/80"
                }`}
              >
                <span className="font-medium text-sm">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`} />
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-24 rounded-xl shadow-lg border ${
                  isDarkMode 
                    ? "bg-gray-800 border-gray-700" 
                    : "bg-white border-gray-200"
                }`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        language === lang.code
                          ? (isDarkMode ? "bg-green-700 text-white" : "bg-green-700 text-white")
                          : (isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100")
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT - Close Button */}
          <button
            onClick={onClose}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
              isDarkMode 
                ? "bg-gray-800/80 text-white hover:bg-gray-700/80" 
                : "bg-gray-100/80 text-black hover:bg-gray-200/80"
            }`}
          >
            <span className="text-lg leading-none">&#10005;</span>
          </button>
        </div>

        {/* MIDDLE SECTION - Navigation Links */}
        <div className="flex-1 px-6 py-8">
          <div className="space-y-6">
            <Link
              to="/projects"
              className="block text-xl font-medium hover:text-green-700 transition-colors duration-200"
              onClick={onClose}
            >
              {t('header.projects')}
            </Link>
            {/* Plans Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLanguageDropdownOpen(false);
                  setIsServicesDropdownOpen(false);
                }}
                className="flex items-center space-x-2 text-xl font-medium hover:text-green-700 transition-colors duration-200"
              >
                {t('header.plans')}
                <HiChevronDown className="w-4 h-4" />
              </button>
              <div className="mt-2 ml-4 space-y-2">
                <Link
                  to="/order/basic"
                  className="block text-lg font-medium hover:text-green-700 transition-colors duration-200 pl-4"
                  onClick={onClose}
                >
                  {t('header.basicPlan')}
                </Link>
                <Link
                  to="/order/intermediate"
                  className="block text-lg font-medium hover:text-green-700 transition-colors duration-200 pl-4"
                  onClick={onClose}
                >
                  {t('header.intermediatePlan')}
                </Link>
                <Link
                  to="/order/advanced"
                  className="block text-lg font-medium hover:text-green-700 transition-colors duration-200 pl-4"
                  onClick={onClose}
                >
                  {t('header.advancedPlan')}
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="block text-xl font-medium hover:text-green-700 transition-colors duration-200"
              onClick={onClose}
            >
              {t('header.contact')}
            </Link>
            <Link
              to="/about"
              className="block text-xl font-medium hover:text-green-700 transition-colors duration-200"
              onClick={onClose}
            >
              {t('header.about')}
            </Link>
          </div>
        </div>

        {/* BOTTOM SECTION - CTA Button */}
        <div className={`px-6 py-6 border-t ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}>
          <Link
            onClick={onClose}
            to="/order"
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-700 text-white rounded-lg text-base font-semibold transition-colors duration-200 hover:bg-green-600"
          >
            <span>{t('header.freeAudit')}</span>
            <HiArrowNarrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenuOverlay;
