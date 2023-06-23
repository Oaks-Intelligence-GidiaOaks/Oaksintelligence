import Image from "next/image";
import Link from "next/link";
import React from "react";
import collaborating from "../../assets/about/collaborating.svg";

const Solutions = () => {
  return (
    <div className="w-full mt-[20vh]">
      <div className="flex flex-wrap sm:flex-nowrap justify-between mx-auto max-w-[1440px] min-h-screen py-5 px-[5%] sm:px-[10%]">
        <div className="flex gap-[5%] flex-col justify-center w-full sm:w-2/3 sm:h-[calc(100vh-100px)] sm:pr-[10%]">
          <p className="text-[2rem]">
            <p className="text-main-light dark:gradient-text poppins-4">
              Unleash Your Potential With Our
            </p>
            <p className="text-main-light dark:gradient-text poppins-7">
              Next-Level Software Solutions
            </p>
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg mt-8 sm:mt-0">
            At Oaks Intelligence, we're at the forefront of developing
            innovative solutions for a variety of industries. Whether it's data
            intelligence, an app for measuring emissions, or a tool to help
            homeowners trade carbon credits for lower loan costs, we're
            dedicated to building software solutions that are both functional
            and reliable.
          </p>
          <p className="poppins-4 text-secondary-main-light mt-2 sm:pt-0 dark:text-secondary-main text-lg">
            We're committed to delivering software solutions that are tailored
            to the specific needs of our clients. We take the time to understand
            your business and develop solutions that are customized to your
            requirements. Whether you're a small business owner or a large
            enterprise, we have the expertise and resources to help you achieve
            your goals.
          </p>
        </div>
        <div className="w-full sm:w-1/3 mt-4 sm:mt-0 sm:h-[calc(100vh-100px)] flex justify-center items-center">
          <div className="relative flex justify-end items-center w-full h-full">
            <Image
              alt="People"
              src={collaborating}
              className=" w-[100%] z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
