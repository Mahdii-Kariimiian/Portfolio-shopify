import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    // Initialize EmailJS once on component mount
    useEffect(() => {
        emailjs.init( {
            publicKey: "mV9rGASfViXLoUkhx",
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await emailjs.send(
                "service_xm5pbcm",
                "template_bqcniev",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,


                    businessType: "not provided",
                    productsCount: "not provided",
                    dropshipping: "no",
                    multilingual: "no",
                    orderManagement: "no",
                }
            );

            if (response.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus(`error: ${response.text || 'Failed to send message'}`);
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const getInputClasses = () => {
        return `w-full p-4 rounded-2xl border focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
            isDarkMode
                ? "bg-dark-surface/60 border-dark-border/50 text-white placeholder-gray-400 hover:bg-dark-surface/80"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500 hover:bg-gray-50"
        }`;
    };

    const getButtonClasses = () => {
        return `w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 ${
            isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-600 text-white hover:shadow-lg"
        }`;
    };

    const getStatusClasses = (type) => {
        const baseClasses = "mt-4 p-4 rounded-2xl text-center";
        const typeClasses = {
            success: isDarkMode 
                ? "bg-green-700/20 text-green-400 border border-green-700/30"
                : "bg-green-50 text-green-600 border border-green-200",
            error: isDarkMode 
                ? "bg-red-700/20 text-red-400 border border-red-700/30"
                : "bg-red-50 text-red-600 border border-red-200"
        };
        return `${baseClasses} ${typeClasses[type]}`;
    };

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
                below or reach me at{" "}
                <strong>mahdii.kariimiian@gmail.com</strong>
            </p>

            {/* Contact Form */}
            <div className="mt-8 mx-auto max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className={getInputClasses()}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className={getInputClasses()}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            required
                            className={`${getInputClasses()} resize-none`}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={getButtonClasses()}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>

                    {submitStatus === 'success' && (
                        <div className={getStatusClasses('success')}>
                            <p className="font-medium">✅ Message sent successfully!</p>
                            <p className="text-sm mt-2">I'll get back to you within 24 hours.</p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className={getStatusClasses('error')}>
                            <p className="font-medium">❌ Failed to send message</p>
                            <p className="text-sm mt-2">Please try again or email me directly at mahdii.kariimiian@gmail.com</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
