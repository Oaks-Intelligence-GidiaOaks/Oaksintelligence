import Image from "next/image";
import React from "react";
import experience from "../../assets/experience/experience.svg";

const Excellence = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mx-auto max-w-[1440px] py-[20vmin] px-[5%] sm:px-[10%] bg-[#E9FFEC] dark:bg-[#e9ffec08]">
        <div className="w-full gap-[10%] rounded-[16px] flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 items-center justify-between bg-main-light dark:glassmorphism-sec p-[5%]">
          <div className="flex flex-col gap-4">
            <p className="text-[1.3rem] sm:text-[2rem] pt-10 sm:pt-0 text-main dark:gradient-text">
              <p className="poppins-4">
                <span className="whitespace-nowrap sm:whitespace-normal">
                  Scalable & Secure{" "}
                </span>{" "}
                <span className="poppins-6 whitespace-nowrap sm:whitespace-normal">
                  Technological Excellence
                </span>
              </p>
            </p>
            <p className="poppins-4 text-secondary-main text-lg">
              Our team consists of seasoned professionals specializing in
              concurrency, functionality, security, interoperability, quality
              assurance, & certification.
            </p>
            <button className="w-[45%] py-3 rounded-lg border border-solid border-secondary-green mt-6">
              <span className="poppins-4 text-main text-lg">Learn More</span>
            </button>
          </div>
          <Image alt="experience" src={experience} />
        </div>
      </div>
    </div>
  );
};

export default Excellence;
