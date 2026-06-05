import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Thoughts from "@/components/Thoughts";
import Contact from "@/components/Contact";
import { updatePageTitle, logPageView } from "@/utils/seo";
import { profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme(); // Subscribes Index to theme changes to trigger re-renders

  useEffect(() => {
    updatePageTitle("Portfolio");
    logPageView("/");

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const glow1 = theme === "dark" ? "0.025" : "0.012";
  const glow2 = theme === "dark" ? "0.015" : "0.008";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Ambient Background Canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Breathing Spotlight Orbs */}
        <div 
          className="absolute top-[-5%] right-[-10%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] rounded-full blur-[90px] animate-float-slow animate-pulse-slow transition-colors duration-500" 
          style={{ backgroundColor: "var(--orb-orange)" }}
        />
        <div 
          className="absolute bottom-[5%] left-[-15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] animate-float-slower animate-pulse-slow transition-colors duration-500" 
          style={{ backgroundColor: "var(--orb-green)" }}
        />
        <div 
          className="absolute top-[35%] left-[25%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full blur-[80px] animate-float-slow transition-colors duration-500" 
          style={{ backgroundColor: "var(--orb-copper)" }}
        />

        {/* Global Dot-Matrix Grid Overlay */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(var(--grid-color)_1px,transparent_1px)] bg-[size:24px_24px] opacity-100 transition-all duration-500" 
        />
      </div>

      {/* Dynamic Cursor Spotlight Torch */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-100"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, ${glow1}), rgba(245, 158, 11, ${glow2}) 50%, transparent 80%)`,
        }}
      />

      {/* Main Content Layout */}
      <div className="relative z-20">
        <Header />

        <main className="mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            <div className="relative w-full lg:h-fit">
              <div className="lg:fixed lg:top-24 lg:w-[280px] lg:z-30 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto scrollbar-none pb-4">
                <Hero />
              </div>
            </div>

            <div className="space-y-24">
              <Projects />
              <Experience />
              <Education />
              <About />
              <Thoughts />
              <Contact />
            </div>
          </div>
        </main>

        <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground transition-colors">
          <p>© {new Date().getFullYear()} <span className="text-foreground font-semibold">{profile.name}</span> · Built with React + Tailwind</p>
          <p className="mt-1 text-xs text-muted-foreground/80">
            Shipped first app at 16 · Still going ✦
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
