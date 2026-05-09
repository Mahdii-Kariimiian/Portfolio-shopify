import { FaGlobe, FaSun, FaMoon } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../assets/new-logo.png";

const Header = ({ isDarkMode, setIsDarkMode, isMenuOpen, setIsMenuOpen }) => {
    const { language, changeLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'it', name: 'IT' },
        { code: 'fa', name: 'فا' }
    ];

    return (
        <header
            className={`w-full py-3 md:px-8 px-3 flex justify-between items-center relative backdrop-blur-lg z-[9998] ${
                isDarkMode
                    ? "bg-dark-bg/90 text-dark-text-primary border-b border-dark-border"
                    : "bg-white/80 text-black border-b border-gray-200"
            }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
                <img 
                    src={logo} 
                    alt="Mahdi Karimian Logo" 
                    className="w-10 md:w-16 lg:w-20 object-contain flex-shrink-0"
                />
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center z-50">
                <button
                    onClick={toggleMenu}
                    className="text-3xl focus:outline-none"
                >
                    <span>&#9776;</span>
                </button>
            </div>

            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-between w-full">
                {/* Navigation Links */}
                <nav className="flex items-center space-x-8 ml-8">
                    <Link
                        to="/about"
                        className="text-sm font-medium relative group transition-all duration-300"
                    >
                        {t('header.about')}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link
                        to="/projects"
                        className="text-sm font-medium relative group transition-all duration-300"
                    >
                        {t('header.projects')}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* Plans Dropdown */}
                    <div className="relative group">
                        <button className={`text-sm font-medium relative group transition-all duration-300 flex items-center space-x-1 ${
                            isDarkMode ? "text-dark-text-primary" : "text-black"
                        }`}>
                            {t('header.plans')}
                            <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-3 w-48 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 backdrop-blur-xl ${
                            isDarkMode ? "bg-dark-surface border-dark-border" : "bg-white/95 border border-gray-200"
                        }`}>
                            <Link
                                to="/order/basic"
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-t-xl ${
                                    isDarkMode 
                                        ? "text-dark-text-secondary hover:bg-dark-surface-hover hover:text-dark-text-primary"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {t('header.basicPlan')}
                            </Link>
                            <Link
                                to="/order/intermediate"
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                    isDarkMode 
                                        ? "text-dark-text-secondary hover:bg-dark-surface-hover hover:text-dark-text-primary"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {t('header.intermediatePlan')}
                            </Link>
                            <Link
                                to="/order/advanced"
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-b-xl ${
                                    isDarkMode 
                                        ? "text-dark-text-secondary hover:bg-dark-surface-hover hover:text-dark-text-primary"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {t('header.advancedPlan')}
                            </Link>
                        </div>
                    </div>
                    <Link
                        to="/contact"
                        className="text-sm font-medium relative group transition-all duration-300"
                    >
                        {t('header.contact')}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* Right Side Controls */}
                <div className="flex items-center gap-3">
                    {/* Language Dropdown */}
                    <div className="relative group">
                        <button className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-105 ${
                            isDarkMode
                                ? "bg-dark-surface/50 hover:bg-dark-surface-hover/50 text-dark-text-secondary backdrop-blur-sm"
                                : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-700 backdrop-blur-sm"
                        }`}>
                            <span className="text-xs font-semibold">
                                {languages.find(lang => lang.code === language)?.name}
                            </span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={`absolute top-full right-0 mt-3 w-36 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 backdrop-blur-xl ${
                            isDarkMode ? "bg-dark-surface border-dark-border" : "bg-white/95 border border-gray-200"
                        }`}>
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                        language === lang.code
                                            ? "bg-green-700 text-white"
                                            : isDarkMode 
                                            ? "text-dark-text-secondary hover:bg-dark-surface-hover hover:text-dark-text-primary"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-105 ${
                            isDarkMode
                                ? "bg-dark-surface/50 hover:bg-dark-surface-hover/50 text-yellow-400 backdrop-blur-sm"
                                : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-700 backdrop-blur-sm"
                        }`}
                    >
                        {!isDarkMode ? (
                            <FaMoon className="w-4 h-4" />
                        ) : (
                            <FaSun className="w-4 h-4" />
                        )}
                    </button>

                    {/* CTA Button */}
                    <Link
                        to="/order"
                        className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-green-700 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <span>{t('header.freeAudit')}</span>
                        <HiArrowNarrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;
