import NewsletterBanner from "@/components/blogs/NewsletterBanner";
import SearchBar from "@/components/blogs/SearchBar";
import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
      <NewsletterBanner />
      {/* Search bar */}
      <div className="w-full">
        <div className="flex mx-auto justify-end max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
          <SearchBar />
        </div>
      </div>

      {/* Results title */}
      <div className="w-full">
        <div className="flex flex-col mx-auto items-start max-w-[1440px] pb-5 px-[5%] sm:px-[10%]">
          <p>
            <span className="text-base poppins-4 text-main-light dark:text-main">
              Searching for results
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Loading;
