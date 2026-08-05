import siteConfig from "../../config/siteConfig";

export default function Footer({ data }) {
  if (!data) return null;

  const { company, media } = siteConfig;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marka / Hakkında */}
          <div className="footer-col footer-brand">
            <a href="/" className="footer-logo">
              {media.logo ? (
                <img src={media.logo} alt={data.company} />
              ) : (
                <span>{data.company}</span>
              )}
            </a>
            <p className="footer-slogan">{data.slogan}</p>
            <p className="footer-desc">{data.description}</p>
          </div>

          {/* Hızlı Linkler */}
          <div className="footer-col">
            <h4>Hızlı Linkler</h4>
            <ul className="footer-links">
              {data.quickLinks?.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="footer-col">
            <h4>Hizmetlerimiz</h4>
            <ul className="footer-links">
              {data.services?.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="footer-col">
            <h4>İletişim</h4>
            <ul className="footer-contact">
              <li>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{data.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
