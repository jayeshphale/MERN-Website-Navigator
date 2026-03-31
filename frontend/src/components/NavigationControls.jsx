import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function NavigationControls({ index, setIndex, total }) {
  return (
    <div className="flex justify-center items-center gap-4 mb-4">

      <button
        onClick={() => setIndex(index - 1)}
        disabled={index === 0}
        className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        <ArrowLeft size={16} />
        Previous
      </button>

      <span className="text-gray-700 font-medium">
        {index + 1} / {total}
      </span>

      <button
        onClick={() => setIndex(index + 1)}
        disabled={index === total - 1}
        className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Next
        <ArrowRight size={16} />
      </button>

    </div>
  );
}

export default NavigationControls;