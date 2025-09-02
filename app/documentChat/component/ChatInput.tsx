"use client";
import { useState } from "react";

const ChatInput = () => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    console.log("Send message:", input);
    setInput("");
  };

  return (
    <div className="flex items-center gap-2 w-[540px] h-[50px] rounded-2xl ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
