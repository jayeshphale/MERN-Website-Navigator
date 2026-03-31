import React, { useState } from "react";
import { uploadFile } from "../services/api";
import { UploadCloud } from "lucide-react";

function FileUpload({ setUrls }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await uploadFile(formData);

      if (res.data.success) {
        setUrls(res.data.urls);
      }

    } catch (err) {
      alert("File upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mb-6">
      
      <label className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
        <UploadCloud size={18} />
        Upload File
        <input
          type="file"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {loading && (
        <p className="text-blue-500 mt-2 text-sm">
          Uploading file...
        </p>
      )}
    </div>
  );
}

export default FileUpload;