
type MessageBubbleProps = {
  sender: "user" | "bot";
  text: string;
};

const MessageBubble = ({ sender, text }: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
        isUser
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-200 text-gray-900 self-start"
      }`}
    >
      {text}
    </div>
  );
};

export default MessageBubble;
