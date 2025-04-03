import { FaSun, FaMoon } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/my-logo.png/";

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header
            className={`w-full pt-6 md:px-6 px-4 flex gap-10 justify-between items-center relative ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-transparent text-black"
            }`}
        >
            {/* Logo */}
            <Link to="/">
                <img className="w-40 max-md:w-28" src={logo} alt="logo" />
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
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Me
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-lightGreen transition duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Me
                        </Link>
                    </div>

                    {/* Shopify Page Button in Mobile */}
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/order"
                        className="flex mx-auto items-center space-x-2 px-10 pb-2 pt-1 bg-darkGreen hover:bg-lightGreen text-white rounded-full justify-center transition duration-200"
                    >
                        <span className="whitespace-nowrap">
                            Free Consultation
                        </span>
                        <HiArrowNarrowRight />
                    </Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 w-full justify-between">
                {/* Navigation Links for Desktop */}
                <div className="flex gap-8">
                    <Link
                        to="/about"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        About me
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-lightGreen transition duration-200"
                    >
                        Contact me
                    </Link>
                </div>

                {/* Dark Mode Toggle and Order Button */}
                <div className="flex gap-5 items-center">
                    <button
                        onClick={toggleDarkMode}
                        className="p-3 rounded-full bg-gray-200 hover:bg-lightGreen transition duration-200"
                    >
                        {!isDarkMode ? (
                            <FaMoon className="text-gray-800" />
                        ) : (
                            <FaSun className="text-gray-800" />
                        )}
                    </button>

                    {/* Shopify Page Button for Desktop */}
                    <Link
                        to="/order"
                        className="flex items-center space-x-2 px-8 py-2 bg-darkGreen hover:bg-lightGreen text-white rounded-full justify-center transition duration-200"
                    >
                        <span>Free Consultation</span>
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
