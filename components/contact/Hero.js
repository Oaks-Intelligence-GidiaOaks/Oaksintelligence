import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Programmer from "../../assets/contact/programmer.svg";
import Ellipse from "../../assets/contact/ellipse.svg";
import AppContext from "@/contexts/AppContext";

const Hero = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="w-full">
      <div className="flex justify-start sm:justify-between mx-auto max-w-[1440px] sm:min-h-screen py-5 px-[5%] sm:px-[10%] flex-col sm:flex-row">
        <div className="flex gap-5 mb-[5vh] sm:mb-0 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 pt-[10vh] sm:pt-0 sm:h-[calc(100vh-100px)] pr-0 sm:pr-[10%]">
          <p className="text-[2.5rem]">
            <p className="text-main-light dark:text-main poppins-7">
              Contact Us
            </p>
          </p>
          <p className="poppins-4 text-[#399944] dark:text-secondary-green text-lg">
            To schedule an appointment with us, simply fill out the form below.
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg">
            One of our friendly team members will be in touch with you shortly.
            We will work with you to understand your business requirements and
            schedule a convenient time for your appointment.
          </p>
          <div className="flex justify-between"></div>
        </div>
        <div className="w-full sm:w-1/2 h-fit overflow-hidden sm:h-[calc(100vh-100px)] flex justify-center items-center">
          <div className="relative flex justify-end items-center w-full h-full">
            <Image
              alt="Programmer"
              src={Programmer}
              className="relative right-[10%] w-[100%] z-20"
            />
            {theme === "dark" && (
              <div className="w-full h-full">
                <Image
                  alt="Ellipse"
                  src={Ellipse}
                  className="absolute w-[100%] z-10 left-[50%] top-0 -translate-x-[50%]"
                />
                <div className="absolute top-0 z-10 left-0 w-full h-full dark:transparent-gradient-dark"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
