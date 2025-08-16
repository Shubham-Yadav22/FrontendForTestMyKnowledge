import React from "react";
import { Michroma, Poppins } from "next/font/google";
import {InfiniteMovingCards} from "./ui-m/TestimonialCardCarousel"; // ✅ import default

// Fonts
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const poppins600 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

// Testimonials data
const cardsData = [
  {
    id: 1,
    quote: "This is the best product I’ve ever used!",
    name: "John Doe",
    title: "CEO, Example Inc.",
  },
  {
    id: 2,
    quote: "A fantastic experience from start to finish.",
    name: "Jane Smith",
    title: "Product Manager, Awesome Co.",
  },
  {
    id: 3,
    quote: "Highly recommended for anyone looking for quality.",
    name: "Alex Johnson",
    title: "Designer, Creative Studio",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-[80px] w-full">
      {/* heading and description */}
      <div className="flex flex-col lg:flex-row justify-between mx-[100px] gap-6">
        {/* heading */}
        <div className={`text-5xl ${michroma.className}`}>
          <span className="text-[#5D85A1]">Trusted</span> Voices
        </div>

        {/* description */}
        <div
          className={`text-lg text-[#646464] ${poppins.className} max-w-xl lg:text-right text-left`}
        >
          Students, educators, professionals, and innovators alike share how
          Yuki has transformed the way they learn, teach, and achieve their
          goals.
        </div>
      </div>

      {/* Carousel */}
      <div className="my-10">
        <InfiniteMovingCards
          items={cardsData}
          direction="left" // or "right"
          speed="normal" // "fast", "normal", "slow"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Testimonials;
