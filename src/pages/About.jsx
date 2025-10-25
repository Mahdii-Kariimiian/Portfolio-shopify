// import aboutMe from "../assets/about-me.png";
import { useEffect } from "react";
import image from "../assets/webdevelopment-about.png";
import visitCard from "../assets/Mahdi-Karimian.png";

const About = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section
            className={`w-full mx-auto text-center py-10 lg:px-10 px-4 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            <div>
                <h1
                    className={`text-4xl font-bold mb-12 ${
                        isDarkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                >
                    About me
                </h1>
                <div className="flex flex-col lg:flex-row-reverse gap-32 justify-between items-center lg:mx-32">
                    <img
                        className="w-full max-w-96 lg:w-1/3 lg:min-w-64"
                        src={image}
                        alt="about me image"
                    />
                    <div
                        className={`text-lg leading-relaxed text-start lg:w-2/3 space-y-4 ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        <p>
                            I’m Mahdi Karimian, a passionate front-end developer
                            with two years of hands-on experience, specializing
                            in creating custom Shopify themes that combine
                            stunning design with optimized performance. I’m
                            dedicated to delivering fast, responsive, and
                            conversion-focused e-commerce experiences tailored
                            to each brand's unique needs. Whether you’re
                            launching a new store or revamping an existing one,
                            I believe every Shopify store should tell a
                            story—your story. My goal is to not only make your
                            online store look amazing but also ensure it
                            delivers results by creating seamless user
                            experiences.
                        </p>
                        <p>
                            I’ve had the opportunity to work on a wide range of
                            projects using technologies like React, TypeScript,
                            and Shopify, where I’ve honed my skills in building
                            responsive and user-friendly interfaces. My
                            experience spans small to medium-sized projects, and
                            I’ve always focused on ensuring that the end result
                            is both functional and visually appealing, no matter
                            the device or browser. Currently, I’m diving deeper
                            into React and exploring Next.js to further expand
                            my toolkit and tackle even more complex challenges.
                        </p>
                        <p>
                            For me, programming is more than just a
                            profession—it’s a passion and an endless learning
                            journey. I’m constantly exploring new techniques and
                            tools, and I thrive on the creativity and
                            problem-solving that comes with building web
                            experiences. Collaboration with teams and focusing
                            on clean, efficient code are central to how I
                            approach every project. Let’s work together to bring
                            your vision to life and create something truly
                            remarkable for your users!
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-24 flex flex-col justify-center items-center">
                <p className="text-left text-lg mb-12 lg:w-1/2">
                    This is my virtual business card. Please keep it handy and
                    feel free to contact me whenever you need any assistance or
                    wish to collaborate.
                </p>
                <img
                    className="max-w-md w-full"
                    src={visitCard}
                    alt="visit card"
                />
            </div>
        </section>
    );
};

export default About;
