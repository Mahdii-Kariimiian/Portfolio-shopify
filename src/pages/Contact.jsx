const Contact = ({ isDarkMode }) => {
    return (
        <section
            className={`w-full max-w-4xl mx-auto text-center p-8 ${
                isDarkMode
                    ? "bg-darkerGreen text-white"
                    : "bg-white text-gray-900"
            }`}
        >
            <h1
                className={`text-4xl font-bold mb-4 ${
                    isDarkMode ? "text-gray-200" : "text-gray-900"
                }`}
            >
                Contact Me
            </h1>
            <p
                className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
                Have any questions or business inquiries? Fill out the form
                below or reach me at <strong>mahdii.kariimiian@gmail.com</strong>
            </p>

            <form className="mt-6 flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className={`p-3 border rounded-md focus:ring-2 focus:ring-green-500 ${
                        isDarkMode
                            ? "bg-gray-500 border-gray-600 text-white placeholder-white"
                            : "border-gray-300 text-gray-900"
                    }`}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className={`p-3 border rounded-md focus:ring-2 focus:ring-green-500 ${
                        isDarkMode
                            ? "bg-gray-500 border-gray-600 text-white placeholder-white"
                            : "border-gray-300 text-gray-900"
                    }`}
                />
                <textarea
                    placeholder="Your Message"
                    rows="4"
                    className={`p-3 border rounded-md focus:ring-2 focus:ring-green-500 ${
                        isDarkMode
                            ? "bg-gray-500 border-gray-600 text-white placeholder-white"
                            : "border-gray-300 text-gray-900"
                    }`}
                />
                <button
                    type="submit"
                    className={`px-6 py-3 rounded-md transition duration-200 bg-darkGreen hover:bg-lightGreen text-white`}
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
