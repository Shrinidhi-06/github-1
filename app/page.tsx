import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Services from "../components/Services";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
      <Services />
      </section>
      <section id="packages">
      <Packages />
      </section>
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}