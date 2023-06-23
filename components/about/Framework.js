import Image from "next/image";
import React from "react";

import Glow from "../../assets/solutions/glow.svg";
import { framework } from "../../constants";

const Framework = () => {
  return (
    <div className="w-full">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-5 sm:px-[10%] items-center overflow-visible">
        <div className="w-full min-h-[100px] pt-[7%] pb-[5%]">
          <p className="text-[1.8rem] sm:text-[2.3rem] text-main-light dark:gradient-text">
            <p className="text-center poppins-4">
              <span>Our Framework </span>
              <span className="poppins-6">at a glance</span>
            </p>
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-xl max-w-[784px] mx-auto text-center pt-5">
            Driven by a commitment to excellence, we aim to revolutionize
            industries through our innovative software solutions, and global
            collaborations
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-y-6 mt-4">
          {framework.map((framework, i) => (
            <div
              key={i}
              className="flex items-start w-full sm:w-[clamp(235px,33%,562px)] py-10 gap-[clamp(10px,5%,18px)]"
            >
              <div className="flex items-center justify-end p-0 rounded-md w-[clamp(160px,30%,200px)]">
                <Image alt={framework.title} src={framework.icon} />
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="poppins-5 text-main-light dark:text-main text-[18px]">
                  {framework.title}
                </p>
                <p className=" text-tertiary-light dark:text-secondary-main poppins-4 text-base leading-[34px]">
                  {framework.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image alt="glow" src={Glow} className="absolute -top-full -left-1/4" />
      </div>
    </div>
  );
};

export default Framework;
