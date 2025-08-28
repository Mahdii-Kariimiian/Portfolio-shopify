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
import misterDesktop1 from "../assets/screenshots/misterspareparts-screenshot-desktop-1.png"
import misterDesktop2 from "../assets/screenshots/misterspareparts-screenshot-desktop-2.png"
import misterDesktop3 from "../assets/screenshots/misterspareparts-screenshot-desktop-3.png"
import misterDesktop4 from "../assets/screenshots/misterspareparts-screenshot-desktop-4.png"
import misterMobile1 from "../assets/screenshots/misterspareparts-screenshot-mobile-1.png"

const pricingData = [
    {
        title: "Basic Plan",
        url: "basic",
        price: "$99",
        description: [
            "Pre-made template design",
            "Shopify store setup and installation",
            "Adding initial products (up to 15 products)",
            "Initial payment and shipping settings",
            "Basic training for using the admin panel",
        ],
    },
    {
        title: "Intermediate Plan",
        url: "intermediate",
        price: "$149",
        description: [
            "Custom template design or editing pre-made templates",
            "Adding up to 50 products",
            "Multi-language support",
            "Adding product pages and additional pages",
            "Installing Shopify apps and tools",
        ],
    },
    {
        title: "Advanced Plan",
        url: "advanced",
        price: "$199",
        description: [
            "Fully custom design from scratch",
            "Adding up to 200 products",
            "Customizing store pages and product pages",
            "Installing business-specific apps and tools",
            "Search Engine Optimization (SEO)",
        ],
    },
];

const projects = [
    {
        id: 3,
        name: "Velvet Pour",
        description:
            "A Shopify-powered online store for alcoholic beverages. The site features custom sections like cocktail introductions, and products are scraped for easy entry. The store allows purchases from anywhere in the world. It's bilingual, supporting both English and Italian. There are also multiple collections such as cocktails, Gins, Whiskeys and Special packages. Customers can filter products based on type, price, and other customizable filters. The store uses popular Shopify apps for seamless functionality, including:",

        bullet: [
            "Product Filtering: Allows customers to filter products based on type (e.g., cocktails, sparkling drinks, classic beverages), price range, alcohol content, and other customizable filters based on customer preferences.",
            "Inventory Management: To manage product availability and keep the store running smoothly.",
            "Customer Reviews: Enabling users to leave feedback on products to enhance social proof and customer confidence.",
            "Secure Payment Gateways: Ensuring safe and global transactions.",
            "Analytics Apps: Providing insights into store performance, sales, and customer behaviors.",
            "Multi-language Support: The store is bilingual, offering both Italian and English language options for a wider audience.",
        ],
        imagesType: {
            mobile: [velvetScreenshot1], 
            desktop: [velvetScreenshot2, velvetScreenshot3, velvetScreenshot4], 
        },
        liveLink: "https://velvet-pour.myshopify.com/",
        password: "velvetmitoni1",
    },
    // Add other projects here

    {
        id: 2,
        name: "De Martini Chocolate",
        description:
            "This website is currently being launched for a historic chocolate shop in Turin, Italy. With decades of experience in the chocolate-making industry, this brand offers its handmade, high-quality products to chocolate lovers around the globe. Currently, over 50 products are available on the site, with more new products coming soon.All processes, including ordering, purchasing, payment, and shipping, have been carefully designed and implemented according to Italian, European Union, and international regulations. As the developer, I’ve set up this structure to ensure a seamless and enjoyable shopping experience for users while complying with all necessary legal requirements.",
        bullet: [
            "Modern, responsive design for the best user experience",
            "Secure payment with international gateways",
            "Bilingual support for easier access",
            "Optimized SEO to improve visibility on search engines",
            "Worldwide shipping with reliable methods",
        ],
        imagesType: {
            mobile: [demartiniMobile1, demartiniMobile2],
            desktop: [
                demartiniDesktop3,
                demartiniDesktop1,
                demartiniDesktop2,
                demartiniDesktop4,
            ],
        },
        liveLink: "https://demartinicioccolato.myshopify.com/",
        password: "demartinicioccolato",
    },
    {
        id: 4,
        name: "l'Aquilone",
        description:
            "This website is for a well-established and reputable model car dealership in Turin with many years of experience. The site has basic features and is well-aligned with customer needs. It is currently in the preparation stages for launch for the store.",
        bullet: [
            "Simple and user-friendly design",
            "High security for payments",
            "Bilingual support for easier access",
            "SEO optimization for better visibility on search engines",
            "Ability to browse and select from different car models",
        ],
        imagesType: {
            mobile: [aquiloneMobile1, aquiloneMobile2],
            desktop: [aquiloneDesktop1, aquiloneDesktop2, aquiloneDesktop3],
        },
        liveLink: "https://casabellavibe.myshopify.com/",
        password: "laquilone",
    },
    {
        id: 1,
        name: "Mister Spare Parts",
        description:
            "This website was designed for a well-established and reputable company in the automotive spare parts industry and is currently active. The online store features over 250,000 products, and the design incorporates extensive customizations in the advanced search and product pages according to the client’s requirements. The site effectively showcases my skills in custom design, template development, and working with Liquid.",
        bullet: [
    "Custom design tailored to client needs",
    "Over 20 meta fields added to display detailed product information",
    "Advanced search section allowing users to find spare parts by car brand and model",
    "Optimized product pages for fast loading and smooth navigation",
    "Responsive design ensuring seamless experience across all devices",
],
        imagesType: {
            mobile: [misterMobile1],
            desktop: [misterDesktop1, misterDesktop2, misterDesktop3 , misterDesktop4],
        },
        liveLink: "https://misterspareparts.com",
        password: "No Password needed",
    },
];

export { projects, pricingData };
