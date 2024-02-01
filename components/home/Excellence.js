import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import experience from "../../assets/experience/experience.webp";
import Link from "next/link";

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

const nestedItemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Excellence = () => {
  return (
    <div className="w-full bg-[#E9FFEC] dark:bg-[#e9ffec08] transition-[background] duration-500 ease-in-out overflow-hidden">
      <div className="relative flex justify-between mx-auto max-w-[1560px] py-[20vmin] px-[5%] sm:px-[10%] transition-[background] duration-500 ease-in-out">
        <motion.div className="absolute -translate-y-1/4 translate-x-1/4 right-0 top-0 w-[30vw] ball-gradient h-[30vw] max-w-[460px] max-h-[460px] rounded-full" />
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, type: "spring", bounce: 0.4 },
          }}
          className="w-full relative z-10 gap-[10%] rounded-[30px] flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 items-center justify-between bg-main-light dark:glassmorphism-sec p-[5%] transition-[background] duration-500 ease-in-out"
        >
          <motion.div
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            className="flex flex-col gap-4"
          >
            <motion.p
              variants={itemReveal}
              className="text-[1.3rem] sm:text-[2rem] pt-10 sm:pt-0 text-main dark:gradient-text"
            >
              <span className="block poppins-4">
                <span className="whitespace-nowrap sm:whitespace-normal">
                  Scalable & Secure{" "}
                </span>{" "}
                <span className="poppins-6 whitespace-nowrap sm:whitespace-normal">
                  Technological Excellence
                </span>
              </span>
            </motion.p>
            <motion.p
              variants={itemReveal}
              className="poppins-4 text-secondary-main text-lg"
            >
              Our team consists of seasoned professionals specializing in
              concurrency, functionality, security, interoperability, quality
              assurance, & certification.
            </motion.p>
            <Link
              href={"/about#business"}
              className="flex items-center justify-center w-[45%] py-3 rounded-lg border border-solid border-secondary-green mt-6 hover:-hue-rotate-[45deg] transition-all duration-300 ease"
            >
              <motion.button variants={nestedItemLeft}>
                <span className="poppins-4 text-main text-lg">Learn More</span>
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [1, 1, 1], translateY: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="w-full"
          >
            <Image alt="experience" src={experience} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Excellence;
