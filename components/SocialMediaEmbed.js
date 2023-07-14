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
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll font-['Poppins,sans-serif_!important']">
              <LinkedInEmbed
                postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
                width={325}
              />
            </div>
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll">
              <Tweet
                options={{
                  chrome: "noborders transparent",
                }}
                renderError={(_err) => (
                  <p className="poppins-4 p-3">Could not load tweet</p>
                )}
                tweetId="841418541026877441"
              />
            </div>
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden bg-white rounded overflow-y-scroll">
              <FacebookEmbed
                placeholderSpinnerDisabled={true}
                url="https://web.facebook.com/now.arsenal/posts/pfbid028AWXRPveDrfGU9b9owyxidRemXjfCfVkTkkWYv1eVjErhACbpZWUeQ35YBCfsXfcl?__cft__[0]=AZUWCfre9-crbIZEL-lvwy0zMQwmmDwQcUsQKKkdppokRK51VWCrXnZ4inOF2z9qx0XPk6PDjYtyd_OC3G5TOlMnz1gtML59TSR42NCXAD3nA7S4Xrf1AUqagLGi3MPTYj94_-_84L7SzS72j0kp5Bg_glzikpi2svWMGHCuJ9_7dDFAHIJuv2tZH4A7qCUaG0ALrPDi0NtBDrRCBtgq4-Rl&__tn__=%2CO%2CP-R"
                width={325}
              />
            </div>
            <div className="max-h-[372px] min-w-[328px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded bg-white overflow-y-scroll">
              <InstagramEmbed
                igVersion=""
                url="https://www.instagram.com/p/CUbHfhpswxt/"
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
