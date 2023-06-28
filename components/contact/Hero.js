import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import Programmer from "../../assets/contact/programmer.svg";
import Ellipse from "../../assets/contact/ellipse.svg";
import AppContext from "@/contexts/AppContext";

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
  const { theme } = useContext(AppContext);
  return (
    <div className="w-full">
      <div className="flex justify-start sm:justify-between mx-auto max-w-[1440px] sm:min-h-screen py-5 px-[5%] sm:px-[10%] flex-col sm:flex-row">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          animate="show"
          className="flex gap-5 mb-[5vh] sm:mb-0 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 pt-[10vh] sm:pt-0 sm:h-[calc(100vh-100px)] pr-0 sm:pr-[10%]"
        >
          <motion.p variants={itemReveal} className="text-[2.5rem]">
            <span className="block text-main-light dark:text-main poppins-7">
              Contact Us
            </span>
          </motion.p>
          <motion.p
            variants={itemReveal}
            className="poppins-4 text-[#399944] dark:text-secondary-green text-lg"
          >
            To schedule an appointment with us, simply fill out the form below.
          </motion.p>
          <motion.p
            variants={itemReveal}
            className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg"
          >
            One of our friendly team members will be in touch with you shortly.
            We will work with you to understand your business requirements and
            schedule a convenient time for your appointment.
          </motion.p>
          <div className="flex justify-between"></div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring", bounce: 0.4 },
          }}
          className="w-full overflow-visible  sm:w-1/2 mt-6 sm:mt-0 sm:h-[calc(100vh-100px)] flex justify-center items-center"
        >
          <div className="relative overflow-hidden flex justify-end items-center w-full h-full">
            <Image
              alt="Programmer"
              src={Programmer}
              className="relative right-[10%] w-[100%] z-20"
            />
            <div className="overflow-hidden w-full h-full">
              <motion.div
                initial={{ opacity: 0, x: "-50%" }}
                whileInView={{
                  opacity: [1, 1, 1],
                  y: [-10, 10, -10],
                  x: ["-50%", "-50%", "-50%"],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute w-[100%] z-10 left-[50%] max-[640px]:top-3 sm:top-[200px] min-[900px]:top-[150px] min-[1100px]:top-[100px] min-[1400px]:top-[50px] -translate-x-[50%]"
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
