import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import { Timeline } from "react-twitter-widgets";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

const TwitterEmbed = () => {
  return (
    <div className="w-full bg-white my-10 dark:glassmorphism-sec rounded-[10px] dark:rounded-[10px] transition-[background] duration-500 ease-in-out">
      <div className="block dark:hidden w-full overflow-hidden">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FacebookEmbed
            url="https://www.facebook.com/andrewismusic/posts/451971596293956"
            width={550}
          />
        </div>
      </div>
      <div className="hidden dark:block w-full rounded-[10px] overflow-hidden p-6">
        <div style={{ display: "flex", gap: "24px", overflowX: "scroll" }}>
          <div className="max-h-[372px] rounded bg-white overflow-y-scroll">
            <FacebookEmbed
              url="https://web.facebook.com/now.arsenal/posts/pfbid028AWXRPveDrfGU9b9owyxidRemXjfCfVkTkkWYv1eVjErhACbpZWUeQ35YBCfsXfcl?__cft__[0]=AZUWCfre9-crbIZEL-lvwy0zMQwmmDwQcUsQKKkdppokRK51VWCrXnZ4inOF2z9qx0XPk6PDjYtyd_OC3G5TOlMnz1gtML59TSR42NCXAD3nA7S4Xrf1AUqagLGi3MPTYj94_-_84L7SzS72j0kp5Bg_glzikpi2svWMGHCuJ9_7dDFAHIJuv2tZH4A7qCUaG0ALrPDi0NtBDrRCBtgq4-Rl&__tn__=%2CO%2CP-R"
              width={325}
            />
          </div>
          {/* <div className="max-h-[372px] rounded bg-white overflow-y-scroll">
            <InstagramEmbed
              igVersion=""
              url="https://www.instagram.com/p/CUbHfhpswxt/"
              width={328}
            />
          </div>
          <div className="max-h-[372px] rounded bg-white overflow-y-scroll">
            <LinkedInEmbed
              postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
              url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
              width={325}
            />
          </div> */}
          {/* <div className="max-h-[372px] rounded bg-white overflow-y-scroll">
            <TwitterEmbed
              url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
              width={325}
            />
          </div>
          <div className="max-h-[372px] rounded bg-white overflow-y-scroll">
            <YouTubeEmbed
              placeholderImageUrl="https://i.ytimg.com/vi/HpVOs5imUN0/maxresdefault.jpg?t=1689230415815"
              url="https://www.youtube.com/watch?v=HpVOs5imUN0"
              width={325}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TwitterEmbed;
