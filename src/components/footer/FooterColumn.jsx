import FooterLink from "./FooterLink";

const FooterColumn = ({ title, children, className = "" }) => {
  return (
    <div className={className}>
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default FooterColumn;
