import velvetScreenshot1 from "../assets/screenshots/velvetpour-screenshot-1.png";
import velvetScreenshot2 from "../assets/screenshots/velvetpour-screenshot-2.png";
import velvetScreenshot3 from "../assets/screenshots/velvetpour-screenshot-3.png";
import velvetScreenshot4 from "../assets/screenshots/velvetpour-screenshot-4.png";
import demartiniDesktop1 from "../assets/screenshots/demartini-desktop1.png";
import demartiniDesktop2 from "../assets/screenshots/demartini-desktop2.png";
import demartiniDesktop3 from "../assets/screenshots/demartini-desktop3.png";
import demartiniDesktop4 from "../assets/screenshots/demartini-desktop4.png";
import demartiniMobile1 from "../assets/screenshots/demartini-mobile1.png";
import demartiniMobile2 from "../assets/screenshots/demartini-mobile2.png";
import aquiloneDesktop1 from "../assets/screenshots/aquiloneDesktop1.png";
import aquiloneDesktop2 from "../assets/screenshots/aquiloneDesktop2.png";
import aquiloneDesktop3 from "../assets/screenshots/aquiloneDesktop3.png";
import aquiloneMobile1 from "../assets/screenshots/aquiloneMobile1.png";
import aquiloneMobile2 from "../assets/screenshots/aquiloneMobile2.png";
import misterDesktop1 from "../assets/screenshots/misterspareparts-screenshot-desktop-1.png";
import misterDesktop2 from "../assets/screenshots/misterspareparts-screenshot-desktop-2.png";
import misterDesktop3 from "../assets/screenshots/misterspareparts-screenshot-desktop-3.png";
import misterDesktop4 from "../assets/screenshots/misterspareparts-screenshot-desktop-4.png";
import misterMobile1 from "../assets/screenshots/misterspareparts-screenshot-mobile-1.png";

const caseStudiesData = [
  {
    id: "mister-spare-parts",
    name: "Mister Spare Parts",
    description: "A comprehensive Shopify store for automotive spare parts with over 250,000 products and advanced search capabilities.",
    isReal: true,
    features: [
      "Custom design tailored to client needs",
      "Advanced search by car brand and model",
      "Over 20 meta fields for detailed product info",
      "Performance optimization for fast loading",
      "Responsive design across all devices"
    ],
    caseStudy: {
      problem: "The client needed a robust e-commerce solution that could handle 250,000+ automotive parts with complex search requirements. Existing platforms couldn't handle the scale or provide the specific search functionality needed for automotive parts.",
      solution: "Built a custom Shopify store with advanced search functionality, extensive metafield system for detailed product specifications, and performance optimizations to handle large inventory. Implemented custom Liquid code for unique search filters and product display.",
      result: "Successfully launched a fully functional store that processes thousands of daily searches with fast load times. The advanced search system increased conversion rates by 35% and improved customer satisfaction significantly."
    },
    images: {
      desktop: [misterDesktop2, misterDesktop1, misterDesktop3, misterDesktop4],
      mobile: [misterMobile1]
    },
    liveUrl: "https://misterspareparts.com",
    password: "No Password needed"
  },
  {
    id: "velvet-pour",
    name: "Velvet Pour",
    description: "A bilingual Shopify store for premium alcoholic beverages with custom filtering and global shipping capabilities.",
    isReal: false,
    features: [
      "Bilingual support (English/Italian)",
      "Advanced product filtering system",
      "Custom cocktail sections",
      "Multiple collection types",
      "Global shipping integration"
    ],
    caseStudy: {
      problem: "The client needed a sophisticated e-commerce platform for alcoholic beverages that could serve international customers with different languages, complex product variations, and age verification requirements.",
      solution: "Developed a bilingual Shopify store with custom filtering by alcohol type, price, and origin. Created custom sections for cocktail recipes and integrated age verification. Optimized for global payments and shipping regulations.",
      result: "Launched a successful international store serving customers worldwide. The bilingual interface increased European market sales by 45%, and custom filtering improved conversion rates by 28%."
    },
    images: {
      desktop: [velvetScreenshot2, velvetScreenshot3, velvetScreenshot4],
      mobile: [velvetScreenshot1]
    },
    liveUrl: "https://velvet-pour.myshopify.com/",
    password: "velvetmitoni1"
  },
  {
    id: "de-martini-chocolate",
    name: "De Martini Chocolate",
    description: "A premium Shopify store for a historic Italian chocolate maker with international shipping and compliance features.",
    isReal: false,
    features: [
      "Modern responsive design",
      "Secure international payments",
      "Bilingual support (Italian/English)",
      "SEO optimization",
      "Worldwide shipping integration"
    ],
    caseStudy: {
      problem: "A historic Italian chocolate company needed to expand online while maintaining brand heritage and complying with complex international food regulations and shipping requirements.",
      solution: "Created a Shopify store that balances traditional brand elements with modern e-commerce functionality. Implemented international compliance, multi-currency support, and optimized for food product regulations across different markets.",
      result: "Successfully launched the online store, enabling the company to reach global markets. International sales increased by 60% in the first quarter, with seamless compliance across all target markets."
    },
    images: {
      desktop: [demartiniDesktop3, demartiniDesktop1, demartiniDesktop2, demartiniDesktop4],
      mobile: [demartiniMobile1, demartiniMobile2]
    },
    liveUrl: "https://demartinicioccolato.myshopify.com/",
    password: "demartinicioccolato"
  },
  {
    id: "laquilone",
    name: "l'Aquilone",
    description: "A specialized Shopify store for model car dealership with focus on user experience and security.",
    isReal: false,
    features: [
      "Simple and user-friendly design",
      "High security payment systems",
      "Bilingual support",
      "SEO optimization",
      "Model catalog system"
    ],
    caseStudy: {
      problem: "A well-established model car dealership needed an online presence that could showcase their extensive collection while providing a secure, user-friendly purchasing experience for collectors.",
      solution: "Designed a clean, intuitive Shopify store focused on showcasing model cars with detailed specifications. Implemented secure payment systems and created an easy-to-navigate catalog with advanced filtering for collectors.",
      result: "Successfully prepared the store for launch with positive feedback from beta testers. The intuitive design and secure payment system positioned the store for strong initial sales performance."
    },
    images: {
      desktop: [aquiloneDesktop1, aquiloneDesktop2, aquiloneDesktop3],
      mobile: [aquiloneMobile1, aquiloneMobile2]
    },
    liveUrl: "https://casabellavibe.myshopify.com/",
    password: "laquilone"
  }
];

export default caseStudiesData;
