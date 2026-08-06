import { useState, useEffect, useRef } from "react";
import siteConfig from "../../config/siteConfig";
import Button from "../ui/Button";
import Icon from "../ui/Icons";

export default function Navbar() {
  const { site, media } = siteConfig;
  const navLinks = site?.nav || [];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken dışarı tıklanınca kapat
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="/" className="logo" onClick={() => setOpen(false)}>
          {media?.logo ? (
            <img src={media.logo} alt={site?.name} />
          ) : (
            <span>{site?.name}</span>
          )}
        </a>

        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar-links-mobile-cta">
            <Button
              href="#contact"
              variant="primary"
              icon={<Icon name="quote" size={18} />}
              className="navbar-cta"
            >
              Teklif Al
            </Button>
          </div>
        </nav>

        <div className="navbar-actions">
          <Button
            href="#contact"
            variant="primary"
            icon={<Icon name="quote" size={18} />}
            className="navbar-cta"
          >
            Teklif Al
          </Button>

          <button
            ref={menuRef}
            className={`navbar-burger ${open ? "active" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
