"use client";
import AppContext from "@/contexts/AppContext";
import React, { useContext, useEffect } from "react";
// import Lottie from "lottie-react";
import newsletterAnimation from "../assets/newsletter.json";
import NewsLetterSubscribe, { NewsLetter } from "./home/NewsLetterSubscribe";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { motion, AnimatePresence } from "framer-motion";
import mailbox from "../assets/mailbox.svg";
import Image from "next/image";

const NewsLetterModal = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const { theme, setTheme, showNewsletter, setShowNewsletter } =
    useContext(AppContext);

  useEffect(() => {
    sessionStorage.getItem("oawevi")
      ? setShowNewsletter(false)
      : setShowNewsletter(true);
  }, []);

  return (
    <AnimatePresence>
      {showNewsletter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 10 } }}
          exit={{ opacity: 0 }}
          className="fixed z-40 top-0 left-0 w-screen h-screen overflow-y-scroll px-3 pt-10 bg-[#0000005b] backdrop-blur-md flex justify-center items-center"
        >
          <div className="absolute z-50 top-0 left-0 pt-3 pr-3  w-full flex justify-end">
            <svg
              className="text-[#ffffff] hover:text-[#f7ab0a] transition-all duration-300 ease-in-out cursor-pointer"
              width="28"
              height="28"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setShowNewsletter(false);
                sessionStorage.setItem("oawevi", "false");
              }}
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-around w-[clamp(280px,100%,500px)] min-[680px]:w-[clamp(280px,70%,720px)] bg-white shadow-2xl dark:glassmorphism-sec dark:backdrop-filter-[20px] rounded-lg p-5"
          >
            <div className="flex flex-col gap-4 w[clamp(680px,90%,240px)] min-[680px]:w-[50%] ">
              <p className="font-semibold dark:gradient-text text-main-light text-2xl poppins-7">
                Join Our EcoWeather Newsletter
              </p>
              <p className="poppins-4 dark:text-secondary-main text-secondary-main-light">
                🌿 Stay Ahead of the Financial Forecast and Elevate Your
                Financial Intelligence with Ecoweather! 🌦️
                <br />
              </p>
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <NewsLetter
                    subscribe={subscribe}
                    status={status}
                    message={message}
                    isHome={true}
                    setShowNewsletter={setShowNewsletter}
                  />
                )}
              ></MailchimpSubscribe>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsLetterModal;
