import Navbar from "@/components/navbar";
import Hero from "@/components/hero/hero";
import AboutProduct from "@/components/AboutProduct";
import SplitShowcase from "@/components/SplitShowcase";
import AcademySection from "@/components/sections/AcademySection";
import TransformationsSection from "@/components/sections/TransformationsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-800">
      <Navbar />
      <Hero />
      <AboutProduct />
      <SplitShowcase />
      <AcademySection />
      <TransformationsSection />
    </main>
  );
}
