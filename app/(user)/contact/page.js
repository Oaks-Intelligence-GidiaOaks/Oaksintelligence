"use client";
import React, { useContext, useLayoutEffect } from "react";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";
import AppContext from "@/contexts/AppContext";
import { PageEvent } from "../../../modules/socket/constants";
import useSubmitPageView from "../../../contexts/hooks/useSubmitPageView";

const About = () => {
  const { setTheme } = useContext(AppContext);
  useSubmitPageView(PageEvent.CONTACT_US);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <Hero />
      <FirstSection />
      <Remark />
    </main>
  );
};

export default About;
