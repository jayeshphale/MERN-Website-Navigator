import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import FileUpload from "./components/FileUpload";
import WebsiteViewer from "./components/WebsiteViewer";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
          <FiGlobe className="text-blue-500" size={32} />
          Website Navigator
        </h1>

        <FileUpload setUrls={setUrls} />

        {urls.length > 0 && <WebsiteViewer urls={urls} />}

      </div>

    </div>
  );
}

export default App;