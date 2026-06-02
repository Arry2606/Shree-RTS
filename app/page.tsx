import About from "@/components/About";
import BreakfastMenu from "@/components/BreakfastMenu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import ScrollEffects from "@/components/ScrollEffects";
import TiffinPlans from "@/components/TiffinPlans";
import Timings from "@/components/Timings";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main className="pb-20 pt-16 md:pb-0">
        <Hero />
        <TrustBadges />
        <About />
        <TiffinPlans />
        <BreakfastMenu />
        <Timings />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
