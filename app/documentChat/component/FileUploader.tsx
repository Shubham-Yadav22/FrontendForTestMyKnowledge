"use client";

const FileUploader = () => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file.name);
      // TODO: send to backend
    }
  };

  return (
    <div>
      <label className="cursor-pointer text-blue-500 hover:underline">
        Upload Document
        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
        />
      </label>
    </div>
  );
};

export default FileUploader;
