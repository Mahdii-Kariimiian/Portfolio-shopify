import { HiArrowNarrowRight } from "react-icons/hi";
import hero from "../assets/webdeveloper-hero.png";

export default function HeroSection({ isDarkMode }) {
    console.log(isDarkMode);
    return (
        <section
            className={`relative w-full min-h-min flex items-center justify-between max-lg:flex-col max-lg:justify-center py-10 lg:px-10 px-4 mt-7 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-800"
            }`}
        >
            <div className="w-1/2 max-lg:w-full max-lg:text-center lg:my-20">
                <h2 className="text-3xl mb-4">Shopify Developer</h2>
                <h1 className="text-2xl lg:text-5xl font-bold mb-10">
                    Mahdi Karimian
                </h1>
                <div
                    className={`text-lg max-lg:text-md lg:max-w-[700px] space-y-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    <p>
                        Need someone to set up your Shopify store quickly,
                        smoothly, and professionally?
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

            <div className="lg:w-1/2 max-lg:mt-20">
                <img
                    src={hero}
                    alt="lap top image"
                    className="w-full h-full object-cover max-w-xl"
                />
            </div>
        </section>
    );
}
