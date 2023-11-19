/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
// import { useClient } from "next/server";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";
import AppContext from "@/contexts/AppContext";
import Link from "next/link";
import NewsletterBanner from "@/components/blogs/NewsletterBanner";
import NewsletterCard from "@/components/newsletter/NewsletterCard";

const Newsletters = () => {
  const [pageData, setPageData] = useState(null);
  const [count, setCount] = useState(10);
  const [offset, setOffset] = useState(0);
  const { setTheme } = useContext(AppContext);

  useEffect(() => {
    console.log("ran use effect");
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/get_campaigns?offset=${offset}&status=sent&count=10`
        );

        const data = await response.json();
        setPageData(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [offset]);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  const nextPage = () => {
    if (!(pageData.count < offset)) {
      setOffset(offset + 10);
    }
  };

  const prevPage = () => {
    if (offset <= 10) {
      setOffset(0);
    } else {
      setOffset(offset - count);
    }
  };

  let pageNo = Math.floor(offset / count) + 1;

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <div className="mx-auto max-w-[1440px] py-5">
        <NewsletterBanner />

        {/* Content goes in here */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 px-[5%] sm:px-[10%]">
          {pageData?.data?.length > 0 &&
            pageData?.data?.map((item) => (
              <NewsletterCard key={item.id} data={item} />
            ))}
        </div>

        {/* pagination */}
        <div className="text-sm mt-10 mx-auto flex justify-between md:w-1/2 items-center poppins-4">
          <button
            onClick={prevPage}
            className="bg-gray-200 text-sm p-2 rounded-md text-gray-500"
          >
            Previous
          </button>

          <span className="dark:text-gray-300">Page {pageNo}</span>

          <button
            onClick={nextPage}
            className="bg-gray-200 text-sm p-2 rounded-md text-gray-500"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Newsletters;
