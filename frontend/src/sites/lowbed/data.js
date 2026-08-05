// sites/lowbed/data.js
// Lowbed / ağır nakliye sitesine ait TÜM içerik.
import heroImage from "../../assets/images/hero.jpg";
import logo from "../../assets/icons/logo.png";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";

const data = {
  site: {
    name: "Atlas Hafriyat & Ağır Nakliyat",
    slogan: "Ağır Yük ve Proje Taşımacılığı",
    industry: "heavy-hauling",
    domain: "atlashafriyat.com",
    nav: [
      { label: "Hizmetler", href: "#services" },
      { label: "Avantajlar", href: "#features" },
      { label: "Filo", href: "#fleet" },
      { label: "Süreç", href: "#process" },
      { label: "İletişim", href: "#contact" },
    ],
  },

  media: {
    logo: logo,
    favicon: "/images/favicon.ico",
    heroImage: heroImage,
    aboutImage: gallery2,
    gallery: [
      { src: gallery1, title: "Lowbed operasyonu" },
      { src: gallery2, title: "İş makinesi nakliyesi" },
      { src: gallery3, title: "Proje taşımacılığı" },
    ],
  },

  company: {
    phone: "0555 000 00 00",
    whatsapp: "905550000000",
    email: "info@atlashafriyat.com",
    address: "İstanbul",
    foundedYear: "2010",
  },

  hero: {
    badge: "🚜 Ağır Nakliyat & Lowbed Hizmetleri",
    title: "İş Makinesi ve Gabari Dışı Ağır Yük Taşımacılığı",
    subtitle:
      "Teleskobik Lowbed ve uzamalı dorselerimizle tonajlı yüklerinizi, ekskavatör ve şantiye ekipmanlarınızı güvenle taşıyoruz.",
    primaryButton: {
      text: "Hemen Teklif Al",
      href: "#contact",
    },
    secondaryButton: {
      text: "WhatsApp",
      href: "https://wa.me/905550000000",
    },
  },

  stats: {
    title: "Rakamlarla Saha Gücümüz",
    items: [
      { value: "2500+", label: "Proje Taşıma" },
      { value: "45", label: "Lowbed & Cekici" },
      { value: "150 Ton", label: "Max Tonaj Kapasitesi" },
      { value: "15+", label: "Yıl Deneyim" },
    ],
  },

  services: {
    badge: "Hizmetlerimiz",
    title: "Ağır Nakliye Çözümlerimiz",
    subtitle: "Gabari dışı ve yüksek tonajlı yükleriniz için özel ekipmanlar.",
    items: [
      {
        icon: "🚜",
        title: "İş Makinesi Taşımacılığı",
        description:
          "Ekskavatör, loder, dozer ve silindirlerin şantiyeler arası güvenli sevkiyatı.",
        image: gallery1,
      },
      {
        icon: "🚛",
        title: "Teleskobik Lowbed Kiralama",
        description:
          "Uzayabilir ve havuzlu dorseler ile gabari dışı uzun yüklerin taşınması.",
        image: gallery2,
      },
      {
        icon: "🏗️",
        title: "Şantiye & Proje Taşımacılığı",
        description:
          "Fabrika kurulumu, kule vinç ve ağır sanayi parçalarının nakliyesi.",
        image: gallery3,
      },
      {
        icon: "⚓",
        title: "Liman & Rüzgar Tribünü Nakliyesi",
        description:
          "Gemi yükleri, kanat ve ağır jeneratörlerin özel izinli taşınması.",
        image: heroImage,
      },
    ],
  },

  features: {
    badge: "Güvencemiz",
    title: "Neden Atlas Hafriyat?",
    subtitle: "Ağır yük operasyonlarında risk sıfır, güvenlik maksimum.",
    items: [
      {
        icon: "🛡️",
        title: "Yüksek Teminatlı Emtia Sigortası",
        description:
          "Milyonluk iş makineleriniz ve yükleriniz tam kapsamlı sigortalanır.",
      },
      {
        icon: "📜",
        title: "Yasal İzin ve Pilot Araç Desteği",
        description:
          "Karayolu gabari dışı taşıma izinleri tarafımızca eksiksiz yönetilir.",
      },
      {
        icon: "🔧",
        title: "Sertifikalı ve Uzman Sürücüler",
        description:
          "Ağır tonaj ve hidrolik dorse kullanımı konusunda eğitimli profesyonel kadro.",
      },
    ],
  },

  fleet: {
    badge: "Güçlü Filomuz",
    title: "Lowbed ve Dorse Filomuz",
    subtitle: "Farklı tonaj ve ölçülerdeki tüm yükler için geniş araç parkuru.",
    items: [
      {
        title: "3-4 Dingilli Standard Lowbed",
        capacity: "45 Ton",
        payload: "İş Makineleri & Traktörler",
      },
      {
        title: "5-8 Dingilli Hidrolik / Uzamalı Lowbed",
        capacity: "90 Ton",
        payload: "Gabari Dışı Uzun ve Ağır Yükler",
      },
      {
        title: "Heavy-Duty Modüler Platform (SPMT)",
        capacity: "150+ Ton",
        payload: "Endüstriyel Tesis & Proje Taşımacılığı",
      },
    ],
  },

  process: {
    badge: "Operasyon",
    title: "Ağır Taşımacılık Süreci",
    subtitle: "Planlamadan teslimata 4 adımda emniyetli operasyon.",
    items: [
      {
        step: "01",
        title: "Ekspertiz ve Yük İncelemesi",
        description:
          "Yükün ağırlığı, ölçüleri ve merkez noktası tespit edilir.",
      },
      {
        step: "02",
        title: "Rota & İzin Planlaması",
        description:
          "Karayolları rotası ve köprü/tünel yükseklik izinleri alınır.",
      },
      {
        step: "03",
        title: "Sabitleme & Bağlama (Lashing)",
        description: "Yük hidrolik dorseye yüksek standartlarda sabitlenir.",
      },
      {
        step: "04",
        title: "Eskortlu Güvenli Teslimat",
        description: "Öncü pilot araçlar eşliğinde adrese teslimat yapılır.",
      },
    ],
  },

  testimonials: {
    badge: "Müşteri Yorumları",
    title: "Saha Deneyimleri",
    subtitle: "Bizi tercih eden inşaat ve sanayi firmaları.",
    items: [
      {
        rating: 5,
        name: "Ahmet Y.",
        company: "Yılmaz İnşaat & Taahhüt",
        comment:
          "30 tonluk ekskavatörümüzü zorlu şantiye sahasına zamanında ve çiziksiz ulaştırdılar.",
      },
      {
        rating: 5,
        name: "Serkan B.",
        company: "Tekno Madencilik",
        comment:
          "Şehirler arası Lowbed kiralama ihtiyacımızda yasal izinlerden eskort hizmetine kadar mükemmel yönettiler.",
      },
    ],
  },

  coverage: {
    badge: "Servis Ağı",
    title: "Hizmet Bölgelerimiz",
    subtitle: "Türkiye geneli ve liman bağlantılı ağır nakliyat hizmeti.",
    items: [
      { city: "Marmara Bölgesi (İstanbul, Kocaeli, Bursa)" },
      { city: "İç Anadolu & Ege Sanayi Hatları" },
      { city: "Türkiye Geneli Proje & Liman Taşımacılığı" },
    ],
  },

  faq: {
    badge: "SSS",
    title: "Ağır Nakliyat Sıkça Sorulan Sorular",
    subtitle:
      "Lowbed ve gabari dışı taşımacılık hakkında bilmek istedikleriniz.",
    items: [
      {
        question: "Lowbed nakliye fiyatları nasıl hesaplanır?",
        answer:
          "Taşınacak yükün ağırlığı, en/boy/yükseklik ölçüleri, mesafe ve gerekli eskort/izin giderlerine göre özel hesaplanır.",
      },
      {
        question: "Gabari dışı taşıma iznini kim alıyor?",
        answer:
          "Karayolları Genel Müdürlüğü ve Emniyet birimlerinden gerekli tüm izin belgeleri ve eskort organizasyonu firmamızca sağlanır.",
      },
      {
        question: "Hangi tona kadar taşıma yapabiliyorsunuz?",
        answer:
          "Modüler hidrolik Lowbed dorselerimiz ile 150 tona kadar olan tek parça veya proje yüklerini taşıyabiliyoruz.",
      },
    ],
  },

  contact: {
    badge: "İletişim",
    title: "Lowbed & Nakliye Fiyat Teklifi Alın",
    subtitle:
      "Ağır yükünüzün detaylarını paylaşın, en uygun araç ve rotayı hemen planlayalım.",
    desc: "Ağır nakliyat ve lowbed kiralama talepleriniz için formu doldurun, uzman ekibimiz en kısa sürede dönüş yapsın.",
    phone: "0555 000 00 00",
    whatsapp: "905550000000",
    email: "info@atlashafriyat.com",
    address: "İstanbul",
  },

  cta: {
    title: "Ağır Yükünüz İçin Hemen Teklif Alın",
    subtitle:
      "Lowbed ve ağır nakliye ihtiyaçlarınız için uzman ekibimiz sizinle hızlıca iletişime geçsin.",
    buttonText: "Teklif İste",
  },

  footer: {
    company: "Atlas Hafriyat & Ağır Nakliyat",
    slogan: "Ağır Yük ve Proje Taşımacılığı",
    description:
      "Teleskobik lowbed ve modüler platformlarımızla Türkiye genelinde ağır ve gabari dışı yük taşımacılığı.",
    quickLinks: [
      { label: "Hizmetler", href: "#services" },
      { label: "Avantajlar", href: "#features" },
      { label: "Araç Filomuz", href: "#fleet" },
      { label: "Süreç", href: "#process" },
      { label: "İletişim", href: "#contact" },
    ],
    services: [
      "İş Makinesi Taşımacılığı",
      "Teleskobik Lowbed Kiralama",
      "Şantiye & Proje Taşımacılığı",
      "Liman & Rüzgar Tribünü Nakliyesi",
      "Özel Yol İzin & Esort Hizmeti",
    ],
    copyright: "© 2026 Atlas Hafriyat. Tüm hakları saklıdır.",
  },
};

export default data;
