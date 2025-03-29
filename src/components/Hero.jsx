import { HiArrowNarrowRight } from "react-icons/hi";
import hero from "../assets/webdeveloper-hero.png";

export default function HeroSection({ isDarkMode }) {
    console.log(isDarkMode);
    return (
        <section
            className={`relative w-full min-h-min flex items-center justify-between max-md:flex-col max-md:justify-center py-10 md:px-10 px-4 md:mt-7 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            <div className="w-1/2 max-md:w-full max-md:text-center">
                <h2 className="text-3xl mb-4">Shopify Developer</h2>
                <h1 className="text-2xl md:text-5xl font-bold mb-6">
                    Mahdi Karimian
                </h1>
                <div
                    className={`text-lg max-md:text-md max-w-[600px] ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    <p>
                        {" "}
                        Need someone to set up your Shopify store fast and
                        hassle-free?
                    </p>
                    <p>
                        I design custom themes that look great, run smoothly,
                        and help you sell more. Whether you’re starting fresh or
                        upgrading your store, I’ll make sure it’s easy to use
                        and totally on-brand. Let’s build something awesome
                        together.
                    </p>
                    <p>
                        Check out my projects, and if you have any questions,
                        just ask. I’m happy to help!
                    </p>
                </div>
            </div>

            <div className="md:w-1/2 max-md:mt-20">
                <img
                    src={hero}
                    alt="lap top image"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
