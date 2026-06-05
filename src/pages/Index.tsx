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

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 relative overflow-hidden">
      {/* Dynamic Ambient Background Canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Breathing Spotlight Orbs */}
        <div className="absolute top-[-5%] right-[-10%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] rounded-full bg-orange-500/12 blur-[90px] animate-float-slow animate-pulse-slow" />
        <div className="absolute bottom-[5%] left-[-15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-600/10 blur-[100px] animate-float-slower animate-pulse-slow" />
        <div className="absolute top-[35%] left-[25%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-orange-600/6 blur-[80px] animate-float-slow" />

        {/* Global Dot-Matrix Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-100" />
      </div>

      {/* Dynamic Cursor Spotlight Torch */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-100"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.025), rgba(245, 158, 11, 0.015) 50%, transparent 80%)`,
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

        <footer className="border-t border-zinc-900/80 py-8 text-center text-sm text-zinc-650">
          <p>© {new Date().getFullYear()} <span className="text-zinc-400 font-semibold">{profile.name}</span> · Built with React + Tailwind</p>
          <p className="mt-1 text-xs text-zinc-700">
            Shipped first app at 16 · Still going ✦
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
