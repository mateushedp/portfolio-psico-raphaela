import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col gap-16">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}