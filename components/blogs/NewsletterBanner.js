"use client";
import AppContext from "@/contexts/AppContext";
import React, { useContext, useState } from "react";
import NewsLetterSubscribe from "../home/NewsLetterSubscribe";
import { GrClose } from "react-icons/gr";
import newsletterBg from "@/assets/newsletter-bg.jpg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

function NewsletterBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
        <div className="w-full min-h-[20vh] p-3 gold-gradient-bg rounded-md">
          <h1 className="poppins-7 text-white dark:text-main-light text-3xl transition-all duration-300 ease-in-out">
            Subscribe to our Newsletter
          </h1>
          <p className="poppins-4 text-white dark:text-main-light text-base transition-all duration-300 ease-in-out mt-3">
            Stay in the loop with exclusive updates, insider tips, and exciting
            surprises - Subscribe to our newsletter and be the first to know!
          </p>
          <div className="flex justify-end items-center mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="py-2 px-4 dark:bg-main bg-white dark:text-white text-main-light rounded-3xl hover:bg-[#6FBF21] hover:text-white dark:hover:bg-[#6FBF21] dark:hover:text-main-light transition-all duration-300 ease-in-out"
            >
              <span className="poppins-4 text-base">Sign up now</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-[#f7ab0a]" />
      {/* Subscribe modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center fixed top-0 left-0 z-50 backdrop-blur-md w-full h-screen overflow-y-scroll"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className="relative rounded-xl overflow-hidden gap-10 max-w-[360px] h-fit flex flex-col items-center justify-center p-6 pb-10 "
            >
              <div className="absolute brightness-[30%]  bg-[url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=900&t=st=1687772731~exp=1687773331~hmac=150e6abd6370800cdaaeac28ee000307b6e75f08511755a9f84d761919f2f1ef)] top-0 left-0 w-full h-full pb-10"></div>
              <div className="relative z-50  w-full flex justify-end">
                <IoClose
                  onClick={() => setShowModal(false)}
                  size={28}
                  className="text-[#ffffff] hover:text-[#f7ab0a] transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="relative z-50 flex mb-10 items center justify-center">
                <NewsLetterSubscribe />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NewsletterBanner;
