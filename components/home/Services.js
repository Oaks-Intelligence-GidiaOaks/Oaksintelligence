"use client";
import React, { useRef } from "react";
import Image from "next/image";

import Glow from "../../assets/solutions/glow.svg";
import { services } from "../../constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Services = () => {
  const servicesBox = useRef();

  return (
    <div className="w-full bg-dark-blue dark:bg-dark-black sm:pb-10">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 items-center overflow-visible">
        <div className="w-full min-h-[100px] pt-[7%] px-[5%] sm:px-[10%] pb-[5%]">
          <p className="text-[1.5rem] sm:text-[2.3rem] gradient-text">
            <p className="text-center poppins-4">
              <span>Our </span>
              <span className="poppins-6">Services</span>
            </p>
          </p>
          <p className="poppins-4 text-main dark:text-main text-base leading-8 sm:text-xl max-w-[784px] mx-auto text-center pt-5">
            At Oaks Intelligence, we are committed to providing our clients with
            software solutions that are reliable, effective, and tailored to
            their unique needs.
          </p>
        </div>
        <div
          ref={servicesBox}
          className="w-full overflow-scroll scrollbar-hidden px-[5%] sm:px-[10%]"
        >
          <div className="w-fit flex justify-between gap-y-6 gap-x-4 mt-4 scrollbar-hidden">
            {services.map((service, i) => (
              <div
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
                <button className="px-5 py-2 rounded-lg border border-solid border-secondary-green mt-2">
                  <span className="poppins-4 text-main text-base">
                    Read More
                  </span>
                </button>
              </div>
            ))}
          </div>
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
