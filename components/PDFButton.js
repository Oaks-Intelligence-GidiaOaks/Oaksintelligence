"use client";

import { useState } from "react";
import PDFViewer from "./PDFViewer";

const PDFButton = ({ url }) => {
  const [showReader, setShowReader] = useState(false);
  return (
    <>
      {showReader ? <PDFViewer callback={setShowReader} file={url} /> : null}
      <button
        onClick={() => setShowReader(!showReader)}
        className="py-2 px-4 dark:bg-main bg-white relative z-[10] dark:text-white text-main-light rounded-lg hover:bg-[#6FBF21] hover:text-white dark:hover:bg-[#6FBF21] dark:hover:text-main-light transition-all duration-300 ease-in-out"
      >
        <span className="poppins-4 text-sm">Read now</span>
      </button>
    </>
  );
};

export default PDFButton;
