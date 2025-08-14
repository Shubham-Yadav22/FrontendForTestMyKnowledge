import React from "react";
import { Poppins, Michroma } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

interface FeatureCardProps {
  heading: string;
  subheading: string;
  size?: "large" | "small"; // default = large
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  heading,
  subheading,
  size = "large",
}) => {
  const isLarge = size === "large";

  // Tailwind classes for width based on size
  const outerWidth = isLarge ? "w-[780px]" : "w-[440px]";
  const innerWidth = isLarge ? "w-[740px]" : "w-[400px]";

  return (
    <div
      className={`rounded-2xl flex flex-col gap-2 p-4 border border-[#B9CDDD] ${outerWidth}`}
      style={{
        background: "linear-gradient(78.26deg, #FFFFFF 0%, #B8CCDB 100%)",
      }}
    >
      <h2 className={`${michroma.className} text-lg`}>{heading}</h2>

      <p className={`${poppins.className} text-[#646464] text-sm`}>
        {subheading}
      </p>

      <div className={`bg-white h-[208px] rounded-2xl p-5 ${innerWidth}`}></div>
    </div>
  );
};

export default FeatureCard;
