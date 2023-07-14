import Image from "next/image";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import People from "../../assets/about/people.svg";
import Ellipse from "../../assets/contact/ellipse.svg";
import AppContext from "@/contexts/AppContext";
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
const nestedItemsReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
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
const nestedItemRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap sm:flex-nowrap justify-between mx-auto max-w-[1440px] min-h-screen pt-5 px-5 sm:px-[10%]">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          animate="show"
          className="flex gap-4 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 sm:h-[calc(100vh-100px)] pt-[10vh] sm:pt-0 sm:pr-[10%]"
        >
          <motion.p variants={itemReveal} className="text-[2.5rem]">
            <span className="block text-main-light dark:text-main poppins-7">
              About Us
            </span>
          </motion.p>
          <motion.p
            variants={itemReveal}
            className="poppins-4 text-[#399944] dark:text-secondary-green text-lg"
          >
            The idea incubation and bootstrapping hub of Gidia Oaks Holding
            Group.
          </motion.p>
          <motion.p
            variants={itemReveal}
            className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg"
          >
            Our focus is on providing fast and efficient software solutions that
            meet the needs of businesses and individuals in a rapidly changing
            world.
          </motion.p>
          <motion.div
            variants={nestedItemsReveal}
            className="flex justify-between"
          >
            {/* <motion.button
              variants={nestedItemLeft}
              className="sm:w-[45%] min-w-[180px] px-4 sm:px-0 py-3 rounded-lg border border-solid border-secondary-green"
            >
              <span className="poppins-4 text-secondary-green text-lg">
                Start a project
              </span>
            </motion.button> */}

            <Link
              href={"/contact"}
              className="flex justify-center sm:w-[45%] min-w-[180px] px-4 sm:px-0 py-3 sm:flex-none rounded-lg border border-solid border-secondary-green hover:-hue-rotate-[45deg] transition-all duration-300 ease"
            >
              <motion.button variants={nestedItemLeft}>
                <span className="poppins-4 text-secondary-green text-base">
                  Start a project
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", bounce: 0.4 },
          }}
          className="w-full overflow-visible sm:w-1/2 mt-6 sm:mt-0 sm:h-[calc(100vh-100px)] flex justify-center items-center"
        >
          <div className="relative overflow-y-hidden flex justify-end items-center w-full h-full">
            <Image
              alt="People"
              src={People}
              className="relative w-[95%] z-20 min-[1300px]:left-[0%]"
            />
            <div className="absolute overflow-hidden w-full h-full">
              <motion.div
                initial={{ opacity: 0, x: "-50%" }}
                whileInView={{
                  opacity: [1, 1, 1],
                  y: [-10, 10, -10],
                  x: ["-50%", "-50%", "-50%"],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute w-[100%] z-10 left-[50%] max-[1300px]:top-[100px] max-[1000px]:top-[150px] max-[800px]:top-[200px] max-[640px]:top-3 top-[50px] -translate-x-[50%]"
              >
                <Image alt="Ellipse" src={Ellipse} className="w-full" />
              </motion.div>
              <div className="absolute top-0 z-10 left-0 w-full h-full invert opacity-0 dark:opacity-100 dark:transparent-gradient-dark dark:invert-0 dark:brightness-100 duration-500 transition-all ease-out"></div>
            </div>
            <div className="absolute top-0 z-30 left-0 w-full h-full invert opacity-0 dark:opacity-100 dark:transparent-gradient-dark dark:invert-0 dark:brightness-100 duration-500 transition-all ease-out"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
