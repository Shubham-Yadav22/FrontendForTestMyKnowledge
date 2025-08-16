import React from "react";
import { Michroma, Poppins } from "next/font/google";
import { InfiniteMovingCards } from "./ui-m/TestimonialCardCarousel";

const michroma = Michroma({
  weight: "400", // Michroma only has one weight
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400", // Poppins only has one weight
  subsets: ["latin"],
});

const poppins600 = Poppins({
  weight: "600", // Poppins only has one weight
  subsets: ["latin"],
});

const cardsData = [
  {
    quote: "This is the best product I’ve ever used!",
    name: "John Doe",
    title: "CEO, Example Inc.",
  },
  {
    quote: "A fantastic experience from start to finish.",
    name: "Jane Smith",
    title: "Product Manager, Awesome Co.",
  },
  {
    quote: "Highly recommended for anyone looking for quality.",
    name: "Alex Johnson",
    title: "Designer, Creative Studio",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-[80px] w-full">
      {/* heading and description */}
      <div className="flex justify-between mx-[100px]">
        {/* heading */}
        <div className={`text-5xl ${michroma.className}`}>
          {" "}
          <span className="text-[#5D85A1]">Trusted</span> Voices
        </div>

        {/* description */}
        <div
          className={`text-lg text-[#646464] ${poppins.className} w-130 lg:text-right text-left` }
        >
          Students, educators, professionals, and innovators alike share how
          Yuki has transformed the way they learn, teach, and achieve their
          goals.
        </div>
      </div>

      <div className="">
        <InfiniteMovingCards
          items={cardsData}
          direction="left" // or "right"
          speed="normal" // "fast", "normal", "slow"
          pauseOnHover={true}
          className="my-10"
        />
      </div>
    </div>
  );
};

export default Testimonials;
