import { Link } from "react-router-dom";
import {
    FaShopify,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`w-full py-10 md:px-10 px-4 mt-12 ${
            isDarkMode 
                ? "bg-dark-bg/90 text-dark-text-primary" 
                : "bg-white/80 text-black"
        }`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center space-x-3">
                        <FaShopify className={`text-4xl ${
                            isDarkMode ? "text-green-700" : "text-green-700"
                        }`} />
                        <div className={`text-md font-bold space-y-1 ${
                            isDarkMode ? "text-dark-text-primary" : "text-black"
                        }`}>
                            <h1>Mahdi Karimian</h1>
                            <h2>Shopify Developer</h2>
                        </div>
                    </div>
                    <p className={`mt-4 ${
                        isDarkMode ? "text-dark-text-secondary" : "text-gray-700"
                    }`}>
                        Helping businesses create Shopify stores that convert
                        visitors into loyal customers.
                    </p>
                    <Link
                        to="/order"
                        className="mt-6 inline-block bg-white text-black py-2 px-6 rounded-lg hover:bg-green-700 transition"
                    >
                        Get a Free Consultation
                    </Link>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-green-700">
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="hover:text-green-700"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-700"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://www.shopify.com"
                                className="hover:text-green-700"
                            >
                                Shopify Website
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Services I Offer */}
                <div>
                    <h3 className="font-semibold mb-4">Services I Offer</h3>
                    <ul className="flex flex-col space-y-2">
                        <li>Shopify Store Design</li>
                        <li>Theme Customization</li>
                        <li>Store Optimization</li>
                        <li>Shopify SEO & Marketing</li>
                    </ul>
                </div>

                {/* Plans Section */}
                <div>
                    <h3 className="font-semibold mb-4">Plans</h3>
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link
                                to="order/basic"
                                className="hover:text-green-700"
                            >
                                Basic Plan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="order/intermediate"
                                className="hover:text-green-700"
                            >
                                Intermediate Plan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/order/advanced"
                                className="hover:text-green-700"
                            >
                                Advanced Plan
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Social Media */}
            <div className="flex flex-col items-center mt-12">
                <h3 className="font-semibold mb-4">Follow me</h3>
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com/share/1BbuP5ErwS/"
                        className="hover:text-green-700"
                    >
                        <FaFacebook size={27} />
                    </a>
                    <a
                        href="https://www.instagram.com/mahdii.kariimiian?igsh=aHBvNHBmeTlxaGFx"
                        className="hover:text-green-700"
                    >
                        <FaInstagram size={27} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahdiikariimiian"
                        className="hover:text-green-700"
                    >
                        <FaLinkedin size={27} />
                    </a>
                    <a
                        href="https://github.com/Mahdii-Kariimiian"
                        className="hover:text-green-700"
                    >
                        <FaGithub size={27} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className={`border-t mt-6 pt-4 text-center ${
                isDarkMode ? "text-dark-text-tertiary" : "text-gray-600"
            }`}>
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </p>
                <p className="text-xs mt-2">
                    Designed and developed by Mahdi Karimian. <br />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
