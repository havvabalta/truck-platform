import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import Fleet from "../components/sections/Fleet";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import Coverage from "../components/sections/Coverage";
import FAQ from "../components/sections/FAQ";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";
import FloatingContact from "../components/sections/FloatingContact";

import siteConfig from "../config/siteConfig";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero data={siteConfig.hero} />

      <Stats data={siteConfig.stats} />

      <Services data={siteConfig.services} />

      <Features data={siteConfig.features} />
       <Gallery data={{ gallery: siteConfig.media?.gallery }} />

      <Fleet data={siteConfig.fleet} />

      <Process data={siteConfig.process} />

<Testimonials data={siteConfig.testimonials} />

      <Coverage data={siteConfig.coverage} />

     

<FAQ data={siteConfig.faq} />

      <Contact data={siteConfig.contact} />

      <CTA data={siteConfig.cta} />

      <Footer data={siteConfig.footer} />

      <FloatingContact />
    </>
  );
}
