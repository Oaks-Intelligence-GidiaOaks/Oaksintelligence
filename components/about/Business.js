import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import validation from "../../assets/business/validation.svg";
import validationDark from "../../assets/business/validation-dark.svg";
import trustworthy from "../../assets/business/trustworthy-fore.svg";
import trustworthyHind from "../../assets/business/trustworthy-hind.svg";
import benchmark from "../../assets/business/benchmark-fore.svg";
import benchmarkHind from "../../assets/business/benchmark-hind.svg";
import interoperability from "../../assets/business/interoperability-fore.svg";
import interoperabilityHind from "../../assets/business/interoperability-hind.svg";
import swift from "../../assets/business/swift-fore.svg";
import swiftHind from "../../assets/business/swift-hind.svg";
import Image from "next/image";

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

const Business = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="w-full" id="business">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, type: "spring", bounce: 0.4 },
          }}
          className="hidden md:block w-full min-h-[100px] pt-[7%] pb-[5%]"
        >
          <motion.p
            variants={itemReveal}
            initial="hidden"
            whileInView="show"
            className="text-[2.3rem] text-main-light dark:text-main"
          >
            <span className="text-center poppins-4">
              <span>Why you should </span>
              <span className="poppins-6">do business with us</span>
            </span>
          </motion.p>
          <motion.div
            variants={cardItemsReveal}
            initial="hidden"
            whileInView="show"
            className="w-full mt-10 grid md:grid-lg"
          >
            <motion.div
              variants={cardReveal}
              className="flex grid-area-v justify-center items-center py-10 px-10 gap-[5%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px]"
            >
              <div className="flex flex-col gap-2">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Random spot validation for quality control
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  We employ random sampling techniques to assess software
                  reliability, performance, and adherence to quality standards.
                </p>
              </div>
              <Image
                alt="validation"
                src={theme === "light" ? validation : validationDark}
                className="w-[40%]"
              />
            </motion.div>
            <motion.div
              variants={cardReveal}
              className="flex grid-area-t flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec"
            >
              <div className="relative flex items-center h-[120px] bg-[#4cc1ff] px-3 py-2 rounded-xl">
                <Image alt="trustworthy" src={trustworthy} />
                <Image
                  alt="trustworthy-hind"
                  src={trustworthyHind}
                  className="absolute top-0 right-0 rounded-xl w-[50%]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Trustworthy
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  We build trustworthy products through rigorous design and
                  quality assurance processes
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardReveal}
              className="flex w-full grid-area-b flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec"
            >
              <div className="relative flex items-center h-[120px] gold-gradient-bg px-3 py-2 rounded-xl">
                <Image alt="benchmarks" src={benchmark} />
                <Image
                  alt="benchmarks-hind"
                  src={benchmarkHind}
                  className="absolute top-0 right-0 rounded-xl w-[60%]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Benchmarks
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  We utilize Multiple checks and benchmarking protocols for
                  continuous improvement
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardReveal}
              className="flex grid-area-i flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec"
            >
              <div className="relative flex items-center h-[120px] bg-[#77b935] px-3 py-2 rounded-xl">
                <Image alt="interoperability" src={interoperability} />
                <Image
                  alt="interoperability-hind"
                  src={interoperabilityHind}
                  className="absolute top-0 right-0 rounded-xl h-[100%]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Interoperability
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  Integrated teams ensuring uninterrupted service through
                  interoperability.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={cardReveal}
              className="flex grid-area-s flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec"
            >
              <div className="relative flex items-center h-[120px] bg-[#b65fff] px-3 py-2 rounded-xl">
                <Image alt="swift" src={swift} />
                <Image
                  alt="swift-hind"
                  src={swiftHind}
                  className="absolute top-0 right-0 rounded-xl w-[35%]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Swift ROI
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  Access accelerated ROI for businesses seeking a swift return
                  on investment
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="block md:hidden w-full min-h-[100px] pt-[7%] pb-[5%]">
          <p className="text-[2rem] sm:text-[2.3rem] text-main-light dark:text-main">
            <span className="text-center poppins-4">
              <span>Why you should </span>
              <span className="poppins-6">do business with us</span>
            </span>
          </p>
          <div className="w-full mt-10 flex gap-[5vh] flex-wrap">
            <div className="flex flex-col justify-center items-center py-10 px-10 gap-[5vh] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px]">
              <div className="flex flex-col gap-2">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Random spot validation for quality control
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 text-lg mt-4 leading-[34px]">
                  We employ random sampling techniques to assess software
                  reliability, performance, and adherence to quality standards.
                </p>
              </div>
              <Image
                alt="validation"
                src={theme === "light" ? validation : validationDark}
                className="w-[100%]"
              />
            </div>
            <div className="flex grid-area-t flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec">
              <div className="relative flex items-center h-[120px] bg-[#4cc1ff] px-3 py-2 rounded-xl">
                <Image alt="trustworthy" src={trustworthy} />
                <Image
                  alt="trustworthy-hind"
                  src={trustworthyHind}
                  className="absolute top-0 right-0 rounded-xl w-[50%] max-w-[120px]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Trustworthy
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  We build trustworthy products through rigorous design and
                  quality assurance processes
                </p>
              </div>
            </div>
            <div className="flex w-full grid-area-b flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec">
              <div className="relative flex items-center h-[120px] gold-gradient-bg px-3 py-2 rounded-xl">
                <Image alt="benchmarks" src={benchmark} />
                <Image
                  alt="benchmarks-hind"
                  src={benchmarkHind}
                  className="absolute top-0 right-0 rounded-xl w-[60%]  max-w-[120px]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Benchmarks
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  We utilize Multiple checks and benchmarking protocols for
                  continuous improvement
                </p>
              </div>
            </div>
            <div className="flex grid-area-i flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec">
              <div className="relative flex items-center h-[120px] bg-[#77b935] px-3 py-2 rounded-xl">
                <Image alt="interoperability" src={interoperability} />
                <Image
                  alt="interoperability-hind"
                  src={interoperabilityHind}
                  className="absolute top-0 right-0 rounded-xl h-[100%] max-w-[120px]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Interoperability
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  Integrated teams ensuring uninterrupted service through
                  interoperability.
                </p>
              </div>
            </div>
            <div className="flex grid-area-s flex-col px-6 py-8 gap-2 glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec">
              <div className="relative flex items-center h-[120px] bg-[#b65fff] px-3 py-2 rounded-xl">
                <Image alt="swift" src={swift} />
                <Image
                  alt="swift-hind"
                  src={swiftHind}
                  className="absolute top-0 right-0 rounded-xl w-[35%] max-w-[120px]"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <p className="poppins-6 text-main-light dark:text-main text-[22px]">
                  Swift ROI
                </p>
                <p className=" text-secondary-main-light dark:text-secondary-main poppins-4 leading-[34px]">
                  Access accelerated ROI for businesses seeking a swift return
                  on investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
