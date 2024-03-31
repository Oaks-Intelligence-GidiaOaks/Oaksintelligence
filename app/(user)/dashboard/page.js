"use client";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import AppContext from "@/contexts/AppContext";
import DashboardHero from "@/components/dashboard/DashboardHero";
import { DataDashboard } from "@/components/dashboard/DataDashboard";
import DashboardInstructions from "@/components/dashboard/DashboardInstructions";
import AboutLeaderboard from "@/components/dashboard/AboutLeaderboard";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import Overview from "@/components/dashboard/Overview";
import Disclaimer from "@/components/dashboard/Disclaimer";
// import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

const About = () => {
  const { setTheme } = useContext(AppContext);
  const scriptRef = useRef();

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  useEffect(() => {
    // var divElement = document.getElementById("viz1711485305864");
    // var vizElement = divElement.getElementsByTagName("object")[0];
    // if (divElement.offsetWidth > 800) {
    //   vizElement.style.width = "100%";
    //   vizElement.style.height = "877px";
    // } else if (divElement.offsetWidth > 500) {
    //   vizElement.style.width = "100%";
    //   vizElement.style.height = "877px";
    // } else {
    //   vizElement.style.width = "100%";
    //   vizElement.style.height = "3327px";
    // }
    // var scriptElement = document.createElement("script");
    // scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    // vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);
  // <div class='tableauPlaceholder' id='viz1711485305864' style='position: relative'><noscript><a href='#'><img alt='Bottom ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Le&#47;Leaderboard_Kehinde&#47;Bottom&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Leaderboard_Kehinde&#47;Bottom' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Le&#47;Leaderboard_Kehinde&#47;Bottom&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1711485305864');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1200px';vizElement.style.height='827px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1200px';vizElement.style.height='827px';} else { vizElement.style.width='100%';vizElement.style.height='2227px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out pb-10">
      <DashboardHero />
      <Overview />
      <DataDashboard />
      <DashboardInstructions />
      {/* <AboutLeaderboard /> */}
      <Leaderboard />
      <Disclaimer />
      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GANALYTICS_ID} />
    </main>
  );
};

export default About;
