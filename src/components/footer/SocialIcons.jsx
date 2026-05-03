import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialIcons = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mahdiikariimiian",
      size: 20
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Mahdii-Kariimiian",
      size: 20
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/mahdii.kariimiian?igsh=aHBvNHBmeTlxaGFx",
      size: 20
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-current hover:text-green-700 transition-colors duration-200"
            aria-label={social.name}
          >
            <Icon size={social.size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
