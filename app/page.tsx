import Navbar from "@/components/navbar";
import Hero from "@/components/hero/hero";
import AboutProduct from "@/components/AboutProduct";
import SplitShowcase from "@/components/SplitShowcase";

export default function Home() {
  return (
    <main className="relative h-screen bg-neutral-800">
      <Navbar />
      <Hero />
      <AboutProduct />
      <SplitShowcase />
    </main>
  );
}
