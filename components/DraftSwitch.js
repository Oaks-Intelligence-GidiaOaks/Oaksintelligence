import Link from "next/link";
import { MdPreview } from "react-icons/md";

import React from "react";

const DraftSwitch = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 shadow-2xl flex gap-x-10 gold-gradient-bg dark:glassmorphism-sec-link rounded-[100px_!important] px-4 py-4 min-w-[240px]">
      <p className="dark:text-main font-semibold poppins-4 flex gap-x-2 items-center">
        <MdPreview size={28} />
        <span className="text-xs sm:text-base whitespace-nowrap">
          Draft mode active
        </span>
      </p>
      <Link
        href="/api/exit-draft"
        className="dark:gold-gradient-bg text-xs sm:text-base px-4 py-2 rounded-[20px] hover:text-main hover:bg-main-light jost hue-rotate-60 brightness-[100%] hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 sepia-[20%] flex-1 sm:w-[45%] transition-all duration-300 ease"
      >
        Exit
      </Link>
    </div>
  );
};

export default DraftSwitch;
