import Hero from "./components/hero";
import Footer from "./components/Footer";
import OurPartners from "./components/ourpartners";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-raisin">
      <Hero />
            <OurPartners />

      <Footer />
    </main>
  );
}
