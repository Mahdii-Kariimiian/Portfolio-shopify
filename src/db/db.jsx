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

const pricingData = [
    {
        title: "Basic Plan",
        url: "basic",
        price: "$99",
        description: [
            "Pre-made template design",
            "Shopify store setup and installation",
            "Adding initial products (less than 50 products)",
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
            "Adding 50 to 100 products",
            "Multi-language support",
            "Adding product pages and additional pages",
            "Installing Shopify apps and tools",
        ],
    },
    {
        title: "Advanced Plan",
        url: "advanced",
        price: "$199+",
        description: [
            "Fully custom design from scratch",
            "Adding more than 100 products",
            "Customizing store pages and product pages",
            "Installing business-specific apps and tools",
            "Search Engine Optimization (SEO)",
        ],
    },
];

const projects = [
    {
        id: 1,
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
            mobile: [velvetScreenshot1], // Insert relevant mobile screenshot here
            desktop: [velvetScreenshot2, velvetScreenshot3, velvetScreenshot4], // Insert relevant desktop screenshots here
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
                demartiniDesktop1,
                demartiniDesktop2,
                demartiniDesktop3,
                demartiniDesktop4,
            ],
        },
        liveLink: "https://demartinicioccolato.myshopify.com/",
        password: "demartinicioccolato",
    },
];

export { projects, pricingData };
