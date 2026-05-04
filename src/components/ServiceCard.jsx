import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { services } from "../db/db";

const ServiceCard = ({ service, index, isDarkMode }) => {
    // Map service titles to slugs from services array in db
    const getServiceSlug = (title) => {
        const titleToSlugMap = {
            "Shopify Store Development": "shopify-store-development",
            "CRO Optimization": "cro-optimization", 
            "Speed Optimization": "speed-optimization",
            "Email Marketing Setup": "email-marketing",
            "Shopify Store Audit": "shopify-store-audit",
            "Conversion Audit & Strategy": "conversion-audit-strategy",
            "Analytics & Tracking Setup": "analytics-tracking-setup",
            "Google Ads Setup & Optimization": "google-ads-setup-optimization"
        };
        
        return titleToSlugMap[title] || 'shopify-store-development';
    };

    // Different icons for different services
    const getIcon = (index) => {
        const icons = [
            // 0: Shopify Store Development
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-9 5h9" />
            </svg>,
            // 1: CRO Optimization
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>,
            // 2: Speed Optimization
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>,
            // 3: Email Marketing Setup
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
            // 4: Shopify Store Audit
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            // 5: Conversion Audit & Strategy
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>,
            // 6: Analytics & Tracking Setup
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>,
            // 7: Google Ads Setup & Optimization
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>,
        ];
        return icons[index] || icons[0];
    };

    return (
        <div
            className={`group relative p-4 rounded-3xl transition-all duration-300 hover:scale-[1.02] cursor-default h-full flex flex-col justify-between ${
                service.featured
                    ? (isDarkMode
                        ? "bg-green-700/10 hover:bg-green-700/20 border-2 border-green-700/30 hover:border-green-700/50"
                        : "bg-green-50/50 hover:bg-green-50/70 border-2 border-green-200 hover:border-green-300")
                    : (isDarkMode
                        ? "bg-dark-surface/60 hover:bg-dark-surface/90 border border-dark-border/50 hover:border-green-700/40"
                        : "bg-white/90 hover:bg-white border border-gray-200/60 hover:border-green-700/40 backdrop-blur-sm")
            }`}
        >
            {/* Icon in soft circle */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 transition-all duration-300 ${
                isDarkMode
                    ? "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-110"
                    : "bg-green-700/10 text-green-700 group-hover:bg-green-700/20 group-hover:scale-110"
            }`}>
                {getIcon(index)}
            </div>

            {/* Title */}
            <h3 className={`text-lg font-medium mb-3 transition-colors duration-300 ${
                isDarkMode
                    ? "text-white group-hover:text-green-700"
                    : "text-gray-900 group-hover:text-green-700"
            }`}>
                {service.title}
            </h3>

            {/* Description */}
            <p className={`text-base leading-relaxed mb-5 ${
                isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
            }`}>
                {service.description}
            </p>

            {/* CTA button with text */}
            <Link 
                to={`/services/${getServiceSlug(service.title)}`}
                className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    service.featured
                        ? (isDarkMode
                            ? "bg-green-700 text-white hover:bg-green-600"
                            : "bg-green-700 text-white hover:bg-green-600")
                        : (isDarkMode
                            ? "bg-green-700/20 text-green-700 hover:bg-green-700/30"
                            : "bg-green-700/10 text-green-700 hover:bg-green-700/20")
                }`}
            >
                {service.cta || "View Details"}
            </Link>

            {/* Subtle gradient overlay on hover */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isDarkMode
                    ? "bg-gradient-to-br from-green-700/5 to-transparent"
                    : "bg-gradient-to-br from-green-700/5 to-transparent"
            }`} />
        </div>
    );
};

export default ServiceCard;
