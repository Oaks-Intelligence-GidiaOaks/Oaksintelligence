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

const Disclaimer = () => {
  return (
    <div className="w-full relative pb-10 sm:pb-[5vh] mt-10" id="instructions">
      <div className="flex z-10 relative flex-col mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible">
        <motion.div
          variants={containerReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full min-h-[100px]"
        >
          <motion.p
            variants={itemRevealLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[1.5rem] sm:text-[2.3rem] gradient-text"
          >
            <span className="block text-left poppins-4">
              <span className="poppins-6">Disclaimer</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 italic leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            Please be aware that the data presented here is based on our
            comprehensive data collection methodology, which involves surveys
            conducted by our team of data enumerators.
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 italic leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            It's important to note that the information provided is subject to
            the availability and accuracy of the data collected. While we strive
            to maintain high standards of data accuracy and reliability,
            variations may occur due to external factors. Users are encouraged
            to use the filtering options to customize data views based on dates,
            geopolitical zones, states, local government areas, or commodities.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Disclaimer;
