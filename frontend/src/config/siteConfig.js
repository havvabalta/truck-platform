// ============================================================
// config/siteConfig.js  —  "FABRİKA SİPARİŞ SİSTEMİ"
// ============================================================
// Bu dosya hangi sitenin (müşterinin) aktif olduğunu belirler.
//
// Yeni bir site açmak için:
//   1. src/sites/<site-adı>/ klasörü oluştur (data.js, theme.js, theme.css)
//   2. Aşağıdaki importu ekle (data, theme ve theme.css)
//   3. ACTIVE_DATA / ACTIVE_THEME değişkenlerini o siteye ayarla
//
// Tasarım (components/) değişmez. Sadece burada seçim yapılır.
// Not: Aktif sitenin theme.css'i de burada import edilir; index.js'e
// ayrıca satır eklemeye gerek yoktur.
// ============================================================

// --- HAZIR SİTELER ---
import lowbedData from "../sites/lowbed/data";
import lowbedTheme from "../sites/lowbed/theme";
import "../sites/lowbed/theme.css";
// import tankerData from "../sites/tanker/data";
// import tankerTheme from "../sites/tanker/theme";
// import "../sites/tanker/theme.css";

// --- AKTİF SİTE ---
//import cityDeliveryData from "../sites/city-delivery/data";
//import cityDeliveryTheme from "../sites/city-delivery/theme";
//import "../sites/city-delivery/theme.css"; // Aktif sitenin CSS override'ları

// >>> AKTİF SİTE SEÇİMİ <<<
//const ACTIVE_DATA = cityDeliveryData;
//const ACTIVE_THEME = cityDeliveryTheme;

const ACTIVE_DATA = lowbedData;
const ACTIVE_THEME = lowbedTheme;

const siteConfig = {
  ...ACTIVE_DATA,
  theme: ACTIVE_THEME,
};

export default siteConfig;
