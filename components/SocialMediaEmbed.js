"use client";

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
            {/* Linkedin */}
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded-xl bg-white overflow-y-scroll font-['Poppins,sans-serif_!important'] scrollbar-hidden">
              {/* <LinkedInEmbed
                // postUrl="https://www.linkedin.com/posts/oaks-intelligence-limited_ecoweather-ecotracker-nigeria-activity-7085600487823032320-1eSK?utm_source=share&utm_medium=member_desktop"
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7085600486321512448"
                width={325}
              /> */}
              <div
                className="sk-ww-linkedin-page-post"
                data-embed-id="176669"
              />
              <script
                src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"
                async
                defer
              />
            </div>
            {/* X */}
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden bg-white rounded-xl overflow-y-scroll scrollbar-hidden">
              {/* <Tweet
                options={{
                  chrome: "noborders transparent",
                }}
                renderError={(_err) => (
                  <p className="poppins-4 p-3">Could not load tweet</p>
                )}
                tweetId="1679608885210906624"
              /> */}
              {/* <Timeline
                dataSource={{ sourceType: "profile", screenName: "Oaksintel" }}
                options={{
                  width: "320",
                  height: "372",
                  // dnt: false,
                  borderColor: "#FF0000",
                }}
              /> */}
              <a
                className="twitter-timeline"
                data-width="325"
                data-height="372"
                href="https://twitter.com/Oaksintel?ref_src=twsrc%5Etfw"
              />
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                // charset="utf-8"
                charSet="utf-8"
              />
            </div>
            {/* Facebook */}
            <div className="max-h-[372px] min-w-[325px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden bg-white rounded-xl overflow-y-scroll scrollbar-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Foaksintel&tabs=timeline&width=325&height=372&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="325"
                height="372"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                // frameborder="0"
                frameBorder={0}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            {/* Instagram */}
            <div className="max-h-[372px] min-w-[328px] drop-shadow-[0_5px_7px_#00000035] inner-scrollbar overflow-hidden rounded-xl bg-white overflow-y-scroll scrollbar-hidden">
              <div className="sk-instagram-feed" data-embed-id="176661" />
              <script
                src="https://widgets.sociablekit.com/instagram-feed/widget.js"
                async
                defer
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
