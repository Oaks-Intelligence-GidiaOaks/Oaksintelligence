import Image from "next/image";
import { motion } from "framer-motion";
import clock from "../../assets/about/clock.svg";

const FirstSection = () => {
  return (
    <div className="w-full">
      <div className="flex mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
          className="w-full items-center p-5 min-h-[100px] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec flex flex-col sm:flex-row px-[8%] py-14 sm:pt-[5%] sm:pb-[5%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [1, 1, 1], translateY: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="flex-1 sm:flex-[0.5] items-center justify-center"
          >
            <Image alt="clock" src={clock} className="w-[90%] sm:w-[70%]" />
          </motion.div>
          <div className="flex-1 sm:flex-[0.5] ">
            <div className="flex flex-col justify-center h-full gap-6 mt-8 sm:mt-0">
              <p className="text-[2rem] text-main-light dark:gradient-text">
                <p className="poppins-4">
                  <span>Efficient and Timely</span>
                </p>
                <p className="poppins-6">Delivery of Projects</p>
              </p>
              <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg sm:text-justify">
                We understand that time is a valuable commodity, which is why we
                take a fast-start approach to commercializing software
                solutions. From the concept stage to trials, testing, auditing,
                certification, and deployment, we work quickly and effectively
                to ensure that our clients' projects are delivered on time and
                in excellent shape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstSection;
