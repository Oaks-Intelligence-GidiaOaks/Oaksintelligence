"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

export const ComicsListLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
      {Array(6)
        .fill(0)
        .map((card, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={i}
          >
            <div className="flex flex-col group cursor-pointer rounded-lg overflow-hidden shadow-lg dark:glassmorphism-sec-link dark:shadow-none dark:rounded-3xl ">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Skeleton width={"100%"} height={"100%"} />
                <div className="absolute bottom-0 w-full bg-opacity-20 h-10 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <Skeleton width={"100%"} height={20} />
                  {/* <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {comic.categories.map((category, i) => (
                        <div
                          key={i}
                          className="bg-[#f7ab0a] text-center text-black px-3 pv-1 rounded-full text-sm font-semibold"
                        >
                          <p className="jost">{category.title}</p>
                        </div>
                      ))}
                    </div> */}
                </div>
              </div>
              <div className="mt-5 flex-1 px-5">
                <Skeleton width={"100%"} height={20} />
                <div className="h-4" />
                <Skeleton width={"100%"} height={20} />
                <Skeleton width={"100%"} height={20} />
                <Skeleton width={"60%"} height={20} />

                <div className="h-6" />
                <Skeleton width={60} height={18} borderRadius={10} />
                <div className="h-6" />
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
};
