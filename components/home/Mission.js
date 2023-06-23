"use client";
import Image from "next/image";
import React, { useContext } from "react";

import Glow from "../../assets/solutions/glow.svg";
import OaksWatermark from "../../assets/oaks-watermark.svg";
import { missions } from "../../constants";
import AppContext from "@/contexts/AppContext";
import image1 from "../../assets/mission/1.jpg";
import image2 from "../../assets/mission/2.jpg";
import image3 from "../../assets/mission/3.jpg";

const Mission = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="w-full relative pb-10 sm:pb-[20vh]">
      <div className="flex z-10 relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible">
        <div className="w-full min-h-[100px] pt-[7%] pb-[5%]">
          <p className="text-[1.5rem] sm:text-[2.3rem] gradient-text">
            <p className="text-center poppins-4">
              <span>Our </span>
              <span className="poppins-6">Mission</span>
            </p>
          </p>
          <p className="poppins-4 leading-5 md:leading-9 text-secondary-main-light dark:text-secondary-main text-base sm:text-xl max-w-[784px] mx-auto text-center pt-5">
            Driven by a commitment to excellence, we aim to revolutionize
            industries through our innovative software solutions, and global
            collaborations
          </p>
        </div>
        {theme === "light" ? (
          <>
            <div className="w-full hidden md:flex">
              <div className="w-[55%] flex flex-col flex-wrap items-start justify-between gap-y-6">
                {missions.slice(0, -1).map((mission, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-[clamp(20px,5%,36px)] pr-[10%]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[40%] grid gap-3 image-grid">
                <Image alt="image-1" src={image1} className="grid-area-i" />
                <Image alt="image-2" src={image2} className="grid-area-ii" />
                <Image alt="image-3" src={image3} className="grid-area-iii" />
              </div>
            </div>
            <div className="w-full md:hidden mt-4 flex flex-col">
              <div className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6">
                {missions.slice(0, 2).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[100%] flex justify-between my-6">
                <Image alt="image-1" src={image1} className="flex-[0.48]" />
                <Image alt="image-2" src={image2} className="flex-[0.48]" />
              </div>
              <div className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6">
                {missions.slice(2, 4).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[100%] flex justify-between my-6">
                <Image alt="image-3" src={image3} className="grid-area-iii" />
              </div>
              <div className="w-[100%] flex flex-col flex-wrap items-start justify-between gap-y-6">
                {missions.slice(4, -1).map((mission, i) => (
                  <div
                    key={i}
                    className="w-[100%] flex items-start gap-[clamp(20px,5%,36px)]"
                  >
                    <div className="flex items-center justify-center bg-[#F1F1F9] dark:icon-gradient-bg p-[6px] rounded-md w-[52px]">
                      <Image
                        alt={mission.title}
                        src={mission.icon}
                        className={`${theme === "light" ? "" : "brightness-0"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p className="poppins-5 gold-gradient-text text-[18px]">
                        {mission.title}
                      </p>
                      <p className=" text-main-light dark:text-main poppins-4">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-wrap justify-center sm:justify-between gap-y-6 mt-4">
            {missions.map((mission, i) => (
              <div
                key={i}
                className="flex items-start glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec w-full sm:w-[clamp(240px,48%,562px)] py-6 px-3 sm:p-10 gap-3 sm:gap-[clamp(20px,5%,36px)]"
              >
                <div className="flex items-center justify-center icon-gradient-bg p-[6px] rounded-md w-[22%] sm:w-[18%]">
                  <Image
                    alt={mission.title}
                    src={mission.icon}
                    className="brightness-[2000%]"
                  />
                </div>
                <div className="flex flex-col justify-start gap-y-4">
                  <p className="poppins-5 gold-gradient-text text-[18px]">
                    {mission.title}
                  </p>
                  <p className=" text-main-light dark:text-main poppins-4">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Image alt="glow" src={Glow} className="absolute -top-1/3 -left-1/4" />
      </div>
      <Image
        alt="oaks-watermark"
        src={OaksWatermark}
        className={`absolute hidden sm:block bottom-0 left-1/2 -translate-x-1/2 z-0 opacity-0 grayscale invert brightness-[50%] dark:invert-0 dark:brightness-[150%]`}
      />
    </div>
  );
};

export default Mission;
