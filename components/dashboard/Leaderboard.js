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
    var divElement = document.getElementById("viz1697709748497");
    var vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "100%";
      vizElement.style.height = "1027px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "100%";
      vizElement.style.height = "1027px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "1127px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <main
      id="view"
      className="w-full bg-[#155F60] dark:bg-[#032929] mt-[30px] "
    >
      <div className={"max-w-[1800px] mx-auto"}>
        <div style={{ position: "relative", padding: "5vmax" }}>
          <div
            style={{
              position: "relative",
              padding: "4vmax",
              background: "rgba(255,255,255, 0.3)",
            }}
            className="border border-solid border-white sm:rounded-[60px] rounded-[20px] shadow-[inset_0_0_0_0.5vw_#155F60] dark:shadow-[inset_0_0_0_0.5vw_#032929]"
          >
            <div className="relative rounded-[calc(4vw-20px)] overflow-hidden bg-white">
              <div
                class="tableauPlaceholder"
                id="viz1697709748497"
                style={{
                  position: "relative",
                }}
                className="sm:rounded-[30px] rounded-[10px] overflow-[hidden_!important]"
              >
                <noscript>
                  <a href="#">
                    <img
                      alt="Dashboard 1 "
                      src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Le&#47;Leaderboard_16975682382460&#47;Dashboard1&#47;1_rss.png"
                      style={{ border: "none" }}
                    />
                  </a>
                </noscript>
                <object class="tableauViz" style={{ display: "none" }}>
                  <param
                    name="host_url"
                    value="https%3A%2F%2Fpublic.tableau.com%2F"
                  />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="" />
                  <param
                    name="name"
                    value="Leaderboard_16975682382460&#47;Dashboard1"
                  />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="yes" />
                  <param
                    name="static_image"
                    value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Le&#47;Leaderboard_16975682382460&#47;Dashboard1&#47;1.png"
                  />
                  <param name="animate_transition" value="yes" />
                  <param name="display_static_image" value="yes" />
                  <param name="display_spinner" value="yes" />
                  <param name="display_overlay" value="yes" />
                  <param name="display_count" value="yes" />
                  <param name="language" value="en-US" />
                  <param name="filter" value="publish=yes" />
                </object>
              </div>
            </div>
          </div>
        </div>
        <div id="view"></div>
      </div>
    </main>
  );
};
