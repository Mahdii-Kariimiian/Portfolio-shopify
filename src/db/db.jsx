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
    price: "Starting from €990",
    shortDescription: "Clean, launch-ready Shopify store for small businesses",
    badge: "Best for starters",
    deliveryTime: "5–7 days",

    idealFor: [
      "Startups",
      "Small businesses",
      "Simple product stores"
    ],

    features: [
      "Full Shopify store setup and configuration",
      "Professional theme customization aligned with your brand",
      "Up to 15 products added",
      "Payment and shipping setup",
      "Clean homepage and navigation structure",
      "Mobile-friendly design",
      "Basic admin training"
    ],

    benefits: [
      "Launch your store quickly without unnecessary complexity",
      "Clean and structured foundation",
      "Ready for future growth"
    ],

    outcomes: [
      "A fully functional Shopify store",
      "A clean and professional design",
      "A store ready to start selling",
      "Confidence to manage your store"
    ],

    limitations: [
      "Up to 15 products",
      "Limited advanced features",
      "Up to 2 revisions",
      "Limited support after launch"
    ],

    featured: false,
  },

  {
    title: "Intermediate Plan",
    url: "intermediate",
    price: "Starting from €1490",
    shortDescription: "Flexible and scalable Shopify store for growing businesses",
    badge: "Most Popular",
    deliveryTime: "7–12 days",

    idealFor: [
      "Growing brands",
      "Stores with larger catalogs",
      "Businesses targeting international customers"
    ],

    features: [
      "Advanced Shopify setup and store structure",
      "Enhanced theme customization for flexibility",
      "Up to 50 products added",
      "Multi-currency setup",
      "Custom pages (About, Contact, Blog)",
      "Improved navigation and basic product filtering",
      "Integration of essential Shopify apps (reviews, email, SEO)",
      "Mobile-friendly optimized layout"
    ],

    benefits: [
      "More flexibility compared to the basic plan",
      "Built to support business growth",
      "Improved user experience for customers"
    ],

    outcomes: [
      "A scalable Shopify store ready for growth",
      "Improved user experience and navigation",
      "A store capable of handling larger product catalogs",
      "Better foundation for future optimization"
    ],

    limitations: [
      "Up to 50 products",
      "Advanced custom features may require additional cost",
      "Extended support not included"
    ],

    featured: true,
  },

  {
    title: "Advanced Plan",
    url: "advanced",
    price: "Custom Pricing",
    shortDescription: "Fully customized Shopify solution for serious businesses",
    badge: "Custom Solution",
    deliveryTime: "2–4 weeks",

    idealFor: [
      "Established brands",
      "High-volume stores",
      "Businesses requiring custom functionality"
    ],

    features: [
      "Fully custom Shopify store design from scratch",
      "Scalable architecture for large product catalogs",
      "Advanced customization of pages and user experience",
      "Integration of business-specific tools and automations",
      "Performance and speed optimization",
      "Advanced analytics and tracking setup",
      "Conversion-ready foundation"
    ],

    benefits: [
      "Fully tailored to your business needs",
      "Optimized for performance and scalability",
      "Built for serious growth and revenue"
    ],

    outcomes: [
      "A fully customized Shopify experience",
      "High-performance and scalable store architecture",
      "Advanced tracking and business insights",
      "A store optimized for long-term growth"
    ],

    limitations: [
      "Pricing depends on project scope",
      "Timeline varies based on complexity"
    ],

    featured: false,
  },
];

const projects = [
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
            desktop: [ misterDesktop2,misterDesktop1, misterDesktop3 , misterDesktop4],
        },
        liveLink: "https://misterspareparts.com",
        password: "No Password needed",
    },
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
    
];

const services = [
  {
  slug: "conversion-audit-strategy",

  hero: {
    title: "Conversion Audit & Strategy",
    subtitle: "Turn insights into a clear growth plan",
    ctaPrimary: "Get Free Audit"
  },

  problem: [
    "Traffic is not converting",
    "No clear optimization strategy",
    "Random changes with no results"
  ],

  solution: [
    "Deep conversion analysis",
    "User journey breakdown",
    "Prioritized testing plan",
    "Strategic roadmap"
  ],

  includes: [
    "Full funnel audit",
    "User behavior analysis",
    "A/B testing roadmap",
    "Conversion strategy document"
  ],

  process: [
    "Analyze data",
    "Find leaks",
    "Build strategy",
    "Prioritize actions"
  ],

  idealFor: [
    "Stores with stable traffic",
    "Scaling brands",
    "Businesses serious about CRO"
  ],

  faq: [
    {
      q: "Is this implementation or just strategy?",
      a: "This is strategy focused, implementation can be added later"
    }
  ],

  positioning: "Strategy before execution",

  finalCTA: {
    title: "Build your conversion strategy",
    button: "Get Free Audit"
  }
},{
  slug: "analytics-tracking-setup",

  hero: {
    title: "Analytics & Tracking Setup",
    subtitle: "Track what actually matters for growth",
    ctaPrimary: "Get Free Audit"
  },

  problem: [
    "You don’t trust your data",
    "Missing key conversion events",
    "No clear performance visibility"
  ],

  solution: [
    "Accurate tracking setup",
    "Event tracking",
    "Data validation",
    "Clear reporting structure"
  ],

  includes: [
    "GA4 setup",
    "Enhanced ecommerce tracking",
    "Custom event tracking",
    "Basic dashboard setup"
  ],

  process: [
    "Setup tracking",
    "Configure events",
    "Test accuracy",
    "Deliver tracking system"
  ],

  idealFor: [
    "All Shopify stores",
    "Marketing focused brands",
    "Data driven businesses"
  ],

  faq: [
    {
      q: "Will I see real data immediately?",
      a: "Yes, tracking starts immediately after setup"
    }
  ],

  positioning: "Better data = better decisions",

  finalCTA: {
    title: "Fix your tracking setup",
    button: "Get Free Audit"
  }
},{
  slug: "google-ads-setup-optimization",

  hero: {
    title: "Google Ads Setup & Optimization",
    subtitle: "Turn ad spend into profitable revenue",
    ctaPrimary: "Get Free Audit"
  },

  problem: [
    "Spending money without results",
    "Low ROAS",
    "Poor targeting and structure"
  ],

  solution: [
    "Campaign structure optimization",
    "Audience targeting",
    "Ad performance improvements",
    "Continuous optimization"
  ],

  includes: [
    "Campaign setup",
    "Keyword research",
    "Ad creation",
    "Conversion tracking setup"
  ],

  process: [
    "Research",
    "Setup campaigns",
    "Launch",
    "Optimize performance"
  ],

  idealFor: [
    "Stores ready to scale",
    "Businesses with budget",
    "Growth focused brands"
  ],

  faq: [
    {
      q: "Do you manage ads long term?",
      a: "Yes, ongoing optimization is available"
    }
  ],

  positioning: "Ads focused on profit, not clicks",

  finalCTA: {
    title: "Launch profitable campaigns",
    button: "Get Free Audit"
  }
},
  {
    slug: "shopify-store-development",

    hero: {
      title: "Build a Shopify Store That Converts",
      subtitle: "Conversion focused store built for growth",
      ctaPrimary: "Get Free Audit",
      ctaSecondary: "Start Your Store"
    },

    problem: [
      "Store looks good but doesn’t sell",
      "No structure or funnel",
      "Slow or poorly built theme"
    ],

    solution: [
      "Conversion focused layout",
      "Clean and fast development",
      "Mobile first design",
      "Product page structure"
    ],

    includes: [
      "Homepage structure",
      "Product page optimization",
      "Cart and checkout improvements",
      "Basic speed optimization",
      "Essential apps setup"
    ],

    process: [
      "Strategy",
      "Structure",
      "Build",
      "Launch"
    ],

    idealFor: [
      "New brands",
      "Businesses moving to Shopify",
      "Stores needing rebuild"
    ],

    faq: [
      {
        q: "How long does it take?",
        a: "Usually 7 to 12 days"
      },
      {
        q: "Do you offer CRO after?",
        a: "Yes, stores are built ready for CRO"
      }
    ],

    positioning: "Built with CRO in mind from day one",

    finalCTA: {
      title: "Start your Shopify store",
      button: "Get Free Audit"
    }
  },

  {
    slug: "cro-optimization",

    hero: {
      title: "Increase Conversion Rate Without More Traffic",
      subtitle: "Turn existing traffic into more revenue",
      ctaPrimary: "Get Free Audit"
    },

    problem: [
      "High traffic but low sales",
      "Low conversion rate",
      "Users drop before checkout"
    ],

    solution: [
      "Funnel analysis",
      "UX improvements",
      "A/B testing",
      "Data driven decisions"
    ],

    includes: [
      "Product page optimization",
      "Cart optimization",
      "Checkout improvements",
      "Heatmaps and session analysis"
    ],

    process: [
      "Audit",
      "Identify leaks",
      "Test",
      "Scale winners"
    ],

    idealFor: [
      "Stores with traffic",
      "Low conversion stores",
      "Scaling businesses"
    ],

    faq: [
      {
        q: "Do you guarantee results?",
        a: "Focus is on measurable improvement, not guesswork"
      }
    ],

    positioning: "Focused on revenue, not vanity metrics",

    finalCTA: {
      title: "Increase your store revenue",
      button: "Get Free Audit"
    }
  },

  {
    slug: "speed-optimization",

    hero: {
      title: "Make Your Shopify Store Fast",
      subtitle: "Speed that improves conversion and SEO",
      ctaPrimary: "Get Free Audit"
    },

    problem: [
      "Slow loading pages",
      "High bounce rate",
      "Poor mobile performance"
    ],

    solution: [
      "Code optimization",
      "Image optimization",
      "App cleanup",
      "Theme performance fixes"
    ],

    includes: [
      "Core Web Vitals improvement",
      "Lazy loading",
      "Script optimization",
      "Speed audit"
    ],

    process: [
      "Audit",
      "Fix bottlenecks",
      "Optimize assets",
      "Test performance"
    ],

    idealFor: [
      "Slow stores",
      "Mobile heavy traffic",
      "SEO focused stores"
    ],

    faq: [],

    positioning: "Speed directly impacts revenue",

    finalCTA: {
      title: "Speed up your store",
      button: "Get Free Audit"
    }
  },

  {
    slug: "email-marketing",

    hero: {
      title: "Set Up Email Marketing That Drives Sales",
      subtitle: "Automations that recover and increase revenue",
      ctaPrimary: "Get Free Audit"
    },

    problem: [
      "No email strategy",
      "Lost abandoned carts",
      "Low repeat purchases"
    ],

    solution: [
      "Flows setup",
      "Segmentation",
      "Campaign strategy",
      "Retention optimization"
    ],

    includes: [
      "Abandoned cart flow",
      "Welcome flow",
      "Post purchase flow",
      "Basic campaigns"
    ],

    process: [
      "Setup",
      "Automations",
      "Optimization"
    ],

    idealFor: [
      "Growing stores",
      "Stores with traffic",
      "Retention focused brands"
    ],

    faq: [],

    positioning: "Email is your highest ROI channel",

    finalCTA: {
      title: "Start email marketing",
      button: "Get Free Audit"
    }
  } ,
  {
  slug: "shopify-store-audit",

  hero: {
    title: "Comprehensive Shopify Store Audit",
    subtitle: "Discover exactly what's holding your store back",
    ctaPrimary: "Get Free Audit"
  },

  problem: [
    "You don’t know why sales are low",
    "No clear performance insights",
    "Hidden issues killing conversion"
  ],

  solution: [
    "Full store analysis",
    "Conversion bottleneck detection",
    "Performance review",
    "Actionable recommendations"
  ],

  includes: [
    "Homepage and product page review",
    "Conversion funnel analysis",
    "Speed and technical audit",
    "Revenue opportunity breakdown"
  ],

  process: [
    "Audit",
    "Analyze",
    "Identify issues",
    "Deliver report"
  ],

  idealFor: [
    "Existing Shopify stores",
    "Stores with traffic but low sales",
    "Businesses needing clarity"
  ],

  faq: [
    {
      q: "What will I receive?",
      a: "A clear report with prioritized action steps"
    }
  ],

  positioning: "Clarity before you invest in changes",

  finalCTA: {
    title: "Find out what’s blocking your growth",
    button: "Get Free Audit"
  }
}
];

export { projects, pricingData , services };
