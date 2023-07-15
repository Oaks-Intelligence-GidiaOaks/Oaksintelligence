"use client";
import AppContext from "@/contexts/AppContext";
import React, { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import newsletterAnimation from "../assets/newsletter.json";
import NewsLetterSubscribe, { NewsLetter } from "./home/NewsLetterSubscribe";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

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
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
          className="fixed z-40 top-0 left-0 w-screen h-screen overflow-y-scroll px-3 pt-10 bg-[#0000005b] backdrop-blur-md flex justify-center items-center"
        >
          <div className="absolute z-50 top-0 left-0 pt-3 pr-3  w-full flex justify-end">
            <IoClose
              onClick={() => {
                setShowNewsletter(false);
                sessionStorage.setItem("oawevi", "false");
              }}
              size={28}
              className="text-[#ffffff] hover:text-[#f7ab0a] transition-all duration-300 ease-in-out cursor-pointer"
            />
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
            <Lottie
              className="w-[clamp(240px,40%,180px)] hidden min-[680px]:block "
              animationData={newsletterAnimation}
              loop={true}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsLetterModal;
