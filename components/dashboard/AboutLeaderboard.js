import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

const AboutLeaderboard = () => {
  return (
    <div className="w-full relative pb-10 sm:pb-[10vh]">
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
              <span>About </span>
              <span className="poppins-6">Leaderboard</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg text-left pt-5"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg text-left pt-5"
          >
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLeaderboard;
