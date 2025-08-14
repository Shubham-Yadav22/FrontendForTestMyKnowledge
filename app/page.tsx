import HeroSection from "@/app/components/HeroSection";
import Features from "@/app/components/Features";
import HowToUse from "@/app/components/HowtoUse";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import CTA from "@/app/components/CTA";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <HowToUse />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
