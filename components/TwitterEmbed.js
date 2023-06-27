import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterEmbed = () => {
  return (
    <div className="w-full bg-white my-10 dark:glassmorphism-sec rounded-[10px] dark:rounded-[10px] transition-[background] duration-500 ease-in-out">
      <div className="block dark:hidden w-full overflow-hidden">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "jsjags01",
          }}
          options={{
            height: "400px",
            theme: "light",
            chrome: "transparent",
            limit: 10,
          }}
          renderError={(_err) => (
            <div className="w-full flex items-center justify-center">
              <p className="w-fit poppins-4 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg mt-4 sm:mt-0 text-justify py-4">
                Could not load timeline. Please check your network and refresh
                the page.
              </p>
            </div>
          )}
        />
      </div>
      <div className="hidden dark:block w-full rounded-[10px] overflow-hidden">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "jsjags01",
          }}
          options={{
            height: "400px",
            theme: "dark",
            chrome: "transparent",
            limit: 10,
          }}
          renderError={(_err) => (
            <div className="w-full flex items-center justify-center">
              <p className="w-fit poppins-4 text-secondary-main-light dark:text-secondary-main text-base sm:text-lg mt-4 sm:mt-0 text-justify py-4">
                Could not load timeline. Please check your network and refresh
                the page.
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TwitterEmbed;
