"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiError } from "react-icons/bi";
import { IoMdDoneAll } from "react-icons/io";
import { Rings } from "react-loader-spinner";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsLetter = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState("");
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;

    if (result?.[0]?.trim() !== "0") {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  };
  const handleSubmit = () => {
    const emailValidated = subscribe({ EMAIL: email });

    // Clear email field if email is validated
    emailValidated && setEmail("");

    return email && email.indexOf("@") !== -1 && emailValidated;
  };
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="flex flex-col w-[21%] min-w-[240px] gap-4">
      <p className="poppins-6 text-white text-xl mb-2">Newsletter</p>
      <p className="poppins-4 text-main text-base">
        Sign up for our newsletter and stay up to date with technology news
        trends
      </p>
      <div className="border border-solid border-main rounded-lg p-[6px] flex flex-col justify-between">
        <input
          className="flex py-2 remove-autofill-bg text-white flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="none"
          onKeyUp={handleEnterKey}
        />
        <button
          onClick={handleSubmit}
          className="gold-gradient-bg hue-rotate-60 rounded-md py-2 px-3 transition-all duration-300 ease hover:hue-rotate-0 hover:backdrop-brightness-50"
        >
          <span className="text-main poppins-4">Subscribe</span>
        </button>
      </div>
      <div className="poppins-4 -mt-4 text-main text-sm">
        {status === "sending" && (
          <div className="flex items-start justify-start pt-1">
            <Rings
              height="20"
              width="20"
              color="#ffffff"
              radius="3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
            <p className="text-main flex-[0.9]">Subscribing...</p>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-start justify-start pt-1">
            <BiError color="red" className="flex-[0.1] mt-[3px]" />
            <p
              className="text-[red] flex-[0.9]"
              dangerouslySetInnerHTML={{ __html: getMessage(message) }}
            />
          </div>
        )}
        {status === "success" && (
          <div className="flex items-start justify-start pt-1">
            <IoMdDoneAll color="#399944" className="flex-[0.1] mt-[3px]" />
            <p
              className="flex-[0.9] text-[#399944]"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const NewsLetterSubscribe = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <NewsLetter subscribe={subscribe} status={status} message={message} />
      )}
    ></MailchimpSubscribe>
  );
};

export default NewsLetterSubscribe;
