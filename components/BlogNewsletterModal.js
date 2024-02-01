import { motion } from "framer-motion";
import NewsLetterSubscribe from "./home/NewsLetterSubscribe";
// import Lottie from "lottie-react";
import React, { useState } from "react";
import BlogNewsLetterSubscribe from "./BlogNewsletterSubscribe";
import newsletterAnimation from "../assets/newsletter.json";
import Image from "next/image";
import mailbox from "../assets/mailbox.svg";

const BlogNewsletterModal = ({ setShowModal }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
        className="fixed z-40 top-0 left-0 w-screen h-screen overflow-y-scroll px-3 pt-10 bg-[#0000005b] backdrop-blur-md flex justify-center items-center"

        // className="flex items-center justify-center fixed top-0 left-0 z-50 backdrop-blur-md w-full h-screen overflow-y-scroll"
      >
        <div className="absolute z-50 top-0 left-0 pt-3 pr-3  w-full flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            fill="none"
            className=""
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
              clipRule="evenodd"
              className="text-[#ffffff] hover:text-[#f7ab0a] transition-all duration-300 ease-in-out cursor-pointer"
            />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-around w-[clamp(500px,100%,280px)] min-[680px]:w-[clamp(720px,70%,280px)] bg-white shadow-2xl dark:glassmorphism-sec dark:backdrop-filter-[20px] rounded-lg p-5"
        >
          <div className="flex flex-col gap-4 w[clamp(680px,90%,240px)] min-[680px]:w-[50%] ">
            <p className="font-semibold dark:gradient-text text-main-light text-2xl poppins-7">
              Join Our EcoWeather Newsletter
            </p>
            <p className="poppins-4 dark:text-secondary-main text-secondary-main-light">
              🌿 Stay Ahead of the Financial Forecast and Elevate Your Financial
              Intelligence with Ecoweather! 🌦️
              <br />
            </p>
            <BlogNewsLetterSubscribe setShowModal={setShowModal} />
          </div>
          <div className="w-[clamp(240px,40%,180px)] hidden min-[680px]:block ">
            <Image src={mailbox} alt="mailbox" />
          </div>
          {/* <Lottie
            className="w-[clamp(240px,40%,180px)] hidden min-[680px]:block "
            animationData={newsletterAnimation}
            loop={true}
          /> */}
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
          className="relative rounded-xl overflow-hidden gap-10 max-w-[360px] h-fit flex flex-col items-center justify-center p-6 pb-10 "
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-around w-[clamp(500px,100%,280px)] min-[680px]:w-[clamp(720px,70%,280px)] bg-white shadow-2xl dark:glassmorphism-sec dark:backdrop-filter-[20px] rounded-lg p-5"
          >
            <div className="flex flex-col gap-4 w[clamp(680px,90%,240px)] min-[680px]:w-[50%] ">
              <p className="font-semibold dark:gradient-text text-main-light text-2xl poppins-7">
                Join Our Newsletter
              </p>
              <p className="poppins-4 dark:text-secondary-main text-secondary-main-light">
                Stay in the loop with exclusive updates, insider tips, and
                exciting surprises on our products.
                <br />
                Subscribe to our newsletter and be the first to know!
              </p>
            </div>
            <div className="relative z-50 flex mb-10 items center justify-center">
              <BlogNewsLetterSubscribe setShowModal={setShowModal} />
            </div>
            <Lottie
              className="w-[clamp(240px,40%,180px)] hidden min-[680px]:block "
              animationData={newsletterAnimation}
              loop={true}
            />
          </motion.div>
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default BlogNewsletterModal;
