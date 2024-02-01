import Image from "next/image";
import React from "react";

import Glow from "../../assets/solutions/glow.svg";
import { services } from "../../constants";

const Services = () => {
  return (
    <div className="w-full mt-[20vh] bg-dark-blue dark:bg-dark-black">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1560px] py-5 px-[10%] items-center overflow-visible">
        <div className="w-full min-h-[100px] pt-[7%] pb-[5%]">
          <p className="text-[2.3rem] gradient-text">
            <span className="block text-center poppins-4">
              <span>Our </span>
              <span className="poppins-6">Services</span>
            </span>
          </p>
          <p className="poppins-4 text-main dark:text-main text-xl max-w-[784px] mx-auto text-center pt-5">
            At Oaks Intelligence, we are committed to providing our clients with
            software solutions that are reliable, effective, and tailored to
            their unique needs.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-y-6 mt-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-start glassmorphism bg-[#ffffff0d] border-none shadow-none dark:glassmorphism-sec w-[clamp(240px,48%,562px)] p-10 gap-[clamp(20px,5%,36px)]"
            >
              <div className="flex items-center justify-center bg-[#ffffff1a] p-2 rounded-md w-[18%]">
                <Image alt={service.title} src={service.icon} />
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="poppins-4 text-main text-[24px]">
                  {service.title}
                </p>
                <p className=" text-main poppins-4 leading-[34px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image alt="glow" src={Glow} className="absolute -top-full -left-1/4" />
      </div>
      <div className="flex gap-5 items-center justify-center pt-[5vh] pb-[10vh]">
        {services.map((service, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 0 ? "bg-secondary-green" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
