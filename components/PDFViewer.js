"use client";

import { pdfjs, Document, Page, Outline } from "react-pdf";
import { useState } from "react";
import { BsCaretLeft } from "@react-icons/all-files/bs/BsCaretLeft";
import { BsCaretRight } from "@react-icons/all-files/bs/BsCaretRight";
import { IoIosAdd } from "@react-icons/all-files/io/IoIosAdd";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const initialLeft = {
  opacity: 0,
  translateX: "-20%",
};
const initialRight = {
  opacity: 0,
  translateX: "20%",
};
const exitLeft = {
  opacity: 0,
  translateX: "-20%",
};
const exitRight = {
  opacity: 0,
  translateX: "20%",
};
const animateIn = {
  opacity: 1,
  translateX: 0,
};

let direction = "right";

const PDFViewer = ({ callback, file }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const handlers = useSwipeable({
  //   onSwipedLeft: (eventData) => {
  //     setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  //   },
  //   onSwipedRight: (eventData) => {
  //     setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  //   },
  //   // ...config,
  // });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        direction = "left";
        setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
      }
      if (e.key === "ArrowRight") {
        direction = "right";
        setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        // console.log(e);
        if (e.key === "ArrowLeft") {
          direction = "left";
          setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
        }
        if (e.key === "ArrowRight") {
          direction = "right";
          setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
        }
      });
    };
  }, [numPages]);

  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)] backdrop-blur-lg flex flex-col justify-center fixed top-0 left-0 items-center z-[1000000]">
      <div className="w-[clamp(240px,100%,1440px)] items-center flex justify-between px-2 sm:px-5">
        {/* Navigation */}
        <div className="flex items-center gap-3 flex-[0.33]">
          {/* <div className="flex gap-0 sm:gap-4">
            <button
              onClick={() => {
                setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
              }}
              disabled={pageNumber <= 1}
              className="hover:bg-gray-700 sm:p-1 rounded-md transition-all"
            >
              <BsCaretLeft
                size={20}
                title="Previous Page"
                color={pageNumber <= 1 ? "gray" : "white"}
              />
            </button>
            <button
              onClick={() => {
                setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
              }}
              disabled={pageNumber === numPages}
              className="hover:bg-gray-700 sm:p-1 rounded-md transition-all"
            >
              <BsCaretRight
                size={20}
                title="Next Page"
                color={pageNumber >= numPages ? "gray" : "white"}
              />
            </button>
          </div> */}
          <p className="whitespace-nowrap poppins-4">
            Page{" "}
            <input
              title="Current page"
              value={pageNumber}
              className="hidden sm:inline max-w-[50px] rounded-md bg-transparent text-white border-white border px-2"
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                if (Number(e.target.value) < 1) return;
                if (Number(e.target.value) > numPages) return;

                setPageNumber(Number(e.target.value));
              }}
            />{" "}
            <span className="sm:hidden">{pageNumber}</span> of {numPages}
          </p>
        </div>
        <div className="flex items-center gap-1 flex-[0.33] justify-center">
          <button
            onClick={() =>
              setScale((prev) =>
                prev < 0.1 ? 0 : parseFloat(Number(prev - 0.1).toFixed(1))
              )
            }
            className="hover:bg-gray-700 p-1 rounded-md transition-all"
          >
            <IoIosRemove size={40} title="Zoom out" />
          </button>
          <p
            title="Scale"
            className="max-w-[150px] rounded-md bg-transparent text-white border-white border px-2 poppins-4"
          >
            <span>{Math.trunc(scale * 100)}%</span>
          </p>
          <button
            onClick={() => {
              setScale((prev) => parseFloat(Number(prev + 0.1).toFixed(1)));
            }}
            className="hover:bg-gray-700 p-1 rounded-md transition-all"
          >
            <IoIosAdd size={40} title="Zoom in" />
          </button>
        </div>
        <div className="flex items-center w-fit sm:flex-[0.33] justify-end">
          <svg
            onClick={() => callback(false)}
            className="text-[#ffffff] hover:text-[#f7ab0a] transition-all duration-300 ease-in-out cursor-pointer"
            width="28"
            height="28"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div
        // {...handlers}
        // style={{ touchAction: "pan-y" }}
        className="max-w-[1560px] w-full flex justify-center h-screen overflow-auto"
      >
        <div className="PdfDiv">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            className="h-[calc(100vh-80px)] transition-all"
          >
            {/* <Outline /> */}

            <button
              onClick={() => {
                direction = "left";
                setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
              }}
              disabled={pageNumber <= 1}
              className="hover:bg-gray-700 sm:p-1 bg-[rgba(0,0,0,0.2)] rounded-full transition-all fixed top-1/2 -translate-y-1/2 left-[3vw] z-[10000]"
            >
              <BsCaretLeft
                title="Previous Page"
                color={pageNumber <= 1 ? "gray" : "white"}
                className="w-[40px] h-[40px] sm:w-[100px] sm:h-[100px]"
              />
            </button>
            <button
              onClick={() => {
                direction = "right";
                setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
              }}
              disabled={pageNumber === numPages}
              className="hover:bg-gray-700 sm:p-1 bg-[rgba(0,0,0,0.2)] rounded-full transition-all fixed top-1/2 -translate-y-1/2 right-[3vw] z-[10000]"
            >
              <BsCaretRight
                title="Next Page"
                color={pageNumber >= numPages ? "gray" : "white"}
                className="w-[40px] h-[40px] sm:w-[100px] sm:h-[100px]"
              />
            </button>
            <AnimatePresence mode="wait">
              {Array(numPages)
                .fill(0)
                .map((_, i) => i + 1)
                .map(
                  (page) =>
                    pageNumber === page && (
                      <motion.div
                        key={page}
                        initial={
                          direction === "right" ? initialRight : initialLeft
                        }
                        animate={animateIn}
                        exit={direction === "right" ? exitLeft : exitRight}
                      >
                        <Page
                          pageNumber={page}
                          height={
                            document.getElementsByClassName("PdfDiv")[0]
                              ?.clientHeight * 1 ?? 150
                          }
                          renderAnnotationLayer={false}
                          renderTextLayer={false}
                          scale={scale}
                          _className="w-full"
                        />
                      </motion.div>
                    )
                )}
            </AnimatePresence>
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
