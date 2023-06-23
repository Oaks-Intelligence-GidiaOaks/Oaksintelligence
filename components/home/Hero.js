import Image from "next/image";
import Link from "next/link";
import React from "react";
import Phone from "../../assets/hero/phone.svg";
import PhoneCircle from "../../assets/hero/phone-circle.svg";
import topCircle from "../../assets/hero/top-circle.svg";
import goldCircle from "../../assets/hero/gold-circle.svg";
import dashboard from "../../assets/hero/dashboard.svg";
import Glow from "../../assets/solutions/glow.svg";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between mx-auto max-w-[1440px] sm:min-h-screen py-5 px-[5%] sm:px-[10%]">
        <div className="flex gap-[5%] flex-col justify-start sm:justify-center w-full mt-[5vh] sm:mt-0 sm:w-1/2 sm:h-[calc(100vh-100px)] pr-[5%]">
          <p className="text-[1.5rem] sm:text-[2.5rem] ">
            <p className="poppins-4">
              <span className="text-main-light dark:text-main">Reliable</span>{" "}
              <span className="gradient-text">Software</span>
            </p>
            <p className="text-main-light dark:text-main poppins-7">
              Solutions Provider
            </p>
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg text-justify mt-4 sm:mt-0">
            Transform your business with software solutions designed
            specifically for you. At Oaks Intelligence, we listen to your needs
            and create customized solutions that give you a competitive edge.
          </p>
          <div className="flex justify-between mt-[5vh] gap-4 sm:gap-0 sm:mt-0">
            <button className="btn-gradient flex-1 sm:flex-none sm:w-[45%] py-3 rounded-lg">
              <span className="poppins-4 text-white text-base">Learn More</span>
            </button>
            <button className="sm:w-[45%] py-3 flex-1 sm:flex-none rounded-lg border border-solid border-secondary-green">
              <span className="poppins-4 text-secondary-green text-base">
                Start a project
              </span>
            </button>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 w-full sm:w-1/2 sm:h-[calc(100vh-100px)] flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              alt="glow"
              src={Glow}
              className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
            />
            <Image
              alt="glow"
              src={Glow}
              className="scale-[2] absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
            />
            <Image
              alt="glow"
              src={Glow}
              className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
            />
            <Image
              alt="glow"
              src={Glow}
              className="scale-[2] sepia absolute -top-[30%] -right-[40%] z-10 hidden sm:block w-[100%]"
            />
            {/* <Image
              alt="circle"
              src={PhoneCircle}
              className="absolute top-[50%] left-0 -translate-y-[30%] w-full z-10 hidden sm:block"
            /> */}
            <Image
              alt="dashboard"
              src={dashboard}
              className="sm:absolute sm:top-[35%] sm:left-[45%] sm:-translate-x-[35%] sm:-translate-y-[30%] w-[100vw] sm:w-[100%] z-20"
            />
            {/* <Image
              alt="gold-circle"
              src={goldCircle}
              className="absolute top-[83%] left-[100%] -translate-x-[30%] -translate-y-[30%] w-[70%] hidden sm:block"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
