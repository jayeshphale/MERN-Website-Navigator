import React, { useState } from "react";
import { uploadFile } from "../services/api";
import { Upload, CheckCircle, AlertCircle, FileText } from "lucide-react";

function FileUpload({ setUrls, urls }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    const formData = new FormData();
    formData.append("file", file);
    setError("");

    try {
      setLoading(true);
      const res = await uploadFile(formData);

      if (res.data.success) {
        setUrls(res.data.urls);
        setFileName("");
      } else {
        setError("Failed to parse the CSV file. Please check the format.");
      }
    } catch (err) {
      setError("Upload failed. Please try again with a valid CSV file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow p-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Left Side - Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100">
              <Upload size={22} className="text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Upload CSV</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Select a CSV file with one website URL per line. Our system will parse it and prepare all sites for browsing.
          </p>
          {urls.length > 0 && (
            <div className="mt-4 flex items-center gap-2 text-green-600">
              <CheckCircle size={20} />
              <span className="font-medium">{urls.length} websites ready to explore</span>
            </div>
          )}
        </div>

        {/* Right Side - Upload Button & Status */}
        <div className="flex flex-col gap-4">
          <label className="group relative cursor-pointer">
            <div className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-6 py-8 text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-100">
              <div className="flex flex-col items-center gap-2">
                <Upload size={32} className="text-blue-600 group-hover:scale-110 transition-transform" />
                <p className="font-semibold text-slate-900">Click to upload</p>
                <p className="text-sm text-slate-600">or drag and drop</p>
                <p className="text-xs text-slate-500 mt-1">CSV files only</p>
              </div>
            </div>
            <input
              type="file"
              accept=".csv"
              onChange={handleUpload}
              disabled={loading}
              className="hidden"
            />
          </label>

          {/* Loading State */}
          {loading && (
            <div className="rounded-xl bg-blue-50 border border-blue-200 px-4 py-3 flex items-center gap-3">
              <div className="animate-spin">
                <FileText size={18} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">Processing {fileName}...</p>
                <div className="w-full h-1.5 bg-blue-200 rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Success State */}
          {!loading && urls.length > 0 && !error && (
            <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                <p className="text-sm font-medium text-green-700">File uploaded successfully!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      {urls.length > 0 && (
        <div className="mt-6 grid gap-3 grid-cols-2 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-center hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold">Total URLs</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">{urls.length}</p>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-center hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold">Status</p>
            <p className="text-2xl font-bold text-green-600 mt-1">Ready</p>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-center col-span-2 sm:col-span-1 hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold">Browser</p>
            <p className="text-2xl font-bold text-indigo-600 mt-1">Active</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileUpload;