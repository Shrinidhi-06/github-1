import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section id="about">
        <Reveal>
          <About />
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="services">
        <Reveal>
          <Services />
        </Reveal>
      </section>

      {/* PACKAGES */}
      

      {/* GALLERY */}
     

      {/* CONTACT */}
      <section id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}