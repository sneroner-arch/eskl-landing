import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Directions from "@/components/Directions";
import Construction from "@/components/Construction";
import Logistics from "@/components/Logistics";
import Synergy from "@/components/Synergy";
import Geography from "@/components/Geography";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Directions />
        <Construction />
        <Logistics />
        <Synergy />
        <Geography />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
