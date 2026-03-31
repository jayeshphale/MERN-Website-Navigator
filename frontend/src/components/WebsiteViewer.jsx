import React, { useState } from "react";
import { FiAlertCircle, FiExternalLink } from "react-icons/fi";
import NavigationControls from "./NavigationControls";

function WebsiteViewer({ urls }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-inner">

      {/* Navigation */}
      <NavigationControls
        index={index}
        setIndex={setIndex}
        total={urls.length}
      />

      {/* Website Frame */}
      <div className="rounded-lg overflow-hidden border mb-3">
        <iframe
          src={urls[index]}
          title="website"
          className="w-full h-[500px]"
        />
      </div>

      {/* Note */}
      <div className="p-3 bg-yellow-50 border border-yellow-300 rounded-lg text-sm text-yellow-800 text-center flex items-center justify-center gap-2">
        <FiAlertCircle size={20} />
        Some websites may not load inside this app due to browser security
        restrictions (X-Frame-Options or Content Security Policy).
      </div>

      {/* Fallback Link */}
      <div className="text-center mt-2">
        <a
          href={urls[index]}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition whitespace-nowrap"
        >
          Open Website
          <FiExternalLink size={18} />
        </a>
      </div>

    </div>
  );
}

export default WebsiteViewer;