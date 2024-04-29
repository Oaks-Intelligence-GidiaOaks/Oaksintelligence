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

const Overview = () => {
  return (
    <div className="w-full relative pb-10 sm:pb-[5vh]" id="instructions">
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
              <span className="poppins-6">Overview</span>
            </span>
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            This dashboard by Oaks Intelligence Limited, and it provides a
            comprehensive overview of real-time data while enabling you track
            the cost of essential food items, accommodation costs, rental
            prices, transportation fares, and other commodities like petrol,
            diesel, e.t.c This dashboard contains 7 pages:
          </motion.p>
          <motion.ul
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 list-disc ml-10 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            <li>Price Changes</li>
            <li>Retail Food</li>
            <li>Wholesale Food</li>
            <li>Accommodation</li>
            <li>Transportation</li>
            <li>Electricity</li>
            <li>Other Commodities</li>
          </motion.ul>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            Oaks Intelligence is committed to employing a comprehensive data
            collection approach that ensures the effective generation of
            valuable insights. Our specialized team of data enumerators conducts
            weekly surveys in a variety of markets and communities within their
            respective local government areas. The primary objective of our data
            enumerators is to gather essential information, with a strong
            emphasis on collecting pricing data for essential commodities. This
            pricing data serves as the cornerstone of our analytical efforts.
          </motion.p>
          <motion.p
            variants={itemRevealRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg max-w-[784px] text-left pt-5"
          >
            Our data collection efforts span all thirty-six states in Nigeria,
            including the federal capital territory. To ensure a comprehensive
            representation of diverse perspectives, each state is further
            subdivided into three local government areas, except for Lagos and
            Nasarawa, which are divided into four local government areas each.
            This strategic division allows us to capture regional variations and
            local intricacies that significantly impact market dynamics.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
