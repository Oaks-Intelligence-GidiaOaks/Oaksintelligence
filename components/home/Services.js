"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Glow from "../../assets/solutions/glow.svg";
import { services } from "../../constants";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import Link from "next/link";

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
const cardReveal = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const Services = () => {
  const servicesBox = useRef();

  return (
    <div
      id="services"
      className="w-full bg-dark-blue dark:bg-dark-black sm:pb-10 transition-[background] duration-500 ease-in-out"
    >
      <div className="flex relative flex-col mx-auto justify-between max-w-[1560px] py-5 items-center overflow-visible">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full min-h-[100px] pt-[7%] px-[5%] sm:px-[10%] pb-[5%]"
        >
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[1.5rem] sm:text-[2.3rem] gradient-text"
          >
            <span className="block text-center poppins-4">
              <span>Our </span>
              <span className="poppins-6">Services</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemRevealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 text-main dark:text-main text-base leading-8 sm:text-xl max-w-[784px] mx-auto text-center pt-5"
          >
            At Oaks Intelligence, we are committed to providing our clients with
            software solutions that are reliable, effective, and tailored to
            their unique needs.
          </motion.p>
        </motion.div>
        <div
          ref={servicesBox}
          className="w-full overflow-scroll scrollbar-hidden px-[5%] sm:px-[10%]"
        >
          <motion.div
            variants={cardItemsReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-fit flex justify-between gap-y-6 gap-x-4 mt-4 scrollbar-hidden"
          >
            {services.map((service, i) => (
              <motion.div
                variants={cardReveal}
                key={i}
                className="flex flex-col items-start glassmorphism bg-[#ffffff0d] border-none shadow-none dark:glassmorphism-sec sm:w-[clamp(280px,48%,562px)] w-[280px] p-3 py-5 sm:p-10 gap-[clamp(20px,5%,36px)]"
              >
                <div className="flex items-center justify-center bg-[#ffffff1a] p-2 rounded-md w-[25%] sm:w-[18%]">
                  <Image alt={service.title} src={service.icon} />
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="poppins-4 text-main text-lg sm:text-[24px]">
                    {service.title}
                  </p>
                  <p className="text-main text-sm sm:text-base poppins-4 leading-[34px]">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={"/about"}
                  className=" flex items-center justify-center px-5 py-2 rounded-lg border border-solid border-secondary-green mt-2 hover:-hue-rotate-[45deg] transition-all duration-300 ease"
                >
                  <button>
                    <span className="poppins-4 text-main text-base">
                      Read More
                    </span>
                  </button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="md:hidden min-w-[280px] mx-auto max-w-[280px] h-fit flex justify-between items-center pt-[5vh] pb-[10vh]">
        <BsArrowLeft
          size={20}
          color="#ffffff"
          onClick={() => {
            servicesBox.current.scrollBy({ left: -100, behavior: "smooth" });
          }}
        />
        <div className="flex gap-5 items-center justify-center">
          {services.map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
        <BsArrowRight
          size={20}
          color="#ffffff"
          onClick={() => {
            servicesBox.current.scrollBy({ left: 100, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default Services;
