import { About } from '@/components/About';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Portfolio } from '@/components/Portfolio';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { VisionMission } from '@/components/VisionMission';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import ServicesShowcase from "@/components/ServicesShowcase";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#050505] pt-[76px] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(167,229,14,0.14),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,#050505_0%,#090909_28%,#050505_100%)]" />
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <ServicesShowcase />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
