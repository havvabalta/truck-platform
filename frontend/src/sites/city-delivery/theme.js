// sites/city-delivery/theme.js
// Bu siteye özel tema değerleri. Buradaki değerler CSS değişkenlerine
// (--primary-color, --secondary-color vb.) App.js aracılığıyla enjekte edilir.
// Tasarım değişmeden sadece bu dosya ile tüm site renkleri özelleştirilebilir.

const theme = {
  // --- Renkler ---
  primaryColor: "#f97316",
  primaryHover: "#ea580c",
  secondaryColor: "#0f172a",
  secondaryLight: "#1e293b",
  accentColor: "#22c55e",
  accentHover: "#16a34a",
  textColor: "#111827",
  textMuted: "#64748b",

  // --- Arka planlar ---
  bgMain: "#f8fafc",
  bgCard: "#ffffff",
  bgSurface: "#f1f5f9",

  // --- Köşe yuvarlaklığı ---
  borderRadius: "20px",
  borderRadiusSm: "12px",

  // --- Tipografi ---
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",

  // --- Layout ---
  containerWidth: "1240px",
  sectionPaddingY: "5.5rem",
  gridGap: "1.75rem",
  cardPadding: "2rem",

  // --- Gölgeler ---
  shadow: "0 20px 50px rgba(15,23,42,0.12)",
  shadowSm: "0 4px 10px rgba(15,23,42,0.04)",
  shadowMd: "0 12px 30px -5px rgba(15,23,42,0.10)",

  // --- Kenarlık ---
  borderColor: "#e2e8f0",

  // --- Bölüm arka planları ---
  heroBg: "",
  ctaBg: "",
  footerBg: "",
};

export default theme;
