/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useLayoutEffect } from "react";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";
import AppContext from "@/contexts/AppContext";

const Surveys = () => {
  const { setTheme } = useContext(AppContext);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <div className="mx-auto max-w-[1440px] py-5 px-[5%] sm:px-[10%] mt-10">
        <h1 className="text-[2rem] font-bold poppins-7 text-main-light dark:gradient-text">
          This is Surveys page.
        </h1>
        {/* Content goes in here */}
      </div>
    </main>
  );
};

export default Surveys;
