import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function NavigationControls({ index, setIndex, total }) {
  return (
    <div className="flex justify-center items-center gap-4 mb-4">
      
      <button
        onClick={() => setIndex(index - 1)}
        disabled={index === 0}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition flex items-center"
      >
        <FiChevronLeft size={20} />
      </button>

      <span className="font-semibold text-gray-700">
        {index + 1} / {total}
      </span>

      <button
        onClick={() => setIndex(index + 1)}
        disabled={index === total - 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition flex items-center"
      >
        <FiChevronRight size={20} />
      </button>

    </div>
  );
}

export default NavigationControls;