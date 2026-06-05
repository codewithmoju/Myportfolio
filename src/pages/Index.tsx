import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { updatePageTitle, logPageView } from "@/utils/seo";
import { profile } from "@/data/portfolio";

const Index = () => {
  useEffect(() => {
    updatePageTitle("Portfolio");
    logPageView("/");
  }, []);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Hero />
          </div>

          <div className="space-y-24">
            <Projects />
            <Experience />
            <Education />
            <About />
            <Testimonials />
            <Contact />
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} <span className="text-zinc-400 font-semibold">{profile.name}</span> · Built with React + Tailwind</p>
        <p className="mt-1 text-xs text-zinc-700">
          Shipped first app at 16 · Still going ✦
        </p>
      </footer>
    </div>
  );
};

export default Index;
