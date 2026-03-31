import React, { useState } from "react";
import NavigationControls from "./NavigationControls";
import { ExternalLink } from "lucide-react";

function WebsiteViewer({ urls }) {
  const [index, setIndex] = useState(0);

  return (
    <div>

      <NavigationControls
        index={index}
        setIndex={setIndex}
        total={urls.length}
      />

      <div className="border rounded-xl overflow-hidden shadow-sm">
        <iframe
          src={urls[index]}
          title="website"
          className="w-full h-[500px]"
        />
      </div>

      <div className="text-center mt-3">
        <p className="text-gray-500 text-sm">
          If website is not visible, open it in a new tab
        </p>

        <a
          href={urls[index]}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:underline mt-1"
        >
          <ExternalLink size={16} />
          Open Website
        </a>
      </div>

    </div>
  );
}

export default WebsiteViewer;