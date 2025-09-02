import MessageBubble from "./MessageBubble";

const ChatMessages = () => {
  // Temporary dummy data
  const messages = [
    { id: 1, sender: "user", text: "Hi, can you summarize this document?" },
    { id: 2, sender: "bot", text: "Sure! Upload a document to get started." },
  ];

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          sender={msg.sender as "user" | "bot"}
          text={msg.text}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
