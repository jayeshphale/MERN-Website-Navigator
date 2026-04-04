import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import WebsiteViewer from "./components/WebsiteViewer";
import { Globe } from "lucide-react";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <Globe size={20} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Website Navigator</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            Website Explorer
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upload a CSV file with website URLs and explore them effortlessly with our intuitive navigation system.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-8">
          <FileUpload setUrls={setUrls} urls={urls} />

          {urls.length > 0 ? (
            <div className="animate-fade-in">
              <WebsiteViewer urls={urls} />
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-12 sm:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Globe size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">Ready to explore?</h2>
              <p className="text-slate-600 text-lg">
                Upload your CSV file to get started. Navigate through websites with ease using the intuitive controls below the preview.
              </p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          <p>© 2024 Website Navigator • Built with React & Tailwind CSS</p>
        </footer>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;