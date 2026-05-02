import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            className={`w-full pt-6 md:px-6 px-4 flex gap-10 justify-between items-center relative ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-transparent text-black"
            }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    isDarkMode ? "bg-green-600 text-white" : "bg-green-600 text-white"
                }`}>
                    {t('header.logo')}
                </div>
                <span className="text-xl font-bold">Mahdi Karimian</span>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden flex w-52 justify-end items-center z-20">
                <button
                    onClick={toggleMenu}
                    className="text-3xl focus:outline-none"
                >
                    <span>&#9776;</span>
                </button>
                <div
                    className={`fixed top-0 right-0 w-64 h-full pt-8 ${
                        isDarkMode
                            ? "bg-darkerGreen text-white"
                            : "bg-white text-black"
                    } shadow-lg p-4 space-y-4 transform ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex items-center justify-between space-x-4">
                        {/* Dark Mode Toggle for Mobile */}
                        <button
                            onClick={toggleDarkMode}
                            className="flex p-2 rounded-full bg-gray-200 hover:bg-lightGreen transition duration-200"
                        >
                            {!isDarkMode ? (
                                <FaMoon className="text-gray-800 text-xl" />
                            ) : (
                                <FaSun className="text-gray-800 text-xl" />
                            )}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="text-3xl focus:outline-none"
                        >
                            <span>&#10005;</span>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col justify-center items-center space-y-6 py-10">
                        <Link
                            to="/projects"
                            className="hover:text-green-400 transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('header.projects')}
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-green-400 transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('header.contact')}
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-green-400 transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('header.about')}
                        </Link>
                        
                        {/* Language Switcher Mobile */}
                        <div className="flex space-x-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`px-3 py-1 rounded-lg transition duration-200 ${
                                        language === lang.code
                                            ? "bg-green-600 text-white"
                                            : isDarkMode
                                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Shopify Page Button in Mobile */}
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/order"
                        className="flex mx-auto items-center space-x-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full justify-center transition duration-200"
                    >
                        <span className="whitespace-nowrap">
                            {t('header.freeAudit')}
                        </span>
                        <HiArrowNarrowRight />
                    </Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 w-full justify-between">
                {/* Navigation Links for Desktop */}
                <div className="flex gap-8 items-center">
                    <Link
                        to="/about"
                        className="hover:text-green-400 transition duration-200"
                    >
                        {t('header.about')}
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-green-400 transition duration-200"
                    >
                        {t('header.projects')}
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-green-400 transition duration-200"
                    >
                        {t('header.contact')}
                    </Link>
                    
                    {/* Language Switcher Desktop */}
                    <div className="flex items-center space-x-1">
                        <FaGlobe className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                        <div className="flex space-x-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`px-2 py-1 text-sm rounded-lg transition duration-200 ${
                                        language === lang.code
                                            ? "bg-green-600 text-white"
                                            : isDarkMode
                                            ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                                    }`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dark Mode Toggle and Order Button */}
                <div className="flex gap-4 items-center">
                    <button
                        onClick={toggleDarkMode}
                        className={`p-3 rounded-full transition duration-200 ${
                            isDarkMode
                                ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                        }`}
                    >
                        {!isDarkMode ? (
                            <FaMoon />
                        ) : (
                            <FaSun />
                        )}
                    </button>

                    {/* Shopify Page Button for Desktop */}
                    <Link
                        to="/order"
                        className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full justify-center transition duration-200"
                    >
                        <span>{t('header.freeAudit')}</span>
                        <HiArrowNarrowRight />
                    </Link>
                </div>
            </div>

            {/* Dark Overlay behind the menu for Mobile */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                    onClick={toggleMenu}
                />
            )}
        </header>
    );
};

export default Header;
