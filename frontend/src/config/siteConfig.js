// ============================================================
// config/siteConfig.js  —  "FABRİKA SİPARİŞ SİSTEMİ"
// ============================================================
// Bu dosya hangi sitenin (müşterinin) aktif olduğunu belirler.
//
// Yeni bir site açmak için:
//   1. src/sites/<site-adı>/ klasörü oluştur (data.js, theme.js, theme.css)
//   2. Aşağıdaki importu ekle
//   3. ACTIVE_DATA / ACTIVE_THEME değişkenlerini o siteye ayarla
//   4. index.js'te theme.css importunu o sitenin theme.css'ine çevir
//
// Tasarım (components/) değişmez. Sadece burada seçim yapılır.
// ============================================================

// --- AKTİF SİTE ---
import cityDeliveryData from "../sites/city-delivery/data";
import cityDeliveryTheme from "../sites/city-delivery/theme";

// --- HAZIR OLARAK BEKLEYEN SİTELER ---
// import lowbedData from "../sites/lowbed/data";
// import lowbedTheme from "../sites/lowbed/theme";
// import tankerData from "../sites/tanker/data";
// import tankerTheme from "../sites/tanker/theme";


// >>> AKTİF SİTE SEÇİMİ <<<
const ACTIVE_DATA = cityDeliveryData; 
const ACTIVE_THEME = cityDeliveryTheme; 


const siteConfig = {
  ...ACTIVE_DATA,
  theme: ACTIVE_THEME,
};

export default siteConfig;
