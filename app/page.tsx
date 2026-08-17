import Navbar from "@/components/navbar";
import Hero from "@/components/hero/hero";
import AboutProduct from "@/components/AboutProduct";
import SplitShowcase from "@/components/SplitShowcase";
import AcademySection from "@/components/sections/AcademySection";
import ProfessionalCollection from "@/components/sections/ProfessionalCollection";
import PastProjectsSection from "@/components/sections/PastProjectsSection";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-800">
      <Navbar />
      <Hero />
      <AboutProduct />
      <SplitShowcase />
      <AcademySection />
      <PastProjectsSection />
      <ProfessionalCollection />
      <Reviews />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
