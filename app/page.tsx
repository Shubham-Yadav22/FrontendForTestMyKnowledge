import HeroSection from "../app/Components/HeroSection";
import Features from "../app/Components/Features";
import HowToUse from "../app/Components/HowtoUse";
import Testimonials from "../app/Components/Testimonials";
import Pricing from "../app/Components/Pricing";
import CTA from "../app/Components/SubscribeCard";
import Header from "../app/Components/Header";

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
