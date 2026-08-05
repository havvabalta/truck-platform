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
        textColor: "--text-color",
        borderRadius: "--border-radius",
        fontFamily: "--font-family",
      };
      Object.entries(map).forEach(([key, cssVar]) => {
        if (t[key]) root.style.setProperty(cssVar, t[key]);
      });
    }
  }, []);

  return <Home />;
}
