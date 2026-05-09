import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { services } from "../../db/db";
import FooterColumn from "./FooterColumn";
import FooterLink from "./FooterLink";
import SocialIcons from "./SocialIcons";

const Footer = ({ isDarkMode }) => {
  const { t, language } = useLanguage();

  // Shortened service titles for footer
  const shortenedServiceTitles = {
    "conversion-audit-strategy": {
      en: "Conversion Audit & Strategy",
      it: "Audit Conversione & Strategia",
      fa: "بررسی تبدیل و استراتژی"
    },
    "analytics-tracking-setup": {
      en: "Analytics & Tracking Setup",
      it: "Analytics & Tracciamento",
      fa: "آنالیز و ردیابی"
    },
    "google-ads-setup-optimization": {
      en: "Google Ads Setup",
      it: "Setup Google Ads",
      fa: "تنظیمات گوگل ادز"
    },
    "shopify-store-development": {
      en: "Build Shopify Store",
      it: "Crea Shopify Store",
      fa: "ساخت فروشگاه شاپیفای"
    },
    "cro-optimization": {
      en: "Increase Conversion Rate",
      it: "Aumenta Tasso Conversione",
      fa: "افزایش نرخ تبدیل"
    },
    "speed-optimization": {
      en: "Speed Optimization",
      it: "Ottimizzazione Velocità",
      fa: "بهینه‌سازی سرعت"
    },
    "email-marketing": {
      en: "Email Marketing Setup",
      it: "Setup Email Marketing",
      fa: "تنظیمات ایمیل مارکتینگ"
    },
    "shopify-store-audit": {
      en: "Shopify Store Audit",
      it: "Audit Shopify Store",
      fa: "بررسی فروشگاه شاپیفای"
    }
  };

  return (
    <footer className={`w-full py-12 md:px-10 px-4 mt-12 ${
      isDarkMode 
        ? "bg-dark-bg/90 text-dark-text-primary" 
        : "bg-white/80 text-black"
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand / About Column */}
          <FooterColumn title={t('footer.brand.name')} className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaShopify className="text-2xl text-green-700" />
                <div>
                  <div className="font-bold">{t('footer.brand.name')}</div>
                  <div className="text-sm opacity-80">{t('footer.brand.title')}</div>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? "text-dark-text-secondary" : "text-gray-600"
              }`}>
                {t('footer.brand.description')}
              </p>
              <Link
                to="/order"
                className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
              >
                {t('footer.brand.cta')}
              </Link>
            </div>
          </FooterColumn>

          {/* Quick Links Column */}
          <FooterColumn title={t('footer.quickLinks.title')}>
            <div className="flex flex-col gap-y-2">
              {Object.entries(t('footer.quickLinks.links')).map(([key, label]) => (
                <FooterLink key={key} href={`/${key === 'home' ? '' : key}`}>
                  {label}
                </FooterLink>
              ))}
            </div>
          </FooterColumn>

          {/* Services Column */}
          <FooterColumn title={t('footer.services.title')}>
            <div className="flex flex-col gap-y-2">
              {services.map((service) => {
                const titleMap = shortenedServiceTitles[service.slug];
                const shortTitle = titleMap ? titleMap[language] || titleMap.en : service.hero.title;
                
                return (
                  <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                    {shortTitle}
                  </FooterLink>
                );
              })}
            </div>
          </FooterColumn>

          {/* Get Started Column */}
          <FooterColumn title={t('footer.getStarted.title')}>
            <div className="flex flex-col gap-y-2">
              <FooterLink href="#final-cta">
                {t('footer.getStarted.links.audit')}
              </FooterLink>
              <FooterLink href="#" isExternal={true}>
                {t('footer.getStarted.links.call')}
              </FooterLink>
              <FooterLink href="/contact">
                {t('footer.getStarted.links.contact')}
              </FooterLink>
            </div>
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className={`border-t mb-6 ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className={`text-sm ${
            isDarkMode ? "text-dark-text-tertiary" : "text-gray-500"
          }`}>
            {t('footer.bottom.copyright')}
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
