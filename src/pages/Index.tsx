import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { updatePageTitle, logPageView } from "@/utils/seo";

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
            <About />
            <Testimonials />
            <Contact />
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Muhammad Moaiz · Built with React + Tailwind
      </footer>
    </div>
  );
};

export default Index;
