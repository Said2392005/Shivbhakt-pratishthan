import Navbar        from "@/components/layout/Navbar";
import Footer        from "@/components/layout/Footer";
import BackToTop     from "@/components/ui/BackToTop";

import Hero          from "@/components/sections/Hero";
import About         from "@/components/sections/About";
import Founder       from "@/components/sections/Founder";
import ImpactCounter from "@/components/sections/ImpactCounter";
import Leadership    from "@/components/sections/Leadership";
import Activities    from "@/components/sections/Activities";
import YLTP          from "@/components/sections/YLTP";
import Gallery       from "@/components/sections/Gallery";
import Quotes        from "@/components/sections/Quotes";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900 overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Founder />
      <ImpactCounter />
      <Leadership />
      <Activities />
      <YLTP />
      <Gallery />
      <Quotes />

      <Footer />
      <BackToTop />
    </main>
  );
}
