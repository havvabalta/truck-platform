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
  }, []);

  return <Home />;
}
