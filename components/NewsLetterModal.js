import AppContext from "@/contexts/AppContext";
import React, { useContext } from "react";
import Lottie from "lottie-react";
import newsletterAnimation from "../assets/newsletter.json";
import NewsLetterSubscribe, { NewsLetter } from "./home/NewsLetterSubscribe";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsLetterModal = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const { theme, setTheme, showNewsLetter, setShowNewsLetter } =
    useContext(AppContext);

  return (
    <div className="fixed z-40 top-0 left-0 w-screen h-screen overflow-y-scroll bg-[#0000005b] backdrop-blur-md flex justify-center items-center">
      <div className="flex items-center justify-around w-[clamp(720px,70%,280px)] bg-white rounded-lg p-5">
        <div className="flex flex-col gap-4 w-[50%] ">
          <p className="font-semibold text-main-light text-2xl poppins-7">
            Join Our Newsletter
          </p>
          <p className="poppins-4 text-secondary-main-light">
            Stay in the loop with exclusive updates, insider tips, and exciting
            surprises - Subscribe to our newsletter and be the first to know!
          </p>
          return (
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <NewsLetter
                subscribe={subscribe}
                status={status}
                message={message}
                isHome={true}
              />
            )}
          ></MailchimpSubscribe>
          );
        </div>
        <Lottie
          className="w-[clamp(240px,40%,180px)]"
          animationData={newsletterAnimation}
          loop={true}
        />
      </div>
    </div>
  );
};

export default NewsLetterModal;
