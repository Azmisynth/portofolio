import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="border-t border-zinc-900 py-8 text-center">
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Rafi Azmi Zafarani. Built with Next.js &amp; Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
