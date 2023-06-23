import Image from "next/image";
import React from "react";
import dashboard from "../../assets/dashboardMockup/dashboard.svg";

const DashboardMockup = () => {
  return (
    <div className="w-full bg-[#155F60] dark:bg-[#032929] mt-[30px] sm:mt-[clamp(100px,15vh,300px)]">
      <div className="flex relative sm:min-h-screen mx-auto justify-center max-w-[1440px] py-10 sm:py-[5%] items-center">
        <Image alt="dashboard" src={dashboard} className="w-[90%] sm:w-[70%]" />
      </div>
    </div>
  );
};

export default DashboardMockup;
