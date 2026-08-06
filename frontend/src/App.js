import { useEffect } from "react";
import siteConfig from "./config/siteConfig";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    if (siteConfig.theme) {
      const root = document.documentElement;
      const t = siteConfig.theme;
      const map = {
        primaryColor: "--primary-color",
        primaryHover: "--primary-hover",
        secondaryColor: "--secondary-color",
        secondaryLight: "--secondary-light-color",
        accentColor: "--accent-color",
        accentHover: "--accent-hover",
        textColor: "--text-color",
        textMuted: "--text-muted",
        bgMain: "--bg-main",
        bgCard: "--bg-card",
        bgSurface: "--bg-surface",
        borderRadius: "--border-radius",
        borderRadiusSm: "--border-radius-sm",
        fontFamily: "--font-family",
        containerWidth: "--container-width",
        sectionPaddingY: "--section-padding-y",
        gridGap: "--grid-gap",
        cardPadding: "--card-padding",
        shadow: "--shadow",
        shadowSm: "--shadow-sm",
        shadowMd: "--shadow-md",
        borderColor: "--border-color",
        heroBg: "--hero-bg",
        ctaBg: "--cta-bg",
        footerBg: "--footer-bg",
      };
      Object.entries(map).forEach(([key, cssVar]) => {
        if (t[key]) root.style.setProperty(cssVar, t[key]);
      });
    }

    const { site, hero, footer, media, seo = {} } = siteConfig;
    const siteName = seo.title || site?.name || "Kurumsal web sitesi";
    const description =
      seo.description || footer?.description || hero?.subtitle || site?.slogan || "";
    const canonicalUrl = seo.canonical || (site?.domain ? `https://${site.domain}` : "");
    const setMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    };

    document.documentElement.lang = seo.locale || "tr";
    document.title = site?.slogan ? `${siteName} | ${site.slogan}` : siteName;
    if (description) {
      setMeta('meta[name="description"]', { name: "description", content: description });
      setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    }
    setMeta('meta[property="og:title"]', { property: "og:title", content: document.title });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    if (canonicalUrl) {
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
      setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    }
    if (media?.favicon) {
      const favicon = document.head.querySelector('link[rel="icon"]');
      if (favicon) favicon.href = media.favicon;
    }
  }, []);

  return <Home />;
}
