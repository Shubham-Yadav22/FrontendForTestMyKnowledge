"use client";
import React, { useState } from "react";
import { Michroma, Poppins } from "next/font/google";
import PricingCard from "./ui-m/PricingCard";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const michroma = Michroma({ weight: "400", subsets: ["latin"] });

const features = [
  "Powerful AI analysis",
  "Advanced reporting",
  "Real-time AI",
  "Data analysis",
  "24/7 Support",
];

const Pricing = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mx-[100px] mt-[80px] mb-20">
      {/* heading and description */}
      <div className="flex justify-between mb-20">
        <div className={`text-5xl ${michroma.className}`}>Pricing</div>

        <div
          className={`text-lg text-[#646464] ${poppins.className} w-130 lg:text-right text-left`}
        >
          Upload a YouTube link, Video, document, image, or voice note and let
          Yuki, your AI study companion, explain, answer questions, and guide
          you like a personal digital teacher.
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex justify-between gap-6">
        {[
          { content: "Casual Learner", price: "$0" },
          { content: "Topper's Plan", price: "$20" },
          { content: "Pro Learner", price: "$40" },
        ].map((card, index) => (
          <PricingCard
            key={index}
            content={card.content}
            price={card.price}
            features={features}
            selected={selected === index}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
