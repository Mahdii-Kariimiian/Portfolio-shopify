import { Link } from "react-router-dom";

const FooterLink = ({ href, children, isExternal = false, className = "" }) => {

  const linkProps = {
    className: `transition-colors duration-200 hover:text-green-700 ${className}`,
    ...(isExternal ? {
      href,
      target: "_blank",
      rel: "noopener noreferrer"
    } : {
      to: href,
      ...(href.startsWith('#') ? {} : { onClick: () => window.scrollTo(0, 0) })
    })
  };

  const LinkComponent = isExternal ? 'a' : Link;

  return (
    <LinkComponent {...linkProps}>
      {children}
    </LinkComponent>
  );
};

export default FooterLink;
