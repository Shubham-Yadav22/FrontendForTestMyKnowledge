"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Poppins, Michroma } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const quotes = [
  "Patience is the key to success...",
  "Good things take time...",
  "Loading your quiz...",
  "Almost ready, hang tight!",
];

const Quiz = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [difficultyLevel, setDifficultyLevel] = useState("easy");

  const options: number[] = [5, 10, 15, 20];
  const optionsForDifficulty: string[] = ["easy", "medium", "hard"];

  const [loading, setLoading] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quizData, setQuizData] = useState<any>(null);
  const [progress, setProgress] = useState(0);

  // Rotate quotes when loading
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 95) return prev + 5; // keep increasing but stop before 100
          return prev;
        });
      }, 300);
    } else {
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [loading]);

  // Triggered on Generate Quiz
  const handleGenerateQuiz = async () => {
    setLoading(true);
    setProgress(0);

    try {
      // Simulate video upload
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Call your quiz API (replace URL)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();

      // Artificial delay (optional)
      setTimeout(() => {
        setQuizData(data);
        setLoading(false); // stops bar + resets
      }, 1500);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      {/* Heading + Description */}
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

      {/* Content Area */}
      <div className="mx-6 lg:mx-24 flex flex-col lg:flex-row justify-between mt-10 gap-8">
        {/* Left Side - Searchbar + Video */}
        <div className="flex flex-col gap-6 w-full lg:w-[560px]">
          {/* Search bar */}
          <div className="flex w-full">
            <input
              type="text"
              className="flex-1 text-[#333] text-sm sm:text-base pl-4 h-[45px] sm:h-[50px] rounded-l-full border-2 border-[#B8CCDD] focus:outline-none"
              placeholder="Paste YouTube video link here..."
            />
            <button className="w-[100px] sm:w-[120px] h-[45px] sm:h-[50px] bg-[#B9CDDD] text-white font-medium rounded-r-full hover:bg-[#a4bfcf] transition">
              Paste
            </button>
          </div>

          {/* Video card */}
          <div className="w-full h-auto lg:h-[430px] flex flex-col gap-4 rounded-2xl bg-[#B9CDDD] p-4">
            <div className="bg-white w-full h-[200px] sm:h-[250px] lg:h-[291px] rounded-2xl"></div>

            <div className="flex flex-col gap-2">
              <p className="text-base sm:text-lg lg:text-xl text-[#646464]">
                Understanding the Basics of Machine Learning
              </p>
              <div className="flex gap-5 text-[#646464] text-sm sm:text-base">
                <p>AI Fundamentals</p>
                <p>15:23</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Quiz Options */}
        <div className="flex flex-col gap-6 w-full lg:w-[560px]">
          {/* Heading */}
          <h2
            className={`text-2xl sm:text-3xl lg:text-5xl ${michroma.className}`}
          >
            Customize your quiz
          </h2>

          {/* Number of Questions */}
          <div className="flex flex-col gap-3">
            <p
              className={`text-[#646464] text-base sm:text-lg ${poppins.className}`}
            >
              Number of Questions
            </p>
            <div className="w-full h-[45px] sm:h-[50px] rounded-3xl border border-[#B9CDDD] flex items-center gap-2 p-1">
              {options.map((item, key) => (
                <button
                  key={key}
                  onClick={() => setNumberOfQuestions(item)}
                  className={`flex-1 h-full rounded-3xl transition 
                    ${
                      numberOfQuestions === item
                        ? "bg-[#B8CCDB] text-white shadow-sm"
                        : "bg-white text-[#646464] hover:bg-[#f0f8ff]"
                    } ${poppins.className}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Level */}
          <div className="flex flex-col gap-3">
            <p
              className={`text-[#646464] text-base sm:text-lg ${poppins.className}`}
            >
              Difficulty Level
            </p>

            <div className="w-full h-[45px] sm:h-[50px] rounded-3xl border-2 border-[#B9CDDD]  flex items-center gap-2 p-1">
              {optionsForDifficulty.map((item, key) => (
                <button
                  key={key}
                  onClick={() => setDifficultyLevel(item)}
                  className={`flex-1 h-full rounded-3xl transition 
                    ${
                      difficultyLevel === item
                        ? "bg-[#B8CCDB] text-white shadow-sm"
                        : "bg-white text-[#646464] hover:bg-[#f0f8ff]"
                    } ${poppins.className}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Quiz Button */}
          {/* Generate Quiz Button */}
          <button
            onClick={handleGenerateQuiz}
            disabled={loading}
            className={`w-full h-[45px] sm:h-[52px] flex items-center justify-center text-lg sm:text-xl rounded-2xl 
    bg-gradient-to-tr from-white via-[#d7e7f2] to-[#B8CCDB] 
    hover:via-[#EBF1F5] hover:to-[#a4c5db] text-black transition 
    disabled:opacity-50 ${poppins.className}`}
          >
            {loading ? "Generating..." : "Generate Quiz"}
          </button>

          {/* Loading Bar + Quote (only while loading) */}
          {loading && (
            <div className="mt-4 flex flex-col items-center gap-3">
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5D85A1] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Rotating Quote */}
              <p className="text-sm text-gray-600 italic text-center">
                {quotes[quoteIndex]}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
