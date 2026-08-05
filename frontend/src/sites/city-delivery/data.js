// sites/city-delivery/data.js
// Bu siteye (city-delivery) ait TÜM içerik. URL'ler, görseller, metinler burada.
// Tasarım (templates) bu veriyi tüketir. Veriyi değiştir → içerik değişir.
import heroImage from "../../assets/images/hero.jpg";
import logo from "../../assets/icons/logo.png";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";

const data = {
  site: {
    name: "Atlas Dağıtım",

    slogan: "Şehir İçi Hızlı Nakliye",

    industry: "city-delivery",

    domain: "atlasdagitim.com",

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

    aboutImage: "/images/about.jpg",

    gallery: [
      { src: gallery3, title: "Paletli ürün sevkiyatı" },
      { src: gallery1, title: "Şehiriçi teslimat" },
      { src: gallery4, title: "Parça eşya taşıma" },
      { src: gallery2, title: "Ofis taşıma" },
    ],
  },

  company: {
    phone: "0555 000 00 00",

    whatsapp: "905550000000",

    email: "info@atlasdagitim.com",

    address: "İkitelli OSB, İstanbul",

    foundedYear: "2010",
  },

  hero: {
    badge: "🚚 İstanbul Şehir İçi Nakliye",

    title: "Şehir İçi Hızlı ve Güvenilir Taşımacılık",

    subtitle:
      "Parça eşya, ofis taşıma ve kurumsal dağıtım hizmetlerinde profesyonel çözümler sunuyoruz. 15 yılı aşkın deneyimle yükünüzü zamanında ve güvenle teslim ediyoruz.",

    primaryButton: {
      text: "Teklif Al",
      href: "#contact",
    },

    secondaryButton: {
      text: "WhatsApp",
      href: "https://wa.me/905550000000",
    },
  },

  stats: {
    title: "Rakamlarla Biz",

    items: [
      { value: "1200+", label: "Teslimat" },
      { value: "35", label: "Araç" },
      { value: "%98", label: "Memnuniyet" },
      { value: "15+", label: "Yıl Deneyim" },
    ],
  },

  services: {
    badge: "Hizmetler",

    title: "Taşımacılık Çözümlerimiz",

    items: [
      {
        title: "Parça Eşya Taşıma",
        description:
          "Az hacimli yüklerin ekonomik ve güvenli şekilde şehir içi taşınması. Küçük paketlerden paletli ürünlere kadar geniş hizmet yelpazesi.",
        image: gallery4,
      },
      {
        title: "Ofis Taşımacılığı",
        description:
          "Kurumsal taşınmalarda profesyonel süreç yönetimi. Demontaj, paketleme ve montaj dahil anahtar teslim ofis taşıma çözümleri.",
        image: gallery2,
      },
      {
        title: "Paletli Ürün Dağıtımı",
        description:
          "Depodan mağazaya güvenli ve planlı sevkiyat. Stok ve envanter takibi ile birlikte kurumsal dağıtım ağı.",
        image: gallery3,
      },
      {
        title: "Aynı Gün Teslimat",
        description:
          "Acil gönderiler için hızlı lojistik desteği. İstanbul genelinde aynı gün teslimat garantisi.",
        image: gallery1,
      },
    ],
  },

  features: {
    badge: "Avantajlarımız",

    title: "Neden Bizi Tercih Etmelisiniz?",

    subtitle: "Kaliteli ve güvenilir taşımacılık hizmeti.",

    items: [
      {
        icon: "🛡️",
        title: "Sigortalı Taşıma",
        description: "Tüm yükleriniz taşıma sigortası güvencesi altındadır.",
      },
      {
        icon: "📍",
        title: "GPS Takibi",
        description: "Araçlarınızı ve yüklerinizi anlık olarak takip edin.",
      },
      {
        icon: "☎️",
        title: "7/24 Destek",
        description: "Operasyon boyunca kesintisiz iletişim desteği.",
      },
      {
        icon: "📄",
        title: "Kurumsal Fatura",
        description: "Resmi ve kurumsal fatura ile şeffaf hizmet.",
      },
    ],
  },

  fleet: {
    badge: "Araç Filosu",

    title: "Filomuz",

    subtitle: "Her yük için uygun araç seçenekleri.",

    items: [
      {
        title: "Ford Transit Panelvan",
        capacity: "15 m³",
        payload: "1500 Kg",
        description: "Küçük hacimli eşya ve ofis taşımaları için ideal.",
      },
      {
        title: "Fiat Ducato Kamyonet",
        capacity: "22 m³",
        payload: "3500 Kg",
        description: "Orta hacimli yükler için geniş kasa imkanı.",
      },
      {
        title: "Kapalı Kasa Kamyon",
        capacity: "35 m³",
        payload: "7000 Kg",
        description: "Paletli ve kurumsal dağıtımlar için yüksek kapasite.",
      },
      {
        title: "Isı Yalıtımlı Araç",
        capacity: "30 m³",
        payload: "5000 Kg",
        description: "Sıcaklık hassasiyeti gerektiren ürünler için.",
      },
    ],
  },

  process: {
    badge: "Süreç",

    title: "Nasıl Çalışıyoruz?",

    subtitle: "4 adımda profesyonel taşımacılık.",

    items: [
      {
        step: "01",
        title: "Teklif Talebi",
        description:
          "Bilgilerinizi alıyor, size özel fiyat teklifi oluşturuyoruz.",
      },
      {
        step: "02",
        title: "Planlama",
        description: "Yükünüze uygun araç ve en uygun rota belirlenir.",
      },
      {
        step: "03",
        title: "Yükleme",
        description: "Ürünleriniz uzman ekip tarafından güvenle yüklenir.",
      },
      {
        step: "04",
        title: "Teslimat",
        description: "Yükünüz zamanında ve eksiksiz teslim edilir.",
      },
    ],
  },

  testimonials: {
    badge: "Referanslar",

    title: "Müşterilerimiz Ne Diyor?",

    subtitle: "Gerçek müşteri deneyimleri.",

    items: [
      {
        rating: 5,
        name: "Mehmet K.",
        company: "ABC Mobilya",
        comment:
          "Tam zamanında teslimat yaptılar. Eşyalarımız kusursuz ulaştı.",
      },
      {
        rating: 5,
        name: "Ayşe T.",
        company: "XYZ Lojistik",
        comment:
          "Kurumsal sevkiyatlarımız sorunsuz ilerliyor. Çok profesyoneller.",
      },
      {
        rating: 4,
        name: "Burak D.",
        company: "OfficePlus",
        comment: "Ofis taşımamızı bir günde eksiksiz tamamladılar.",
      },
      {
        rating: 5,
        name: "Elif S.",
        company: "Home Decor",
        comment:
          "Fiyat/performans olarak en iyisini buldum. Gönül rahatlığıyla öneririm.",
      },
    ],
  },

  coverage: {
    badge: "Hizmet Bölgeleri",

    title: "Nerelerde Hizmet Veriyoruz?",

    subtitle: "İstanbul ve çevre illerde geniş hizmet ağı.",

    items: [
      { city: "İstanbul" },
      { city: "Kocaeli" },
      { city: "Tekirdağ" },
      { city: "Sakarya" },
      { city: "Bursa" },
      { city: "Yalova" },
    ],
  },

  faq: {
    badge: "SSS",

    title: "Sıkça Sorulan Sorular",

    subtitle: "Merak edilen soruların cevapları.",

    items: [
      {
        question: "Nakliye fiyatları nasıl belirleniyor?",
        answer:
          "Fiyatlar; mesafe, yük hacmi, ağırlık ve hizmet türüne göre hesaplanır. Size özel teklif için bizimle iletişime geçebilirsiniz.",
      },
      {
        question: "Sigortalı taşıma yapıyor musunuz?",
        answer:
          "Evet, tüm taşımalarınız sigorta güvencesi altındadır. İsteğe bağlı olarak ürün başına özel sigorta da yapabilmekteyiz.",
      },
      {
        question: "Aynı gün teslimat mümkün mü?",
        answer:
          "Uygun operasyon planında ve mesafe dahilinde aynı gün teslimat yapabiliyoruz. Acil gönderileriniz için bizi arayın.",
      },
    ],
  },

  contact: {
    badge: "İletişim",

    title: "Teklif Talep Formu",

    subtitle: "Size hızlı dönüş yapalım.",

    desc: "Hizmetlerimiz hakkında bilgi almak veya özel taşıma teklifi oluşturmak için formu doldurmanız yeterli. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.",

    phone: "0555 000 00 00",

    whatsapp: "905550000000",

    email: "info@atlasdagitim.com",

    address: "İkitelli OSB, İstanbul",
  },


  footer: {
    company: "Atlas Dağıtım",
    slogan: "Şehir İçi Hızlı ve Güvenilir Taşımacılık",
    description:
      "İstanbul merkezli profesyonel şehir içi nakliye ve dağıtım çözümleri. 15+ yıllık deneyimle yükünüzü güvenle taşıyoruz.",
    quickLinks: [
      { label: "Hizmetler", href: "#services" },
      { label: "Avantajlar", href: "#features" },
      { label: "Araç Filomuz", href: "#fleet" },
      { label: "Galeri", href: "#gallery" },
      { label: "Sıkça Sorulan Sorular", href: "#faq" },
      { label: "İletişim", href: "#contact" },
    ],
    services: [
      "Parça Eşya Taşıma",
      "Ofis Taşımacılığı",
      "Paletli Ürün Dağıtımı",
      "Aynı Gün Teslimat",
      "Depo Transferi",
      "Kurumsal Dağıtım",
    ],
    copyright: "© 2026 Atlas Dağıtım. Tüm hakları saklıdır.",
  },
};

export default data;
