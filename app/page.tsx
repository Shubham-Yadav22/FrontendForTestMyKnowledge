import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import HowToUse from "./Components/HowtoUse";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import CTA from "./Components/SubscribeCard";
import Header from "./Components/Header";

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
