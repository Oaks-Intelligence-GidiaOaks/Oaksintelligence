"use client";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import AppContext from "@/contexts/AppContext";
import DashboardHero from "@/components/dashboard/DashboardHero";

export const Leaderboard = () => {
  const { setTheme } = useContext(AppContext);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  useEffect(() => {
    // Function to load Tableau script
    const loadTableauScript = () => {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
      script.async = true;
      script.onload = () => {
        // Script loaded successfully
        console.log("Tableau script loaded.");
        // Here you can write additional code that depends on the script being loaded
      };
      script.onerror = (error) => {
        // Error occurred while loading script
        console.error("Error loading Tableau script:", error);
      };
      document.body.appendChild(script);
    };

    // Call the function to load the script
    loadTableauScript();

    // Cleanup function
    return () => {
      // Remove the script from the DOM to prevent memory leaks
      const tableauScript = document.querySelector(
        '[src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"]'
      );
      if (tableauScript) {
        tableauScript.remove();
      }
    };
  }, []);

  return (
    <main
      id="view"
      className="w-full bg-[#155F60] dark:bg-[#032929] mt-[30px] p-[5vmax] flex justify-center"
    >
      <div className="w-fit overflow-x-scroll">
        <tableau-viz
          toolbar="hidden"
          id="tableauViz"
          width="1200"
          height="827"
          // src="https://public.tableau.com/views/Leaderboard_Kehinde/Top?:language=en-GB&:sid=&:display_count=n&:origin=viz_share_link"
          src="https://public.tableau.com/views/NewLeaderboard/Leaderboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        ></tableau-viz>
      </div>
    </main>
  );
};
