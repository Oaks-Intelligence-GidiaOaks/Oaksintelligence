import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { dashboardInstructions } from "@/constants";

const containerReveal = {
  hidden: { opacity: 0, y: 200 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};
const itemRevealLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const itemRevealRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
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
      staggerChildren: 0.3,
      delayChildren: 0.9,
    },
  },
};
const rowReveal = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const DashboardInstructions = () => {
  return (
    <div className="w-full relative pb-10 sm:pb-[5vh]" id="instructions">
      <div className="flex z-10 relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full min-h-[100px] pt-[7%] pb-[5%]"
        >
          <motion.p
            variants={itemRevealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[1.5rem] sm:text-[2.3rem] gradient-text"
          >
            <span className="block text-left poppins-4">
              <span>Using the </span>
              <span className="poppins-6">Dashboard</span>
            </span>
          </motion.p>
        </motion.div>
        {/* {theme === "light" ? (
          <>
            <div className="w-full hidden md:flex">
              <motion.div
                variants={cardItemsReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-[55%] flex flex-col flex-wrap items-start justify-between gap-y-6"
              >
                {missions.slice(0, -1).map((mission, i) => (
                  <motion.div
                    variants={rowReveal}
                    key={i}
                    className="flex items-start gap-[clamp(20px,5%,36px)] pr-[10%]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                className="w-[40%] grid gap-3 image-grid"
              >
                <Image alt="image-1" src={image1} className="grid-area-i" />
                <Image alt="image-2" src={image2} className="grid-area-ii" />
                <Image alt="image-3" src={image3} className="grid-area-iii" />
              </motion.div>
            </div>
            <motion.div
              variants={cardItemsReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full md:hidden mt-4 flex flex-col"
            >
              <motion.div
                variants={rowReveal}
                className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6"
              >
                {missions.slice(0, 2).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div
                variants={rowReveal}
                className="w-[100%] flex justify-between my-6"
              >
                <Image alt="image-1" src={image1} className="flex-[0.48]" />
                <Image alt="image-2" src={image2} className="flex-[0.48]" />
              </motion.div>
              <motion.div
                variants={rowReveal}
                className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6"
              >
                {missions.slice(2, 4).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div
                variants={rowReveal}
                className="w-[100%] flex justify-between my-6"
              >
                <Image alt="image-3" src={image3} className="grid-area-iii" />
              </motion.div>
              <motion.div
                variants={rowReveal}
                className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6"
              >
                {missions.slice(4, -1).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </>
        ) : 
        ( */}
        <motion.div
          variants={cardItemsReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-wrap justify-center sm:justify-between gap-y-6 mt-4"
        >
          {dashboardInstructions.map((mission, i) => (
            <motion.div
              variants={rowReveal}
              key={i}
              className="flex items-start glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec w-full sm:w-[clamp(240px,48%,562px)] py-6 px-3 sm:p-10 gap-3 sm:gap-[clamp(20px,5%,36px)]"
            >
              <div className="flex items-center justify-center icon-gradient-bg p-[6px] rounded-md w-[22%] sm:w-[18%]">
                <Image
                  alt={mission.title}
                  src={mission.icon}
                  className="brightness-[2000%]"
                />
              </div>
              <div className="flex flex-col justify-start gap-y-4">
                <p className="poppins-5 gold-gradient-text text-[18px]">
                  {mission.title}
                </p>
                <p className="text-secondary-main-light dark:text-main poppins-4">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* )} */}
        {/* <Image alt="glow" src={Glow} className="absolute -top-1/3 -left-1/4" /> */}
      </div>
      {/* <Image
        alt="oaks-watermark"
        src={OaksWatermark}
        className={`absolute hidden sm:block bottom-0 left-1/2 -translate-x-1/2 z-0 opacity-0 grayscale invert brightness-[50%] dark:invert-0 dark:brightness-[150%]`}
      /> */}
    </div>
  );
};

export default DashboardInstructions;
