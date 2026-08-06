import siteConfig from "../../config/siteConfig";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "../ui/Icons";

const styles = `
.floating-contact {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
}
.floating-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 999px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: width 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
  white-space: nowrap;
}
.floating-btn .floating-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  line-height: 0;
}
.floating-icon svg {
  display: block;
}
.floating-btn .floating-label {
  display: inline-block;
  max-width: 0;
  opacity: 0;
  padding-right: 0;
  overflow: hidden;
  font-size: 0.85rem;
  font-weight: 600;
  transition: max-width 0.3s ease, opacity 0.2s ease, padding 0.3s ease;
}
.floating-btn:hover {
  transform: translateY(-3px);
  width: auto;
  padding-right: 1.3rem;
}
.floating-btn:hover .floating-label {
  max-width: 220px;
  opacity: 1;
  padding-right: 1.3rem;
}
.floating-whatsapp {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
}
.floating-whatsapp:hover {
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5);
}
.floating-phone {
  background: linear-gradient(135deg, var(--primary-color, #f97316), #ea580c);
}
.floating-phone:hover {
  box-shadow: 0 12px 30px rgba(249, 115, 22, 0.5);
}
.floating-email {
  background: linear-gradient(135deg, #0f172a, #1e293b);
}
.floating-email:hover {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.5);
}
@media (max-width: 640px) {
  .floating-contact {
    bottom: 1rem;
    right: 1rem;
  }
}
`;

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
    <>
      <style>{styles}</style>
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
    </>
  );
}
