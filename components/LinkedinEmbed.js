"use client";
import { useState, useEffect } from "react";

const LinkedinEmbed = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div style={domLoaded ? undefined : { visibility: "hidden" }}>
      {/* <LinkedInEmbed
    // postUrl="https://www.linkedin.com/posts/oaks-intelligence-limited_ecoweather-ecotracker-nigeria-activity-7085600487823032320-1eSK?utm_source=share&utm_medium=member_desktop"
    url="https://www.linkedin.com/embed/feed/update/urn:li:share:7085600486321512448"
    width={325}
  /> */}
      <div
        class="sk-ww-linkedin-page-post"
        data-embed-id="176669"
        style={domLoaded ? undefined : { visibility: "hidden" }}
      />
      <script
        src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"
        async
        defer
      />
    </div>
  );
};

export default LinkedinEmbed;
