import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Icon from "../ui/Icons";
import siteConfig from "../../config/siteConfig";

export default function Contact({ data }) {
  if (!data) return null;

  const company = siteConfig.company;
  const whatsappHref = `https://wa.me/${company?.whatsapp}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader
          badge={data.badge || "İLETİŞİM"}
          title={data.title || "Teklif Talep Formu"}
          subtitle={data.subtitle || "Size hızlı dönüş yapalım."}
        />

        <div className="contact-grid">
          {/* Sol Taraf: İletişim Bilgileri Kartı */}
          <Card className="contact-info-card">
            <h3>İletişim Bilgilerimiz</h3>
            <p className="contact-desc">
              Hizmetlerimiz hakkında bilgi almak veya özel taşıma teklifi oluşturmak için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="contact-details">
              {data.phone && (
                <div className="contact-item">
                  <div className="contact-icon">
                    <Icon name="phone" size={20} />
                  </div>
                  <div>
                    <small>Telefon</small>
                    <strong>{data.phone}</strong>
                  </div>
                </div>
              )}

              {data.email && (
                <div className="contact-item">
                  <div className="contact-icon">
                    <Icon name="mail" size={20} />
                  </div>
                  <div>
                    <small>E-Posta</small>
                    <strong>{data.email}</strong>
                  </div>
                </div>
              )}

              {data.address && (
                <div className="contact-item">
                  <div className="contact-icon">
                    <Icon name="pin" size={20} />
                  </div>
                  <div>
                    <small>Adres</small>
                    <strong>{data.address}</strong>
                  </div>
                </div>
              )}
            </div>

        {company?.whatsapp && (
              <Button
                href={whatsappHref}
                variant="whatsapp"
                className="w-full"
                icon={<Icon name="whatsapp" />}
              >
                WhatsApp
              </Button>
            )}
          </Card>

          {/* Sağ Taraf: Form Kartı */}
          <Card className="contact-form-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Ad Soyad</label>
                <input type="text" placeholder="Örn: Burak Akyıldız" required />
              </div>

              <div className="form-group">
                <label>Telefon Numarası</label>
                <input type="tel" placeholder="05XX XXX XX XX" required />
              </div>

              <div className="form-group">
                <label>Detaylar / Mesajınız</label>
                <textarea rows="4" placeholder="Taşınacak yük, nereden nereye vs." required></textarea>
              </div>

<Button
                type="submit"
                variant="primary"
                icon={<Icon name="quote" size={18} />}
                className="w-full"
              >
                Teklif Al
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
