"use client";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import AppContext from "@/contexts/AppContext";
import DashboardHero from "@/components/dashboard/DashboardHero";
import { DataDashboard } from "@/components/dashboard/DataDashboard";
import DashboardInstructions from "@/components/dashboard/DashboardInstructions";
import AboutLeaderboard from "@/components/dashboard/AboutLeaderboard";

const About = () => {
  const { setTheme } = useContext(AppContext);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  useEffect(() => {
    var divElement = document.getElementById("viz1697056329627");
    var vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "100%";
      vizElement.style.height = "877px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "100%";
      vizElement.style.height = "877px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "3327px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out pb-10">
      <DashboardHero />
      <DataDashboard />
      <DashboardInstructions />
      <AboutLeaderboard />
    </main>
  );
};

export default About;
