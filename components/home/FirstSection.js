import Image from "next/image";
import ladyUsingPhone from "../../assets/firstSection/lady-on-phone.svg";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row mx-auto sm:justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] sm:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 200 },
          }}
          className="w-full flex-col sm:flex-row p-5 min-h-[100px] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec sm:flex px-[8%] sm:pt-[3%] pb-[5%]"
        >
          <div className="w-full sm:flex-[0.5] items-center justify-center">
            <Image
              alt="lady-using-smartphone"
              src={ladyUsingPhone}
              className="w-[100%] sm:w-[70%]"
            />
          </div>
          <div className="sm:flex-[0.5] ">
            <div className="flex flex-col justify-center h-full gap-[5%]">
              <p className="text-[1.3rem] mt-6 sm:mt-0 sm:text-[2.3rem] text-main-light dark:gradient-text">
                <span className="block poppins-4">
                  <span>Guaranteed</span> <span>Customer</span>
                </span>
                <span className="block poppins-6">Satisfaction</span>
              </p>
              <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg mt-4 sm:mt-0 sm:text-justify">
                We take the time to understand your business and develop
                solutions that are customized to your requirements. Whether
                you're a small business owner or a large enterprise, we have the
                expertise and resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstSection;
