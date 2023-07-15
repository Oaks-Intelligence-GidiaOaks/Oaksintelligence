import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import { Timeline, Tweet } from "react-twitter-widgets";
import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import { motion } from "framer-motion";
import { EmbeddedPost, FacebookProvider } from "react-facebook";

const itemRevealLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};
const itemRevealRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

const SocialMediaEmbed = () => {
  return (
    <div className="relative w-full my-10">
      <div className="p-6">
        <motion.p
          variants={itemRevealRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[1.5rem] sm:text-[2.3rem] gradient-text mt-4"
        >
          <span className="block text-center poppins-4">
            <span>Connect </span>
            <span className="poppins-6">With Us</span>
          </span>
        </motion.p>
        <motion.p
          variants={itemRevealLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="poppins-4 text-main dark:text-main text-base leading-8 sm:text-xl max-w-[784px] mx-auto text-center pt-2"
        >
          Stay Updated and Engage with Us on Your Favorite Platforms
        </motion.p>
      </div>
      <div className="relative w-full my-10">
        <div className="w-full rounded-[10px] overflow-visible">
          <div className="flex relative z-10 flex-nowrap gap-6 px-[5%] py-6 overflow-scroll hide-scrollbar">
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll font-['Poppins,sans-serif_!important'] scrollbar-hidden">
              <LinkedInEmbed
                postUrl="https://www.linkedin.com/posts/oaks-intelligence-limited_ecoweather-ecotracker-nigeria-activity-7085600487823032320-1eSK?utm_source=share&utm_medium=member_desktop"
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7085600486321512448"
                width={325}
              />
            </div>
            <div className="max-h-[372px] px-2 min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll scrollbar-hidden">
              <Tweet
                options={{
                  chrome: "noborders transparent",
                }}
                renderError={(_err) => (
                  <p className="poppins-4 p-3">Could not load tweet</p>
                )}
                tweetId="1679608885210906624"
              />
            </div>
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden bg-white rounded overflow-y-scroll scrollbar-hidden">
              <FacebookEmbed
                placeholderSpinnerDisabled={true}
                url="https://web.facebook.com/oaksintel/posts/pfbid0cvUfLSAtKdyCY4DKoZhctBcMWhc5kD13tAf2Vdcn8wKCLgEEjD55UajCnDfsQ8ynl?__cft__[0]=AZXWdxXO6LjFKbvvrJI-wA_ibYtqbYxS6AJeaeOH34ryVM2DhS8EzqtVHU6RaVJvzW1omxxSgV_PgjRs9y_c_fNfQ-vREE7m2imnOTHZWA75cX8TQJx6Y6ew05K7s3U7qv1j8kEAka-CRkCwM4Ulc8e9ygh6LG9elspdUkchHL1Aws9ZVgZ0_rLYxuCiUfYWIF8&__tn__=%2CO%2CP-R"
                width={325}
              />
            </div>
            <div className="max-h-[372px] min-w-[328px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll scrollbar-hidden">
              <InstagramEmbed
                igVersion=""
                url="https://www.instagram.com/p/CurafBaoVOb/"
                width={328}
              />
            </div>
            {/* Youtube */}
            {/* <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] overflow-hidden rounded bg-white overflow-y-scroll">
              <YouTubeEmbed
                placeholderImageUrl="https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=1689230415815"
                url="https://www.youtube.com/watch?v=HpVOs5imUN0"
                width={325}
              />
            </div> */}
          </div>
          <div className="w-[80%] absolute h-[440px] left-1/2 -top-12 -translate-x-1/2 bg-white my-10 dark:glassmorphism-sec rounded-[10px] dark:rounded-[10px] transition-[background] duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEmbed;
