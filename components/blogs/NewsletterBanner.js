import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";

function NewsletterBanner() {
  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
        <div className="w-full min-h-[20vh] gold-gradient-bg rounded-md"></div>
      </div>
      <hr className="border-[#f7ab0a]" />
    </div>
  );
}

export default NewsletterBanner;
