import React, { useContext } from "react";
import AppContext from "@/contexts/AppContext";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

import rocket from "../../assets/integration/rocket.svg";
import saas from "../../assets/integration/cpu-setting.svg";
import saasLight from "../../assets/integration/cpu-setting-light.svg";
import presentation from "../../assets/integration/presentation-chart.svg";
import presentationLight from "../../assets/integration/presentation-chart-Light.svg";
import monitorMobile from "../../assets/integration/monitor-mobile.svg";
import monitorMobileLight from "../../assets/integration/monitor-mobile-light.svg";
import phoneLight from "../../assets/integration/phone-light.svg";
import phoneDark from "../../assets/integration/phone-dark.svg";
import glow from "../../assets/solutions/glow.svg";

const Integration = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="w-full">
      <div className="hidden sm:flex relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[10%] items-center overflow-visible mt-[10vmin] mb-[30vmin]">
        <div className="flex flex-col">
          <div className="flex flex-1">
            <div className="relative z-20 flex gap-[5%] flex-col justify-start w-1/2 pr-[3%]">
              <p className="text-[2rem] text-main-light dark:gradient-text">
                <span className="poppins-4">Access Seamless & </span>
                <span className="poppins-7">Streamlined Integration</span>
              </p>
              <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg pt-5">
                We leverage the latest and most advanced technologies to develop
                our software solutions enabling us to deliver cutting-edge
                software solutions that drive innovation and provide a
                competitive edge for your business.
              </p>
              <hr className="border-b border-solid border-[#D8D8D8] my-6 w-[70%]" />
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[clamp(40px,10vmin,80px)] h-[clamp(40px,10vmin,80px)] rounded-full gold-gradient-bg">
                  <Image alt="rocket" src={rocket} className="w-[40%]" />
                </div>
                <div>
                  <p className="capitalize poppins-4 text-main-light dark:text-main">
                    transform your software vision into reality
                  </p>
                  <p className="flex items-center gap-2 capitalize poppins-6 text-[#399944] text-lg">
                    <span>Launch a project Today</span>{" "}
                    <BsArrowRight color="#399944" />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[55%] rounded-[25px]">
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image
                alt="phone"
                src={theme === "light" ? phoneLight : phoneDark}
                className={`${
                  theme === "light" ? "w-[78%] top-0" : "w-[65%] top-6"
                } absolute z-30 left-1/2 -translate-x-1/2`}
              />
              <div className="h-[90%] w-[100%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px]"></div>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full h-auto glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px] px-8 py-6 mt-14">
          <div className="w-[50%] flex justify-between">
            <div className="flex flex-col gap-1 items-center">
              <Image alt="saas" src={theme === "light" ? saasLight : saas} />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                SAAS
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Solutions
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                alt="data"
                src={theme === "light" ? presentationLight : presentation}
              />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                Data
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Analytics
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                alt="ui/ux"
                src={theme === "light" ? monitorMobileLight : monitorMobile}
              />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                UI/UX
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Design
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden relative flex-col mx-auto justify-between max-w-[1440px] py-5 px-[5%] items-center overflow-visible mt-[10vmin] mb-[30vmin]">
        <div className="flex flex-col">
          <div className="flex flex-col flex-1">
            <div className="relative z-30 flex gap-[5%] flex-col justify-start w-full pr-[3%]">
              <p className="text-[2rem] text-main-light dark:gradient-text">
                <span className="poppins-4">Access Seamless & </span>
                <span className="poppins-7">Streamlined Integration</span>
              </p>
              <p className="poppins-4 text-secondary-main-light dark:text-secondary-main text-lg pt-5">
                We leverage the latest and most advanced technologies to develop
                our software solutions enabling us to deliver cutting-edge
                software solutions that drive innovation and provide a
                competitive edge for your business.
              </p>
              <hr className="border-b border-solid border-[#D8D8D8] my-6 w-[100%]" />
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[clamp(60px,10vmin,80px)] h-[clamp(60px,10vmin,80px)] rounded-full gold-gradient-bg">
                  <Image alt="rocket" src={rocket} className="w-[40%]" />
                </div>
                <div>
                  <p className="capitalize poppins-4 text-main-light dark:text-main">
                    transform your software vision into reality
                  </p>
                  <p className="flex items-center gap-2 capitalize poppins-6 text-[#399944] text-lg">
                    <span>Launch a project Today</span>{" "}
                    <BsArrowRight color="#399944" />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative full mt-[5vh] h-[50vh] rounded-[25px]">
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image alt="" src={glow} className="absolute right-0 top-2/4" />
              <Image
                alt="phone"
                src={theme === "light" ? phoneLight : phoneDark}
                className={`${
                  theme === "light" ? "w-[78%] top-0" : "w-[65%] top-6"
                } absolute z-30 left-1/2 -translate-x-1/2`}
              />
              <div className="h-[90%] w-[100%] glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px]"></div>
            </div>
          </div>
        </div>
        <div className="relative mt-[20vh] z-10 w-full h-auto glassmorphism bg-[#F1F1F9] shadow-none dark:glassmorphism-sec rounded-[25px] px-8 py-6">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-1 items-center">
              <Image alt="saas" src={theme === "light" ? saasLight : saas} />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                SAAS
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Solutions
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                alt="data"
                src={theme === "light" ? presentationLight : presentation}
              />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                Data
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Analytics
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <Image
                alt="ui/ux"
                src={theme === "light" ? monitorMobileLight : monitorMobile}
              />
              <p className="jost text-2xl text-main-light dark:gold-gradient-text">
                UI/UX
              </p>
              <p className="open-sans text-secondary-main-light dark:text-secondary-main">
                Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
