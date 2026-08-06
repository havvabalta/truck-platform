import siteConfig from "../../config/siteConfig";
import Icon from "../ui/Icons";
import Button from "../ui/Button";

export default function Hero({ data }) {
  if (!data) return null;

  const heroImg = data.image || siteConfig.media?.heroImage || "hero.jpg";
  const company = siteConfig.company;
  const whatsappHref = `https://wa.me/${company?.whatsapp}`;
  const phoneHref = `tel:${company?.phone?.replace(/\s+/g, "")}`;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
<div className="hero-overlay" />
      <div className="hazard-strip hero-hazard-top" />
      <div className="hazard-strip hero-hazard-bottom" />

      <div className="container hero-content">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>

<div className="hero-buttons">
          {data.primaryButton && (
            <Button
              href={data.primaryButton.href}
              variant="primary"
              icon={<Icon name="quote" size={18} />}
            >
              {data.primaryButton.text}
            </Button>
          )}

          {company?.phone && (
            <a href={phoneHref} className="hero-phone-btn">
              <Icon name="phone" size={18} />
              <span>{company.phone}</span>
            </a>
          )}

          {company?.whatsapp && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <Icon name="whatsapp" size={18} />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
