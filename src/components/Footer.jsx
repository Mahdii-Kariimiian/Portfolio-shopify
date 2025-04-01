import { Link } from "react-router-dom";
import {
    FaShopify,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full text-white py-10 md:px-10 px-4 mt-12 bg-darkGreen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center space-x-3">
                        <FaShopify className="text-4xl text-white" />
                        <div className="text-md font-bold space-y-1 text-white">
                            <h1>Mahdi Karimian</h1>
                            <h2>Shopify Developer</h2>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-200">
                        Helping businesses create Shopify stores that convert
                        visitors into loyal customers.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-6 inline-block bg-white text-black py-2 px-6 rounded-lg hover:bg-lightGreen transition"
                    >
                        Get a Free Consultation
                    </Link>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="hover:text-lightGreen">
                                About me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-lightGreen"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-lightGreen"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.shopify.com"
                                className="hover:text-lightGreen"
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
                                className="hover:text-lightGreen"
                            >
                                Basic Plan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="order/intermediate"
                                className="hover:text-lightGreen"
                            >
                                Intermediate Plan
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/order/advanced"
                                className="hover:text-lightGreen"
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
                        className="hover:text-lightGreen"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/mahdii.kariimiian?igsh=aHBvNHBmeTlxaGFx"
                        className="hover:text-lightGreen"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahdiikariimiian"
                        className="hover:text-lightGreen"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://github.com/Mahdii-Kariimiian"
                        className="hover:text-lightGreen"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t mt-6 pt-4 text-center text-gray-200">
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
