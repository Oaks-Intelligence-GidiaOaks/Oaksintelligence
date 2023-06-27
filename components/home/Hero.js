import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import Phone from "../../assets/hero/phone.svg";
import PhoneCircle from "../../assets/hero/phone-circle.svg";
import topCircle from "../../assets/hero/top-circle.svg";
import goldCircle from "../../assets/hero/gold-circle.svg";
import dashboard from "../../assets/hero/dashboard.svg";
import Glow from "../../assets/solutions/glow.svg";
import AppContext from "@/contexts/AppContext";
import dashboardWide from "@/assets/dashboardMockup/dashboard.svg";

const containerReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};
const itemReveal = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
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
      <AnimatePresence>
        {theme === "light" && (
          <motion.div
            variants={itemReveal}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row justify-start sm:justify-between mx-auto max-w-[1440px] sm:min-h-screen py-5 px-[5%] sm:px-[10%]"
          >
            <motion.div
              variants={containerReveal}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-[5%] flex-col justify-start sm:justify-center w-full mt-[5vh] sm:mt-0 sm:w-1/2 sm:h-[calc(100vh-100px)] pr-[5%]"
            >
              <motion.p
                variants={itemReveal}
                className="text-[1.5rem] sm:text-[2.5rem] "
              >
                <p className="poppins-4">
                  <span className="text-main-light dark:text-main">
                    Reliable
                  </span>{" "}
                  <span className="gradient-text">Software</span>
                </p>
                <p className="text-main-light dark:text-main poppins-7">
                  Solutions Provider
                </p>
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg text-justify mt-4 sm:mt-0"
              >
                Transform your business with software solutions designed
                specifically for you. At Oaks Intelligence, we listen to your
                needs and create customized solutions that give you a
                competitive edge.
              </motion.p>
              <motion.div
                variants={nestedItemsReveal}
                className="flex justify-between mt-[5vh] gap-4 sm:gap-0 sm:mt-0"
              >
                <Link
                  href={"/about"}
                  className="flex justify-center gold-gradient-bg hue-rotate-60 brightness-[100%] hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 sepia-[20%] flex-1 sm:flex-none sm:w-[45%] py-3 rounded-lg transition-all duration-300 ease"
                >
                  <motion.button variants={nestedItemLeft}>
                    <span className="poppins-4 text-white text-base">
                      Learn More
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href={"/contact"}
                  className="flex justify-center sm:w-[45%] py-3 flex-1 sm:flex-none rounded-lg border border-solid border-secondary-green hover:-hue-rotate-[45deg] transition-all duration-300 ease"
                >
                  <motion.button variants={nestedItemRight}>
                    <span className="poppins-4 text-secondary-green text-base">
                      Start a project
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="mt-8 sm:mt-0 w-full sm:w-1/2 sm:h-[calc(100vh-100px)] flex justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 1, 1], translateY: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="relative w-full h-full"
              >
                <Image
                  alt="glow"
                  src={Glow}
                  className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
                />
                <Image
                  alt="glow"
                  src={Glow}
                  className="scale-[2] absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
                />
                <Image
                  alt="glow"
                  src={Glow}
                  className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
                />
                <Image
                  alt="glow"
                  src={Glow}
                  className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
                />
                {/* <Image
              alt="circle"
              src={PhoneCircle}
              className="absolute top-[50%] left-0 -translate-y-[30%] w-full z-10 hidden sm:block"
            /> */}
                <div className="sm:absolute sm:top-[35%] sm:left-[45%] sm:-translate-x-[35%] sm:-translate-y-[30%] w-[100vw] sm:w-[100%] z-20">
                  <Image alt="dashboard" src={dashboard} className="w-[100%]" />
                </div>
                {/* <Image
              alt="gold-circle"
              src={goldCircle}
              className="absolute top-[83%] left-[100%] -translate-x-[30%] -translate-y-[30%] w-[70%] hidden sm:block"
            /> */}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {theme === "dark" && (
          <motion.div
            variants={itemReveal}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-start sm:justify-between mx-auto max-w-[1440px] sm:min-h-screen py-5 px-[5%] sm:px-[10%]"
          >
            <motion.div
              variants={containerReveal}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-[5%] flex-col justify-start sm:justify-center w-full mt-[5vh] pt-[5vh] sm:mt-0 sm:my-[10vh] pr-[5%]"
            >
              <motion.p
                variants={itemReveal}
                className="flex sm:justify-center gap-x-3 flex-wrap text-[1.5rem] sm:text-[2.5rem] "
              >
                <p className="poppins-4">
                  <span className="text-main-light dark:text-main">
                    Reliable
                  </span>{" "}
                  <span className="gradient-text">Software</span>
                </p>
                <p className="text-main-light dark:text-main poppins-7">
                  Solutions Provider
                </p>
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 w-full max-w-[720px] sm:text-center sm:mx-auto text-secondary-main-light dark:text-secondary-main text-lg text-justify mt-4 sm:mt-4"
              >
                Transform your business with software solutions designed
                specifically for you. At Oaks Intelligence, we listen to your
                needs and create customized solutions that give you a
                competitive edge.
              </motion.p>
              <motion.div
                variants={nestedItemsReveal}
                className="flex justify-between sm:justify-center mt-[5vh] gap-x-3 sm:gap-6 sm:mt-[5vmin]"
              >
                <Link
                  href={"/about"}
                  className="flex justify-center w-full sm:w-[45%] max-w-[200px] gold-gradient-bg hue-rotate-60 sepia-[20%] brightness-[80%] px-3 transition-all duration-300 ease hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 flex-1 sm:flex-none py-3 rounded-lg"
                >
                  <motion.button variants={nestedItemLeft} className="">
                    <span className="poppins-4 text-main-light text-base max-[460px]:text-sm">
                      Learn More
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href="/contact"
                  className="flex justify-center w-full max-w-[200px] py-3 flex-1 sm:flex-none transition-all duration-300 ease rounded-lg hover:-hue-rotate-[45deg] border border-solid border-secondary-green"
                >
                  <motion.button variants={nestedItemRight} className="">
                    <span className="poppins-4 text-secondary-green text-base max-[460px]:text-sm">
                      Start a project
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="mt-8 sm:mt-0 w-full sm:w-full flex justify-center items-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 1, 1], translateY: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="relative w-full h-full"
              >
                {/* <Image
                alt="glow"
                src={Glow}
                className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
              /> */}
                {/* <Image
              alt="circle"
              src={PhoneCircle}
              className="absolute top-[50%] left-0 -translate-y-[30%] w-full z-10 hidden sm:block"
            /> */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3 }}
                  className="w-full my-9 flex justify-center"
                >
                  <Image
                    alt="dashboard"
                    src={dashboardWide}
                    className="w-[90%]"
                  />
                </motion.div>
                {/* <Image
              alt="gold-circle"
              src={goldCircle}
              className="absolute top-[83%] left-[100%] -translate-x-[30%] -translate-y-[30%] w-[70%] hidden sm:block"
            /> */}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
