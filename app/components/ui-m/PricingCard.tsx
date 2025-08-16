import React from "react";
import { Michroma, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const PricingCard = ({ content, price, features, selected, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={`lg:w-[400px] lg:h-[600px] w-full flex flex-col justify-between rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-500 
        ${selected 
          ? "bg-gradient-to-b from-[#B8CCDB] to-[#FFFFFF] scale-115 z-10" 
          : "bg-white border border-[#B9CDDD]"
        }`}
    >
      {/* Inner Content Box */}
      <div
        className={`w-full h-[200px] flex items-center justify-center mb-6 rounded-2xl transition-all duration-500 
          ${selected 
            ? "bg-white border-none" 
            : "bg-white border border-[#B9CDDD]"
          } ${michroma.className}`}
      >
        {content}
      </div>

      {/* Price */}
      <div
        className={`text-3xl font-bold text-black mb-4 text-left mx-4 ${michroma.className}`}
      >
        {price || "$0"} <span className="text-lg font-normal">/mo</span>
      </div>

      {/* Features */}
      <div className="w-full px-4 mb-6">
        <ul
          className={`list-disc list-inside space-y-2 text-md text-[#646464] ${poppins.className}`}
        >
          {features.map((item: any, key: any) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button
        className={`w-full lg:w-[302px] h-[52px] rounded-xl font-semibold text-black 
          bg-gradient-to-r from-[#FFFFFF] to-[#B8CCDB] hover:from-[#f0f0f0] hover:to-[#a9bdcc] transition-all ${poppins.className}`}
      >
        Free
      </button>
    </div>
  );
};

export default PricingCard;
