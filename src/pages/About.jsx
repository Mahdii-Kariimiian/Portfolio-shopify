// import aboutMe from "../assets/about-me.png";
import image from "../assets/webdevelopment-about.png";

const About = ({ isDarkMode }) => {
    return (
        <section
            className={`w-full mx-auto text-center py-10 md:px-10 px-4 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            <h1
                className={`text-4xl font-bold mb-12 ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                }`}
            >
                About me
            </h1>
            <div className="md:flex gap-32 justify-between items-center mx-32">
                <div
                    className={`text-lg leading-relaxed text-start w-2/3 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    <p>
                        With two years of hands-on experience in front-end
                        development, I specialize in crafting custom Shopify
                        themes that are not only visually stunning but also
                        user-friendly and optimized for performance. My deep
                        understanding of modern web technologies empowers me to
                        design fast, responsive, and conversion-focused
                        e-commerce stores tailored specifically to your brand’s
                        needs.
                    </p>
                    <p>
                        I believe that every Shopify store should tell a
                        story—your story. By combining design, functionality,
                        and a passion for seamless user experiences, I ensure
                        that your online store doesn’t just look great, it also
                        delivers results. Whether you're looking to launch a new
                        store or revamp your existing one, I’m here to help you
                        elevate your Shopify presence. Let’s collaborate to
                        create an unforgettable online experience that stands
                        out in today’s competitive market!
                    </p>
                </div>
                <img className="w-1/4" src={image} alt="image of me " />
            </div>
            {/* <div className="mt-8">
                <img
                    src={aboutMe}
                    alt="About me"
                    className={`w-full rounded-lg shadow-md ${
                        isDarkMode ? "shadow-gray-800" : "shadow-gray-400"
                    }`}
                />
            </div> */}
        </section>
    );
};

export default About;
