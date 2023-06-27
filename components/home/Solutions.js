import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Agriculture from "../../assets/solutions/agriculture.svg";
import Data from "../../assets/solutions/data.svg";
import Education from "../../assets/solutions/education.svg";
import Electricity from "../../assets/solutions/electricity.svg";
import Entertainment from "../../assets/solutions/entertainment.svg";
import Finance from "../../assets/solutions/finance.svg";
import HealthCare from "../../assets/solutions/health-care.svg";
import RealEstate from "../../assets/solutions/real-estate.svg";
import Glow from "../../assets/solutions/glow.svg";

import Tilt from "react-parallax-tilt";
const containerReveal = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};
const itemReveal = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
const cardItems1Reveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.3,
    },
  },
};
const cardItems2Reveal = {
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
const row1Reveal = {
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
const row2Reveal = {
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

const Solutions = () => {
  return (
    <div className="w-full">
      <motion.div
        variants={containerReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible"
      >
        {/* Title and subtitle */}
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full min-h-[100px] pt-[7%] pb-[5%]"
        >
          <motion.p
            variants={itemReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[1.4rem] sm:text-[2.3rem] text-main-light dark:gradient-text"
          >
            <p className="poppins-4">
              <span>Solutions For All </span>
              <span className="poppins-6 whitespace-nowrap sm:whitespace-normal">
                Sectors & Industries
              </span>
            </p>
          </motion.p>
          <motion.p
            variants={itemReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg pt-5"
          >
            By staying at the forefront of technological advancements, we ensure
            that our products are fast, efficient and capable of adapting to the
            rapidly changing demands of the modern business landscape.
          </motion.p>
        </motion.div>
        <motion.div
          variants={itemReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col w-full justify-between gap-y-3 sm:gap-[clamp(20px,5vw,30px)] mt-10"
        >
          <motion.div
            variants={cardItems1Reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-between w-full flex-wrap gap-y-3 sm:gap-y-0"
          >
            <motion.div
              variants={row1Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="data-analytics" src={Data} className="w-[30%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-center text-base sm:text-lg">
                  Data Analytics
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row1Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="real-estate" src={RealEstate} className="w-[30%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Real Estate
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row1Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="energy" src={Electricity} className="w-[19%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Energy
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row1Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image
                  alt="entertainment"
                  src={Entertainment}
                  className="w-[30%]"
                />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Entertainment
                </p>
              </Tilt>
            </motion.div>
          </motion.div>
          <motion.div
            variants={cardItems2Reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-between w-full flex-wrap gap-y-3 sm:gap-y-0"
          >
            <motion.div
              variants={row2Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="education" src={Education} className="w-[30%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Education
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row2Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="health-care" src={HealthCare} className="w-[30%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Health Care
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row2Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image alt="fin-tech" src={Finance} className="w-[30%]" />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Fin Tech
                </p>
              </Tilt>
            </motion.div>
            <motion.div
              variants={row2Reveal}
              // viewport={{ once: true }}
              className="flex flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)]"
            >
              <Tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.25}
                scale={1.02}
                glareBorderRadius={30}
                className="flex overflow-hidden flex-col w-full h-full relative z-10 justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
              >
                <Image
                  alt="agriculture"
                  src={Agriculture}
                  className="w-[30%]"
                />
                <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                  Agriculture
                </p>
              </Tilt>
            </motion.div>
          </motion.div>
        </motion.div>
        <Image alt="glow" src={Glow} className="absolute top-0 -right-1/4" />
      </motion.div>
    </div>
  );
};

export default Solutions;
