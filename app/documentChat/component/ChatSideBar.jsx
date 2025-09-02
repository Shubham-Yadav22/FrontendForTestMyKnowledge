import FileUploader from "./FileUploader";

const ChatSidebar = () => {
  return (
    <div className="w-64 border-r bg-gray-100 p-4 flex flex-col">
      <h2 className="font-semibold text-lg mb-4">Documents</h2>

      {/* File Upload */}
      <FileUploader />

      {/* Future: list of uploaded docs */}
      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <p>No documents uploaded yet.</p>
      </div>
    </div>
  );
};

export default ChatSidebar;
