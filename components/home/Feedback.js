"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { feedbacks } from "@/constants";

const containerReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const cardItemsReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      delay: 1,
      staggerChildren: 0.3,
      delayChildren: 0.9,
    },
  },
};
const cardReveal = {
  hidden: { opacity: 0, scale: 1.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const Feedback = () => {
  const [current, setCurrent] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    setCurrentFeedback(`${current * 300}`);
    console.log(`${current * 300}`);
  }, [current]);

  const tailwindGradients = [
    "bg-gradient-to-b from-green-300 via-blue-500 to-purple-600",
    "bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400",
    "bg-gradient-to-b from-red-200 via-red-300 to-yellow-200",
    "bg-gradient-to-b from-red-200 via-red-300 to-yellow-200",
    "bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500",
  ];

  return (
    <div className="w-full bg-[#155F60] dark:bg-[#e9ffec08] transition-[background] duration-500 ease-in-out">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1.5, type: "spring", bounce: 0.4 },
        }}
        className="flex flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center"
      >
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          className="w-full min-h-[100px] pt-[7%] pb-[5%]"
        >
          <motion.p
            variants={itemReveal}
            className="text-[1.5rem] sm:text-[2.3rem] gradient-text"
          >
            <span className="block poppins-4">
              <span>Our Customer </span>
              <span className="poppins-6">Feedback</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemReveal}
            className="poppins-4 text-main text-base mt-3 mb-2 sm:mt-0 sm:mb-0 "
          >
            Don’t take our word for it. Trust our customers
          </motion.p>
        </motion.div>
        <div className="relative max-w-[280px] min-[980px]:max-w-full min-[980px]:mb-10">
          <motion.div
            variants={cardItemsReveal}
            initial="hidden"
            whileInView="show"
            style={{
              transform: `translateX(-${currentFeedback}px)`,
              transition: "all 300ms ease",
            }}
            className={`flex mx-auto w-fit gap-4 overflow-scroll-x scrollbar-hidden flex-nowrap`}
          >
            {feedbacks.map((feedback, ind) => (
              <motion.div
                variants={cardReveal}
                key={ind}
                className="flex flex-col gap-3 w-[100%] min-w-[280px] sm p-4 glassmorphism-sec-light dark:glassmorphism-sec rounded-lg dark:rounded-lg"
              >
                <div alt="avatar" src={feedback.avatar}>
                  <p
                    className={`px-2 py-2 ${tailwindGradients[ind]} via-red-500 to-yellow-500 rounded w-fit`}
                  >
                    {feedback.name.split(" ").map((word, i) => (
                      <span key={i} className="text-white manrope-6 text-2xl">
                        {word[0]}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="manrope-6 text-lg text-main ">{feedback.name}</p>
                <p className="poppins-4 text-sm text-main ">
                  {feedback.comment}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="min-[980px]:hidden min-w-[280px] max-w-[280px] h-fit flex justify-between items-center pt-[5vh] pb-[10vh]">
          <BsArrowLeft
            size={20}
            color="#ffffff"
            onClick={() => {
              setCurrent((prev) => prev - 1);
            }}
            className={`${
              current === 0
                ? "opacity-20 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          />
          <div className="flex gap-5 items-center justify-center">
            {feedbacks.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === current ? "bg-secondary-green" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
          <BsArrowRight
            size={20}
            color="#ffffff"
            onClick={() => {
              console.log(`${current * 300}px`);
              setCurrent((prev) => prev + 1);
            }}
            className={`${
              current === feedbacks.length - 1
                ? "opacity-20 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Feedback;
