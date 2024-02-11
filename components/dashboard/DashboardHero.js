import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import Phone from "../../assets/hero/phone.svg";
import PhoneCircle from "../../assets/hero/phone-circle.svg";
import topCircle from "../../assets/hero/top-circle.svg";
import goldCircle from "../../assets/hero/gold-circle.svg";
import dashboard from "../../assets/hero/dashboard.webp";
import Glow from "../../assets/solutions/glow.svg";
import AppContext from "@/contexts/AppContext";
import dashboardWide from "@/assets/dashboardMockup/dashboard.webp";
import whiteLightBig from "@/assets/dark-home-light-big.png";
import whiteLightSmall from "@/assets/dark-home-light-small.png";

const containerReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.25,
    },
  },
};
const itemReveal = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};
const nestedItemsReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.25,
    },
  },
};
const nestedItemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};
const nestedItemRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const DashboardHero = () => {
  const { theme } = useContext(AppContext);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  return (
    <div className="w-full">
      <AnimatePresence>
        {theme === "dark" && (
          <motion.div
            variants={itemReveal}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row justify-start sm:justify-between mx-auto max-w-[1560px] sm:min-h-screen py-5 px-[5%] sm:px-[10%]"
          >
            <motion.div
              variants={containerReveal}
              initial="hidden"
              animate="show"
              className="flex gap-5 mb-[5vh] sm:mb-0 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 pt-[10vh] sm:pt-0 sm:h-[calc(100vh-100px)] pr-0 sm:pr-[10%]"
            >
              <motion.p variants={itemReveal} className="text-[2.5rem]">
                <span className="block text-main-light dark:text-main poppins-7">
                  Dashboard
                </span>
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 text-[#399944] dark:text-secondary-green text-lg"
              >
                Explore Real-Time Commodity Prices with Oaks Intelligence
                Dashboard
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg"
              >
                View insights into the Costs of food items, Homes, Groceries,
                Construction Materials, and Electricity.
              </motion.p>
              <motion.div
                variants={nestedItemsReveal}
                className="flex justify-between sm:justify-center mt-[5vh] gap-x-3 sm:gap-6 sm:mt-[5vmin] flex-wrap"
              >
                {/* <Link
                  href={"/dashboard#view"}
                  className="flex justify-center w-full sm:w-[45%] max-w-[200px] gold-gradient-bg hue-rotate-60 sepia-[20%] brightness-[80%] px-3 transition-all duration-300 ease hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 flex-1 sm:flex-none py-3 rounded-lg"
                >
                  <motion.button variants={nestedItemLeft} className="">
                    <span className=" whitespace-nowrap flex-1 poppins-4 text-black text-base max-[460px]:text-sm">
                      View Dashboard
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href={"/dashboard#instructions"}
                  className="flex justify-center w-full max-w-[200px] py-3 flex-1 sm:flex-none transition-all duration-300 ease rounded-lg hover:-hue-rotate-[45deg] border border-solid border-secondary-green"
                >
                  <motion.button variants={nestedItemRight} className="">
                    <span className="poppins-4 text-secondary-green text-base max-[460px]:text-sm">
                      Discover more
                    </span>
                  </motion.button>
                </Link> */}

                <Link
                  href={"/dashboard#view"}
                  className="flex justify-center gold-gradient-bg hue-rotate-60  min-w-[160px] brightness-[100%] hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 sepia-[20%] flex-1 sm:w-[45%] py-3 rounded-lg transition-all duration-300 ease"
                >
                  <motion.button variants={nestedItemLeft}>
                    <span className="poppins-4 text-white text-base w-full flex px-2 whitespace-nowrap">
                      View Dashboard
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href={"/dashboard#instructions"}
                  className="flex justify-center w-full min-w-[160px] py-3 flex-1 transition-all duration-300 ease rounded-lg hover:-hue-rotate-[45deg] border border-solid border-secondary-green"
                >
                  <motion.button variants={nestedItemRight} className="">
                    <span className="poppins-4 text-secondary-green text-base px-2 max-[460px]:text-sm whitespace-nowrap">
                      Explore Further
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
              <div className="flex justify-between"></div>
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
                <div className="sm:absolute sm:top-[35%] sm:left-[45%] sm:-translate-x-[35%] sm:-translate-y-[30%] w-[100%] sm:w-[100%] z-20">
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
        {theme === "light" && (
          <motion.div
            variants={itemReveal}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row justify-start sm:justify-between mx-auto max-w-[1560px] sm:min-h-screen py-5 px-[5%] sm:px-[10%]"
          >
            <motion.div
              variants={containerReveal}
              initial="hidden"
              animate="show"
              className="flex gap-5 mb-[5vh] sm:mb-0 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 pt-[10vh] sm:pt-0 sm:h-[calc(100vh-100px)] pr-0 sm:pr-[10%]"
            >
              <motion.p variants={itemReveal} className="text-[2.5rem]">
                <span className="block text-main-light dark:text-main poppins-7">
                  Dashboard
                </span>
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 text-[#399944] dark:text-secondary-green text-lg"
              >
                Explore Real-Time Commodity Prices with Oaks Intelligence
                Dashboard
              </motion.p>
              <motion.p
                variants={itemReveal}
                className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg"
              >
                View insights into the Costs of food items, Homes, Groceries,
                Construction Materials, and Electricity.
              </motion.p>
              <motion.div
                variants={nestedItemsReveal}
                className="flex justify-between sm:justify-center mt-[5vh] gap-x-3 sm:gap-6 sm:mt-[5vmin] flex-wrap"
              >
                <Link
                  href={"/dashboard#view"}
                  className="flex justify-center gold-gradient-bg hue-rotate-60  min-w-[160px] brightness-[100%] hover:hue-rotate-0 hover:sepia-0 hover:brightness-100 hover:backdrop-brightness-50 sepia-[20%] flex-1 sm:w-[45%] py-3 rounded-lg transition-all duration-300 ease"
                >
                  <motion.button variants={nestedItemLeft}>
                    <span className="poppins-4 text-white text-base w-full flex px-2 whitespace-nowrap">
                      View Dashboard
                    </span>
                  </motion.button>
                </Link>
                <Link
                  href={"/dashboard#instructions"}
                  className="flex justify-center w-full min-w-[160px] py-3 flex-1 transition-all duration-300 ease rounded-lg hover:-hue-rotate-[45deg] border border-solid border-secondary-green"
                >
                  <motion.button variants={nestedItemRight} className="">
                    <span className="poppins-4 text-secondary-green text-base px-2 max-[460px]:text-sm whitespace-nowrap">
                      Explore Further
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
              <div className="flex justify-between"></div>
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
                <div className="sm:absolute sm:top-[35%] sm:left-[45%] sm:-translate-x-[35%] sm:-translate-y-[30%] w-[100%] sm:w-[100%] z-20">
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
    </div>
  );
};

export default DashboardHero;
