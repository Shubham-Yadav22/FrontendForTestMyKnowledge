import React from "react";
import { Poppins, Michroma } from "next/font/google";
import FeatureCard from "./ui/FeatureCard";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400", // Michroma only has one weight
  subsets: ["latin"],
});

const Features = () => {
  return (
    <div className="mx-[100px] mt-[80px]">
      {/* heading and description */}
      <div className="flex justify-between">
        {/* heading */}
        <div className={`text-5xl ${michroma.className}`}>Tools</div>

        {/* description */}
        <div
          className={`text-lg text-[#646464] ${poppins.className} w-150 text-center`}
        >
          Upload a YouTube link, Video, document, image, or voice note and let
          Yuki, your AI study companion, explain, answer questions, and guide
          you like a personal digital teacher.
        </div>
      </div>

      {/* main feature div */}
      <div className="flex-col mt-8">
        {/* feature 1 div  */}

        <div className="flex gap-4 mb-8">
          <FeatureCard
            heading="Solve doubt about a video lecture"
            subheading="Make sure you have learned everything by evaluating your understanding"
            size="large"
          />

          <FeatureCard
            heading="Quiz Your Video"
            subheading="Make sure you have learned everything by evaluating your understanding"
            size="small"
          />
        </div>

        {/* feature 2 div  */}
        <div className="flex gap-4">
          <FeatureCard
            heading="Curate study plan"
            subheading="Make sure you have learned everything by evaluating your understanding"
            size="small"
          />

          <FeatureCard
            heading="Chat with study materials"
            subheading="Make sure you have learned everything by evaluating your understanding"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
