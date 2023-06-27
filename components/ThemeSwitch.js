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
      <div>
        <div
          className={`relative flex items-center h-[25px] w-[71px] p-[2px] rounded-[12px] bg-white dark:bg-main cursor-pointer transition-all duration-500 ease-in-out`}
        >
          <div
            className={`absolute flex items-center justify-center p-[1px] h-[calc(100%-4px)] w-[calc(50%-4px)] rounded-[14px] inner-gold-gradient-bg dark:inner-gradient-bg  ${
              theme === "light"
                ? "right-[2px]"
                : "right-[calc(100%-2px)] translate-x-[100%]"
            } transition-all duration-500 ease-in-out`}
          >
            <div
              className={`flex items-center justify-center h-[calc(100%-1px)] w-[calc(100%-1px)] p-1 rounded-[12px] switch-btn-gradient-bg dark:light-switch-btn-gradient-bg transition-all duration-500 ease-in-out`}
            >
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
    </div>
  );
};

export default ThemeSwitch;
