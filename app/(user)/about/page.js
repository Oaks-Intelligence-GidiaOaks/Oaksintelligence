"use client";
import Business from "@/components/about/Business";
import FirstSection from "@/components/about/FirstSection";
import Framework from "@/components/about/Framework";
import Hero from "@/components/about/Hero";
import Integration from "@/components/about/Integration";
import Services from "@/components/home/Services";
import Solutions from "@/components/about/Solutions";
import React, { useContext, useLayoutEffect } from "react";
import AppContext from "@/contexts/AppContext";

const About = () => {
  const { setTheme } = useContext(AppContext);

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
      <Framework />
      <Solutions />
      <Services />
      <Business />
      <Integration />
    </main>
  );
};

export default About;
