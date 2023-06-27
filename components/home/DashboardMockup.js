import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import dashboard from "../../assets/dashboardMockup/dashboard-light.svg";

const DashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          type: "spring",
          bounce: 0.4,
        },
      }}
      className="w-full dark:hidden bg-[#155F60] dark:bg-[#032929] mt-[30px] sm:mt-[clamp(100px,15vh,300px)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [1, 1, 1], translateY: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="flex relative sm:min-h-screen mx-auto justify-center max-w-[1440px] py-10 sm:py-[5%] items-center"
      >
        <Image alt="dashboard" src={dashboard} className="w-[90%] sm:w-[70%]" />
      </motion.div>
    </motion.div>
  );
};

export default DashboardMockup;
