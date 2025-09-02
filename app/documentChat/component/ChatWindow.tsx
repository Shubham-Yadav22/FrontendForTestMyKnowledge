import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <ChatMessages />
      </div>

      {/* Input */}
      <div className="border-t p-2 bg-gray-100">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatWindow;
