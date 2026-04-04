import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function NavigationControls({ index, setIndex, total }) {
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-600 mt-2 text-center">
          {index + 1} of {total} websites
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between">
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="group inline-flex items-center gap-2 rounded-lg bg-slate-200 px-5 py-2.5 font-medium text-slate-900 transition-all duration-200 hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Site Counter */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 border border-slate-200">
          <span className="text-sm text-slate-700">Viewing</span>
          <span className="text-lg font-bold text-blue-600">{index + 1}</span>
          <span className="text-sm text-slate-500">/</span>
          <span className="text-lg font-bold text-slate-700">{total}</span>
        </div>

        {/* Mobile Counter */}
        <div className="sm:hidden px-3 py-2 rounded-lg bg-slate-100 border border-slate-200">
          <p className="text-xs text-slate-600">Site</p>
          <p className="text-lg font-bold text-blue-600">{index + 1}/{total}</p>
        </div>

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === total - 1}
          className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Quick Navigation Dots */}
      {total <= 10 && (
        <div className="flex justify-center gap-1.5 flex-wrap">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              title={`Go to website ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavigationControls;