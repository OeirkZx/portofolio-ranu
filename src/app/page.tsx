import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import TechArsenal from "@/components/TechArsenal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Journey />
      <TechArsenal />
      <Footer />
    </main>
  );
}
