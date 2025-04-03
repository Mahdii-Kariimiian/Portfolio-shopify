import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { HiArrowNarrowRight, HiEye, HiEyeOff } from "react-icons/hi";
import { projects } from "../db/db";

const Projects = ({ isDarkMode }) => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);
    const [viewMode, setViewMode] = useState("desktop");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);

    const handleViewChange = (mode) => {
        setViewMode(mode);
    };

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(selectedProject.password);
        setPasswordCopied(true);
        setTimeout(() => setPasswordCopied(false), 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container mx-auto py-10 md:px-10 px-4">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <p className="md:max-w-[700px] mt-8 mb-14 leading-7 text-lg max-md:text-center">
                This section highlights my expertise in building and designing
                high-performance Shopify stores. Each project reflects my
                commitment to delivering custom, user-friendly websites that are
                visually appealing and optimized for top performance. Explore my
                work and see how I can bring your vision to life.
            </p>

            {/* Tabs */}
            <div
                className={`flex space-x-4 p-2 rounded-lg ${
                    isDarkMode ? "shadow-lg text-white" : "text-black shadow-lg"
                }`}
            >
                {projects.map((project) => (
                    <button
                        key={project.id}
                        className={`px-4 py-2 rounded-lg transition duration-200 ${
                            selectedProject.id === project.id
                                ? "bg-darkGreen text-white"
                                : isDarkMode
                                ? "text-gray-300 hover:bg-gray-700"
                                : "bg-white text-gray-800 hover:bg-lightGreen"
                        }`}
                        onClick={() => setSelectedProject(project)}
                    >
                        {project.name}
                    </button>
                ))}
            </div>

            {/* Project Content */}
            <div className="mt-14 grid md:grid-cols-2 gap-8 items-start">
                {/* Project Info */}
                <div>
                    <h3 className="text-3xl font-bold">
                        {selectedProject.name}
                    </h3>
                    <p
                        className={`mt-4 text-lg ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        {selectedProject.description}
                    </p>

                    <ul className="ml-16 list-disc list-inside my-6 mt-8">
                        {selectedProject.bullet.map((item, index) => (
                            <li
                                className={`${
                                    isDarkMode
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                }`}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* View Live Button */}
                    <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center space-x-2 px-6 py-2 bg-darkGreen hover:bg-lightGreen text-white rounded-full transition duration-200"
                    >
                        <span>View Live</span>
                        <HiArrowNarrowRight />
                    </a>

                    {/* Password Section */}
                    <div className="mt-16">
                        <div className="mt-6 flex items-center">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                value={selectedProject.password}
                                readOnly
                                className={`mr-4 p-2 border rounded w-52 ${
                                    isDarkMode
                                        ? "bg-gray-700 border-gray-600 text-white"
                                        : "border-gray-300 text-gray-900"
                                }`}
                            />
                            <button
                                onClick={() =>
                                    setIsPasswordVisible(!isPasswordVisible)
                                }
                                className="p-2 bg-gray-300 rounded-full"
                            >
                                {isPasswordVisible ? (
                                    <HiEyeOff className="text-gray-600" />
                                ) : (
                                    <HiEye className="text-gray-600" />
                                )}
                            </button>
                            <button
                                onClick={handleCopyPassword}
                                className="ml-2 px-4 py-1 bg-transparent text-darkGreen rounded-full text-sm hover:bg-lightGreen hover:text-white transition"
                            >
                                {passwordCopied
                                    ? "Password Copied!"
                                    : "Copy Password"}
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            You need to enter this password to access the site.
                        </p>
                    </div>
                </div>

                {/* Image Gallery (Swiper) */}
                <div className="shadow-lg rounded-lg pb-4 overflow-hidden">
                    {/* Swiper for Desktop View */}
                    {viewMode === "desktop" && (
                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            direction="horizontal"
                            className="w-full h-[400px]"
                        >
                            {selectedProject.imagesType.desktop.map(
                                (img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            alt={`Project ${selectedProject.name}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    )}

                    {/* Swiper for Mobile View */}

                    {viewMode === "mobile" && (
                        <Swiper
                            pagination={{
                                clickable: true,
                                type: "bullets",
                                bulletClass: "swiper-pagination-bullet",
                                bulletActiveClass:
                                    "swiper-pagination-bullet-active",
                            }}
                            modules={[Pagination]}
                            direction="horizontal"
                            className="w-full h-[400px]"
                        >
                            {selectedProject.imagesType.mobile.map(
                                (img, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="flex items-center justify-center h-full"
                                    >
                                        <img
                                            src={img}
                                            alt={`Project ${selectedProject.name}`}
                                            className="object-contain h-full"
                                            style={{ margin: "0 auto" }} // Center the image in the container
                                        />
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    )}

                    {/* Buttons to switch views */}
                    <div className="mt-6 flex space-x-4 justify-center">
                        <button
                            onClick={() => handleViewChange("desktop")}
                            className={`px-3 py-1 text-sm rounded-lg transition duration-200 ${
                                viewMode === "desktop"
                                    ? "bg-darkGreen text-white"
                                    : isDarkMode
                                    ? "shadow-lg text-gray-300 hover:bg-gray-700"
                                    : "text-gray-800 hover:bg-lightGreen"
                            }`}
                        >
                            Desktop View
                        </button>
                        <button
                            onClick={() => handleViewChange("mobile")}
                            className={`px-3 py-1 text-sm rounded-lg transition duration-200 ${
                                viewMode === "mobile"
                                    ? "bg-darkGreen text-white"
                                    : isDarkMode
                                    ? "shadow-lg text-gray-300 hover:bg-gray-700"
                                    : "bg-white text-gray-800 hover:bg-lightGreen"
                            }`}
                        >
                            Mobile View
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
