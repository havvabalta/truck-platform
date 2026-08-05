# Architecture — "Fabrika" Mimarisi

## Amaç

Bu proje, farklı taşımacılık türleri için yeniden kullanılabilir bir React web sitesi **fabrikasıdır**.

Amaç; yeni bir müşteri veya taşımacılık türü geldiğinde **kod yazmadan** yalnızca bir site klasörü doldurarak yeni bir site üretebilmektir.

> **Fabrika mantığı:** Tasarım (components + stiller) bir kez yazılır ve **her site için aynı kalır**. Yalnızca aktif sitenin `data.js` + `theme.js` + `theme.css` + `assets/` değiştirilir. Böylece her müşteri farklı içerik ve renk/tema ile, ~30 dakikada hazır siteye kavuşur.

---

## Temel Yaklaşım

Proje üç ana katmandan oluşur:

1. **Tasarım (components + styles)** — tüm siteler için ortak, bir kez yazılır.
2. **Site paketleri (src/sites/<site>/)** — her müşteri kendi klasöründe `data.js`, `theme.js`, `theme.css`, `assets/` barındırır.
3. **Seçici (config/siteConfig.js)** — hangi sitenin aktif olduğunu belirler.

```txt
Site Seçimi (siteConfig.js)
   ↓ Aktif siteyi seçer
Data (sites/<site>/data.js)  +  Tema (theme.js / theme.css)
   ↓ packageConfig üzerinden yayılır
Home (pages/Home.jsx)
   ↓
Sections (components/sections)
   ↓
UI Components (components/ui)
```

---

## Klasör Yapısı

```txt
src
│
├── components            # TASARIM (tüm siteler için ortak)
│   ├── sections          # Navbar, Hero, Stats, Services, ...
│   └── ui                # Button, Card, Badge, Container, ...
│
├── styles                # global.css + variables.css (varsayılanlar)
│
├── sites                 # SİTE PAKETLERİ (her müşteri bir klasör)
│   ├── city-delivery/
│   │   ├── data.js       # içerik (başlık, hizmetler, iletişim vb.)
│   │   ├── theme.js      # renkler, font, borderRadius (JS ile CSS değişkeni)
│   │   ├── theme.css     # siteye özel CSS override'ları
│   │   └── assets/       # logo, görseller (opsiyonel — public/ da kullanılabilir)
│   └── lowbed/
│       ├── data.js
│       ├── theme.js
│       └── theme.css
│
├── config
│   └── siteConfig.js     # AKTİF SİTE SEÇİMİ
│
└── pages
    └── Home.jsx          # sectionları sıralar
```

---

## Components (Tasarım)

### sections

Sayfanın büyük bölümlerini içerir. Her section yalnızca görünümü yönetir ve `data` prop'unu alır.

```txt
sections
├── Navbar
├── Hero
├── Stats
├── Features
├── Services
├── Fleet
├── Process
├── Testimonials
├── Coverage
├── Gallery
├── FAQ
├── CTA
├── Contact
├── Footer
└── FloatingContact
```

### ui

Tekrar kullanılabilir küçük bileşenler.

```txt
ui
├── Button
├── Card
├── Badge
├── Container
├── SectionHeader
├── Icon
└── ...
```

---

## Site Paketi (src/sites/<site>/)

Her site kendi klasöründe **veri + tema birlikte** tutulur. Bu, "müşteriye özel paket" mantığını verir.

```txt
sites/city-delivery/
├── data.js      # içerik verisi
├── theme.js     # renk/font teması
├── theme.css    # siteye özel CSS
└── assets/      # site görselleri
```

### data.js (örnek)

```js
const siteData = {
  site: { name: "Atlas Dağıtım", slogan: "...", domain: "..." },
  theme: { primaryColor: "#f97316", ... },   // (opsiyonel — theme.js de kullanılır)
  company: { phone, whatsapp, email, address },
  hero: { badge, title, subtitle, primaryButton, secondaryButton },
  stats: { title, items: [{ value, label }] },
  services: { badge, title, subtitle, items: [{ icon, title, description, image? }] },
  features: { ... },
  fleet: { ... },
  process: { ... },
  testimonials: { ... },
  coverage: { ... },
  gallery: [...],          // opsiyonel
  faq: { items: [{ question, answer }] },
  contact: { ... },
  cta: { ... },
  footer: { ... },
};
export default siteData;
```

### theme.js (örnek)

```js
const theme = {
  primaryColor: "#f97316",
  primaryHover: "#ea580c",
  secondaryColor: "#0f172a",
  accentColor: "#22c55e",
  textColor: "#111827",
  borderRadius: "16px",
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
};
export default theme;
```

`App.js`, bu değerleri `:root` üzerine CSS değişkenleri olarak enjekte eder (`--primary-color`, `--secondary-color`, `--border-radius`, `--font-family` ...). `variables.css` ve `global.css` bu değişkenleri fallback'lerle kullanır.

### theme.css (örnek)

Sitenin genel tasarıma ek (override) stilleri. `index.js`'te aktif sitenin theme.css'i import edilir.

---

## Config Layer (Seçici)

Aktif sitenin seçildiği katmandır.

```txt
config
└── siteConfig.js
```

```js
import cityDeliveryData from "../sites/city-delivery/data";
import cityDeliveryTheme from "../sites/city-delivery/theme";

const ACTIVE_DATA = cityDeliveryData; // ← veri
const ACTIVE_THEME = cityDeliveryTheme; // ← tema

const siteConfig = { ...ACTIVE_DATA, theme: ACTIVE_THEME };
export default siteConfig;
```

**Başka bir siteye geçmek için** (ör. lowbed):

```js
import lowbedData from "../sites/lowbed/data";
import lowbedTheme from "../sites/lowbed/theme";

const ACTIVE_DATA = lowbedData;
const ACTIVE_THEME = lowbedTheme;
```

ve `index.js`'te theme.css importunu o sitenin theme.css'ine çevir:

```js
import "./sites/lowbed/theme.css";
```

---

## Yeni Müşteri / Site Açılışı (Kod Yazmadan)

1. `src/sites/<site-adı>/` klasörü oluştur.
2. İçine `data.js` (içerik), `theme.js` (renk/font), `theme.css` (opsiyonel override) ekle.
3. `siteConfig.js`'te import et ve `ACTIVE_DATA` / `ACTIVE_THEME`'i o siteye ayarla.
4. `index.js`'te theme.css importunu o sitenin theme.css'ine çevir.
5. Yayına al.

Component geliştirmeye gerek yoktur. Tüm stiller ve bileşenler ortaktır.

---

## Opsiyonel Bölümler

- Features
- Process
- Testimonials
- Coverage
- Gallery
- Contact
- CTA

Veri boşsa section render edilmez (`if (!data?.items?.length) return null;`). Bu sayede her site farklı sayfa yapısına sahip olabilir.

---

## Hedef

Tek bir React altyapısı ile onlarca farklı lojistik ve taşımacılık web sitesini, her biri için sadece veri + tema değiştirerek üretebilmek.
