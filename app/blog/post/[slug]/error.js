"use client"; // Error components must be Client Components

import { useEffect } from "react";
import oops from "@/assets/oops.png";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white dark:bg-main">
      {/* error title */}
      <div className="mx-auto flex flex-col w-[clamp(240px,40%,600px)] items-center justify-center gap-4">
        <h2 className="text-4xl py-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
          Something went wrong!
        </h2>
        <Image alt="no-results" src={oops} className="w-full" width={"40%"} />
        <button
          className="poppins-4 text-base py-2 px-4 dark:bg-main bg-white dark:text-white text-main-light rounded-3xl hover:bg-[#6FBF21] hover:text-white dark:hover:bg-[#6FBF21] dark:hover:text-main-light transition-all duration-300 ease-in-out"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
