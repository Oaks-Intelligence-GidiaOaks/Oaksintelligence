"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ placeholder, category }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (query.length < 1) return;

    router.push(`/blog/search?query=${query}`);
  };
  return (
    <div className="relative p-[4px] flex w-[clamp(280px,30%,480px)] rounded-3xl border border-solid border-gray-300 bg-transparent dark:glassmorphism-sec-link dark:border-transparent dark:rounded-3xl">
      <input
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleEnterKey}
        placeholder={placeholder ?? "Search blog"}
        className="flex-[0.8] poppins-4 outline-none bg-transparent px-4 py-2 rounded-3xl text-main-light dark:text-main"
      />
      <button
        onClick={handleSearch}
        className="flex-[0.2] flex justify-center items-center gold-gradient-bg rounded-3xl hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
      >
        <BiSearch size={24} className="text-main" />
      </button>
    </div>
  );
};

export default SearchBar;
