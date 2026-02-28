import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import ToolsAndTech from "@/components/ToolsAndTech";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Hero />
      <About />
      <Journey />
      <ToolsAndTech />
      <Footer />
    </main>
  );
}
