import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import WebsiteViewer from "./components/WebsiteViewer";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Website Navigator
        </h1>

        <FileUpload setUrls={setUrls} />

        {urls.length > 0 && (
          <WebsiteViewer urls={urls} />
        )}
      </div>

    </div>
  );
}

export default App;