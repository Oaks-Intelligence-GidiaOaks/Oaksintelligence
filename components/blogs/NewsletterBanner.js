"use client";
import AppContext from "@/contexts/AppContext";
import React, { useContext, useState } from "react";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import newsletterBg from "@/assets/newsletter-bg.jpg";
import Image from "next/image";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { AnimatePresence, motion } from "framer-motion";
import NewsLetterSubscribe from "../SecondaryNewsletter";
import BlogNewsletterModal from "../BlogNewsletterModal";

function NewsletterBanner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
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
              onClick={() => {
                setShowModal(true);
              }}
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
        {showModal && <BlogNewsletterModal setShowModal={setShowModal} />}
      </AnimatePresence>
    </div>
  );
}

export default NewsletterBanner;
