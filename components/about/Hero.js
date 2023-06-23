import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import People from "../../assets/about/people.svg";
import Ellipse from "../../assets/contact/ellipse.svg";
import AppContext from "@/contexts/AppContext";

const Hero = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="w-full">
      <div className="flex flex-wrap sm:flex-nowrap justify-between mx-auto max-w-[1440px] min-h-screen py-5 px-5 sm:px-[10%]">
        <div className="flex gap-4 sm:gap-[5%] flex-col justify-center w-full sm:w-1/2 sm:h-[calc(100vh-100px)] pt-[10vh] sm:pt-0 sm:pr-[10%]">
          <p className="text-[2.5rem]">
            <span className="block text-main-light dark:text-main poppins-7">
              About Us
            </span>
          </p>
          <p className="poppins-4 text-[#399944] dark:text-secondary-green text-lg">
            The idea incubation and bootstrapping hub of Gidia Oaks Holding
            Group.
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg">
            Our focus is on providing fast and efficient software solutions that
            meet the needs of businesses and individuals in a rapidly changing
            world.
          </p>
          <div className="flex justify-between">
            <button className="sm:w-[45%] px-4 sm:px-0 py-3 rounded-lg border border-solid border-secondary-green">
              <span className="poppins-4 text-secondary-green text-lg">
                Start a project
              </span>
            </button>
          </div>
        </div>
        <div className="w-full overflow-hidden sm:overflow-visible sm:w-1/2 mt-6 sm:mt-0 sm:h-[calc(100vh-100px)] flex justify-center items-center">
          <div className="relative flex justify-end items-center w-full h-full">
            <Image alt="People" src={People} className=" w-[100%] z-20" />
            {theme === "dark" && (
              <div className=" w-full h-full">
                <Image
                  alt="Ellipse"
                  src={Ellipse}
                  className="absolute w-[100%] z-10 left-[50%] top-0 -translate-x-[50%]"
                />
                <div className="absolute top-0 z-10 left-0 w-full h-full invert brightness-200 dark:transparent-gradient-dark dark:invert-0 dark:brightness-100 duration-300 transition-all ease-out"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
