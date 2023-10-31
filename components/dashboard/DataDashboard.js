"use client";
import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import AppContext from "@/contexts/AppContext";
import DashboardHero from "@/components/dashboard/DashboardHero";

export const DataDashboard = () => {
  const { setTheme } = useContext(AppContext);
  const containerRef = useRef();

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
      vizElement.style.width = "1280px";
      vizElement.style.height = "727px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1280px";
      vizElement.style.height = "727px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "700px";
    }
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    // var divElement = document.getElementById("viz1698669916215");
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
              // padding: "10px",
              background: "rgba(255,255,255, 0.3)",
            }}
            className="border-0 border-solid border-white sm:rounded-[60px] rounded-[20px] shadow-[inset_0_0_0_0.5vw_#155F60] dark:shadow-[inset_0_0_0_0.5vw_#032929]"
          >
            <div
              ref={containerRef}
              className="relative rounded-[calc(4vw-20px)] overflow-hidden bg-white"
            >
              <div
                id="viz1697056329627"
                style={{
                  position: "relative",
                  height: "700px",
                }}
                className="tableauPlaceholder h-[2000px_!important] min-[519px]:h-[700px_!important]  sm:rounded-[30px] rounded-[10px] overflow-[hidden_!important]"
              >
                <noscript>
                  <a href="#">
                    <img
                      alt="Home page "
                      src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Oa&#47;OaksDashboard&#47;Homepage&#47;1_rss.png"
                      style={{ border: "none" }}
                    />
                  </a>
                </noscript>
                <object className="tableauViz" style={{ display: "none" }}>
                  <param
                    name="host_url"
                    value="https%3A%2F%2Fpublic.tableau.com%2F"
                  />
                  <param name="embed_code_version" value="3" />
                  <param name="site_root" value="" />
                  <param name="name" value="OaksDashboard&#47;Homepage" />
                  <param name="tabs" value="no" />
                  <param name="toolbar" value="yes" />
                  <param
                    name="static_image"
                    value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Oa&#47;OaksDashboard&#47;Homepage&#47;1.png"
                  />
                  <param name="animate_transition" value="yes" />
                  <param name="display_static_image" value="yes" />
                  <param name="display_spinner" value="yes" />
                  <param name="display_overlay" value="yes" />
                  <param name="display_count" value="yes" />
                  <param name="language" value="en-US" />
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
