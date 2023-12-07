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
import Skeleton from "react-loading-skeleton";
import { AnimatePresence, motion } from "framer-motion";

const Newsletters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  const [count, setCount] = useState(10);
  const [offset, setOffset] = useState(0);
  const { setTheme } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/get_campaigns?offset=${offset}&status=sent&count=10`
        );

        const data = await response.json();
        setPageData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
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
        {/* <NewsletterBanner /> */}

        {/* Content goes in here */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 px-[5%] sm:px-[10%]">
          <AnimatePresence mode="wait">
            {isLoading && (
              <>
                {Array(6)
                  .fill(0)
                  .map((card, i) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={i}
                    >
                      <div className=" my-3 py-3 p-4 h-64 drop-shadow-sm rounded-md flex flex-col gap-2 glassmorphism dark:glassmorphism-sec-link">
                        <div className="flex items-end gap-2">
                          {/* avatar */}

                          <Skeleton width={60} height={40} borderRadius={10} />

                          <span className="text-gray-500 poppins-5">
                            <Skeleton width={"60%"} />
                          </span>

                          {/* time ago time */}
                          <span className="text-xs ml-auto text-gray-500 poppins-4">
                            <Skeleton width={100} height={20} />
                          </span>
                        </div>

                        <div>
                          <Link href={""}>
                            <h5 className="font-semibold mb-3 poppins-6 capitalize dark:text-gray-300">
                              <Skeleton width={"60%"} />
                            </h5>
                          </Link>

                          <p className="text-gray-500 poppins-4 line-clamp-4">
                            <Skeleton count={3} />
                          </p>
                        </div>

                        <div className="flex gap-4 mt-auto">
                          <span className=" rounded-md text-xs poppins-4">
                            <Skeleton width={80} height={24} />
                          </span>

                          <Link target="blank" className="ml-auto" href={""}>
                            <Skeleton width={70} />
                          </Link>

                          {/* dots icon */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </>
            )}
            {!isLoading &&
              pageData?.data?.length > 0 &&
              pageData?.data?.map((item) => (
                <NewsletterCard key={item.id} data={item} />
              ))}
          </AnimatePresence>
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

          <Skeleton />

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
