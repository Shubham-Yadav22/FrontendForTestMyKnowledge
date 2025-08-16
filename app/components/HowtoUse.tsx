import React from "react";
import { Poppins, Michroma } from "next/font/google";
import { CardCarousel } from "@/components/ui/card-carousel"
import { tree } from "next/dist/build/templates/app-page";


const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400", // Michroma only has one weight
  subsets: ["latin"],
})

const images = [
  { src: "/imageCar1.jpeg", alt: "Image 1" },
  { src: "/imageCar2.jpeg", alt: "Image 2" },
  { src: "/imageCar3.jpeg", alt: "Image 3" },
  { src: "/imageCar4.jpeg", alt: "Image 4" },
  { src: "/imageCar5.jpeg", alt: "Image 5" },
  { src: "/imageCar6.jpeg", alt: "Image 6" },
  { src: "/imageCar7.jpeg", alt: "Image 7" },
 
]

const HowtoUse = () => {
  return (
    <div className="mx-[100px] mt-[80px] ">
      {/* heading and description */}
      <div className="flex justify-between">
        {/* heading */}
        <div className={`text-5xl ${michroma.className}`}>
          {" "}
          <span className="text-[#5D85A1]">Yuki</span> Demos
        </div>

        {/* description */}
        <div
          className={`text-lg text-[#646464] ${poppins.className} w-130 lg:text-right text-left`}
        >
          Watch step-by-step videos explaining how each smart tool works — so
          you can discover exactly how Yuki makes learning easier, faster, and
          more engaging.
        </div>
      </div>

      {/* Card Slider */}
       <div className="mt-10">  

       <CardCarousel
        images={images}
        autoplayDelay={1000}
        showPagination={true}
        showNavigation={true}
        
      />
        
       </div>


    </div>
  );
};

export default HowtoUse;
