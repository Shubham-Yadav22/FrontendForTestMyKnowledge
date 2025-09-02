"use client";
// Make sure the file exists at the specified path, or update the path if necessary
import ChatWindow from "./component/ChatWindow";
import ChatSidebar from "./component/ChatSidebar";
import Header from "../components/Header";
import { Michroma, Poppins } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function DocumentChat() {
  return (
    <div className="lg:mx-[100px] h-screen flex flex-col">
      <Header />
      <div className="mx-6 lg:mx-24">
        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10">
          {/* Heading */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl ${michroma.className}`}
          >
            <span className="text-[#5D85A1]">Smart</span> Tools
          </h1>

          {/* Description */}
          <p
            className={`text-sm sm:text-base lg:text-lg text-[#646464] ${poppins.className} w-full lg:w-1/2 text-left lg:text-right`}
          >
            Yuki gives you everything you need to study efficiently from solving
            doubts on any lecture to creating quizzes, crafting personalized
            study plans, and chatting directly with your study materials.
          </p>
        </div>
      </div>

      <div className="flex h-screen bg-gray-50 lg:w-[1160px] mx-auto">


      </div>
    </div>
  );
}
