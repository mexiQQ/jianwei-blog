import React, { useEffect } from "react";

const CvNotice = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Prevent background scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl p-6 sm:p-8"
        style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer"
        >
          ×
        </button>

        <div className="text-blue-800 text-lg font-bold mb-3">
          CV temporarily unavailable
        </div>

        <p className="text-sm leading-relaxed text-gray-700">
          My CV is currently hidden because it contains details of papers{" "}
          <span className="italic">under review</span>.
        </p>

        <p className="text-sm leading-relaxed text-gray-700 mt-3">
          If you are a recruiter, please feel free to reach out by email and
          I will gladly share the latest version:
        </p>
        <p className="text-sm mt-2">
          <a className="text-blue-800 hover:underline" href="mailto:ljw040426@gmail.com">
            ljw040426@gmail.com
          </a>
          <span className="mx-2 text-gray-400">·</span>
          <a className="text-blue-800 hover:underline" href="mailto:jli265@ncsu.edu">
            jli265@ncsu.edu
          </a>
        </p>

        <p className="text-sm leading-relaxed text-gray-700 mt-4">
          I am actively seeking <strong>2027 Research Scientist Intern</strong> or{" "}
          <strong>full-time</strong> opportunities. Thank you for your interest!
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-sm rounded bg-blue-800 text-white hover:bg-blue-900 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvNotice;
