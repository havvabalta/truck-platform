import siteConfig from "../../config/siteConfig";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "../ui/Icons";

export default function FloatingContact() {
  const { company } = siteConfig;
  if (!company) return null;

  const items = [];

  if (company.whatsapp) {
    items.push({
      key: "whatsapp",
      href: `https://wa.me/${company.whatsapp}`,
      label: "WhatsApp",
      icon: <WhatsAppIcon size={22} />,
      cls: "floating-whatsapp",
      target: "_blank",
      rel: "noopener noreferrer",
    });
  }

  if (company.phone) {
    items.push({
      key: "phone",
      href: `tel:${company.phone.replace(/\s+/g, "")}`,
      label: company.phone,
      icon: <PhoneIcon size={20} />,
      cls: "floating-phone",
    });
  }

  if (company.email) {
    items.push({
      key: "email",
      href: `mailto:${company.email}`,
      label: company.email,
      icon: <MailIcon size={20} />,
      cls: "floating-email",
    });
  }

  return (
    <div className="floating-contact">
      {items.map((it) => (
        <a
          key={it.key}
          href={it.href}
          className={`floating-btn ${it.cls}`}
          target={it.target}
          rel={it.rel}
          aria-label={it.label}
        >
          <span className="floating-icon">{it.icon}</span>
          <span className="floating-label">{it.label}</span>
        </a>
      ))}
    </div>
  );
}
