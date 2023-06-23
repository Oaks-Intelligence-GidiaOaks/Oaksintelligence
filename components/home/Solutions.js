import Image from "next/image";
import React from "react";
import Agriculture from "../../assets/solutions/agriculture.svg";
import Data from "../../assets/solutions/data.svg";
import Education from "../../assets/solutions/education.svg";
import Electricity from "../../assets/solutions/electricity.svg";
import Entertainment from "../../assets/solutions/entertainment.svg";
import Finance from "../../assets/solutions/finance.svg";
import HealthCare from "../../assets/solutions/health-care.svg";
import RealEstate from "../../assets/solutions/real-estate.svg";
import Glow from "../../assets/solutions/glow.svg";

import Tilt from "react-parallax-tilt";

const Solutions = () => {
  return (
    <div className="w-full">
      <div className="flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center overflow-visible">
        <div className="w-full min-h-[100px] pt-[7%] pb-[5%]">
          <p className="text-[1.4rem] sm:text-[2.3rem] text-main-light dark:gradient-text">
            <p className="poppins-4">
              <span>Solutions For All </span>
              <span className="poppins-6 whitespace-nowrap sm:whitespace-normal">
                Sectors & Industries
              </span>
            </p>
          </p>
          <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg pt-5">
            By staying at the forefront of technological advancements, we ensure
            that our products are fast, efficient and capable of adapting to the
            rapidly changing demands of the modern business landscape.
          </p>
        </div>
        <div className="flex flex-col w-full justify-between gap-y-3 sm:gap-[clamp(20px,5vw,30px)] mt-10">
          <div className="flex justify-between w-full flex-wrap gap-y-3 sm:gap-y-0">
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="data-analytics" src={Data} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-center text-base sm:text-lg">
                Data Analytics
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="real-estate" src={RealEstate} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Real Estate
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="energy" src={Electricity} className="w-[19%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Energy
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image
                alt="entertainment"
                src={Entertainment}
                className="w-[30%]"
              />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Entertainment
              </p>
            </Tilt>
          </div>
          <div className="flex justify-between w-full flex-wrap gap-y-3 sm:gap-y-0">
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="education" src={Education} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Education
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="health-care" src={HealthCare} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Health Care
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="fin-tech" src={Finance} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Fin Tech
              </p>
            </Tilt>
            <Tilt
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.02}
              glareBorderRadius={30}
              className="flex overflow-hidden flex-col w-[48%] sm:flex-[0.22] relative z-10 h-[140px] min-w-[140px] sm:h-[clamp(240px,50vh,317px)] justify-center items-center gap-[10%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec dark:sm:rounded-[30px] parallax-effect-glare-scale"
            >
              <Image alt="agriculture" src={Agriculture} className="w-[30%]" />
              <p className="poppins-4 text-main-light dark:text-secondary-main text-lg">
                Agriculture
              </p>
            </Tilt>
          </div>
        </div>
        <Image alt="glow" src={Glow} className="absolute top-0 -right-1/4" />
      </div>
    </div>
  );
};

export default Solutions;
