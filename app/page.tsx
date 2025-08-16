import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowToUse from "./components/HowtoUse";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/SubscribeCard";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="w-full">
      <div
        className="w-full bg-[url('/backgroundHero.png')] bg-cover bg-center bg-no-repeat 
                  [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
      >
        <Header />
        <HeroSection />
      </div>


      <Features />
      <HowToUse />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}
