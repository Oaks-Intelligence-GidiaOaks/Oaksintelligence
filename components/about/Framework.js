import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import Glow from "../../assets/solutions/glow.svg";
import { framework } from "../../constants";

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

const Framework = () => {
  return (
    <div className="w-full">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1560px] py-5 px-5 sm:px-[10%] items-center overflow-visible">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full min-h-[100px] pt-[7%] pb-[5%]"
        >
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[1.8rem] sm:text-[2.3rem] text-main-light dark:gradient-text"
          >
            <span className="block text-center poppins-4">
              <span>Our Framework </span>
              <span className="poppins-6">at a glance</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemRevealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 text-secondary-main-light dark:text-secondary-main text-xl max-w-[784px] mx-auto text-center pt-5"
          >
            Driven by a commitment to excellence, we aim to revolutionize
            industries through our innovative software solutions, and global
            collaborations
          </motion.p>
        </motion.div>
        <motion.div
          variants={cardItemsReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-wrap justify-between gap-y-6 mt-4"
        >
          {framework.map((framework, i) => (
            <motion.div
              variants={rowReveal}
              key={i}
              className="flex items-start w-full sm:w-[clamp(235px,33%,562px)] py-10 gap-[clamp(10px,5%,18px)]"
            >
              <div className="flex items-center justify-end p-0 rounded-md w-[clamp(160px,30%,200px)]">
                <Image alt={framework.title} src={framework.icon} />
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="poppins-5 text-main-light dark:text-main text-[18px]">
                  {framework.title}
                </p>
                <p className=" text-tertiary-light dark:text-secondary-main poppins-4 text-base leading-[34px]">
                  {framework.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Image
          alt="glow"
          src={Glow}
          className="absolute -top-full -left-1/4 z-50 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Framework;
