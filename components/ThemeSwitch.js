import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeSwitch = ({ theme, setTheme }) => {
  return (
    <div
      className="flex items-center justify-center h-7 w-[74px] rounded-[14px] gold-gradient-bg dark:light-gradient-bg"
      onClick={() => {
        console.log("classlist:", document.documentElement.classList);

        document.documentElement.classList.contains("dark")
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");

        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
        localStorage.setItem("oi-theme", theme === "dark" ? "light" : "dark");
      }}
    >
      <div
        className={`flex items-center ${
          theme === "light" ? "justify-end" : "justify-start"
        } h-[25px] w-[71px] p-[2px] rounded-[12px] bg-white dark:bg-main cursor-pointer transition-[justify-content] duration-200 ease-in-out`}
      >
        <div className="flex items-center p-[1px] justify-center h-full w-1/2 rounded-[14px] inner-gold-gradient-bg dark:inner-gradient-bg">
          <div className="flex items-center justify-center h-[calc(100%-0.5px)] w-[calc(100%-1px)] p-1 rounded-[12px] switch-btn-gradient-bg dark:light-switch-btn-gradient-bg">
            <div>
              {theme === "light" ? (
                <BsFillSunFill color="#ffffff" size={10} />
              ) : (
                <BsFillMoonStarsFill color="#ffffff" size={10} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
