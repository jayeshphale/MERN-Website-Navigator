import React, { useState } from "react";
import NavigationControls from "./NavigationControls";
import { ExternalLink, RotateCw, Loader } from "lucide-react";

function WebsiteViewer({ urls }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentUrl = urls[index];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="space-y-6">
      {/* Viewer Container */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold">Live Preview</p>
            <p className="mt-2 text-sm text-slate-700 truncate font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              {currentUrl}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              title="Refresh page"
              className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-200 text-slate-700 hover:text-slate-900"
            >
              <RotateCw size={18} className={loading ? "animate-spin" : ""} />
            </button>
            <a
              href={currentUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Open</span>
            </a>
          </div>
        </div>

        {/* Iframe Container */}
        <div className="relative w-full bg-slate-100 overflow-hidden">
          {loading && (
            <div className="absolute inset-0 z-10 bg-white/50 flex items-center justify-center backdrop-blur-sm">
              <Loader className="animate-spin text-blue-600" size={32} />
            </div>
          )}
          <iframe
            key={`${index}-iframe`}
            src={currentUrl}
            title={`website-${index}`}
            className="w-full min-h-[65vh] h-[75vh]"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            style={{ border: "0" }}
          />
        </div>
      </div>

      {/* Navigation & Info Section */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-6">
        <NavigationControls index={index} setIndex={setIndex} total={urls.length} />

        {/* Info Text */}
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Tip:</span> If a website doesn't load in the preview, click the "Open" button to view it in a new tab.
          </p>
        </div>

        {/* Website Counter Card */}
        <div className="mt-6 grid gap-4 grid-cols-3">
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-3 sm:px-4 sm:py-4 text-center hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-1">Current</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{index + 1}</p>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-3 sm:px-4 sm:py-4 text-center hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-1">Total</p>
            <p className="text-xl sm:text-2xl font-bold text-indigo-600">{urls.length}</p>
          </div>
          <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-3 sm:px-4 sm:py-4 text-center hover:bg-slate-100 transition-colors">
            <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold mb-1">Progress</p>
            <p className="text-xl sm:text-2xl font-bold text-emerald-600">{Math.round(((index + 1) / urls.length) * 100)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteViewer;