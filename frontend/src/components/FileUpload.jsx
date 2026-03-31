import React, { useState } from "react";
import { uploadFile } from "../services/api";

function FileUpload({ setUrls }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await uploadFile(formData);
      setUrls(res.data.urls);
    } catch (error) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">

      <label className="cursor-pointer bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
        Upload File
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {loading && (
        <div className="mt-3 flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-blue-500">Uploading...</span>
        </div>
      )}
    </div>
  );
}

export default FileUpload;