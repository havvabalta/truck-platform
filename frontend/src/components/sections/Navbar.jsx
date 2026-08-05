import siteConfig from "../../config/siteConfig";
import Button from "../ui/Button";
import Icon from "../ui/Icons";

export default function Navbar() {
  const { site, media } = siteConfig;
  const navLinks = site?.nav || [];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="logo">
          {media?.logo ? (
            <img src={media.logo} alt={site?.name} />
          ) : (
            <span>{site?.name}</span>
          )}
        </a>

        {navLinks.length > 0 && (
          <nav className="navbar-links">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="navbar-actions">
          <Button
            href="#contact"
            variant="primary"
            icon={<Icon name="quote" size={18} />}
            className="navbar-cta"
          >
            Teklif Al
          </Button>
        </div>
      </div>
    </header>
  );
}
