"use client";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rings } from "react-loader-spinner";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import AppContext from "@/contexts/AppContext";

const defaultStatus = {
  firstName: false,
  lastName: false,
  email: false,
};

export const BlogNewsLetter = ({
  subscribe,
  status,
  message,
  setShowModal,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(status);

  const [invalid, setInvalid] = useState(defaultStatus);

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
    setInvalid(defaultStatus);

    if (firstName.trim().length < 1) {
      setInvalid((prev) => ({ ...prev, firstName: true }));
    }
    if (lastName.trim().length < 1) {
      setInvalid((prev) => ({ ...prev, lastName: true }));
    }
    if (email.trim().length < 1) {
      setInvalid((prev) => ({ ...prev, email: true }));
    }

    if (
      firstName.trim().length < 1 ||
      lastName.trim().length < 1 ||
      email.trim().length < 1
    )
      return;

    const emailValidated = subscribe({
      EMAIL: email,
      FNAME: firstName,
      LNAME: lastName,
    });

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
  const handleFirstName = (e) => {
    setInvalid((prev) => ({ ...prev, firstName: false }));
    const result = e.target.value.replace(/[0-9]/g, "");
    setFirstName(result);
  };
  const handleLastName = (e) => {
    setInvalid((prev) => ({ ...prev, lastName: false }));
    const result = e.target.value.replace(/[0-9]/g, "");
    setLastName(result);
  };
  const handleEmail = (e) => {
    setInvalid((prev) => ({ ...prev, email: false }));
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-x-2">
        <div
          className={`border border-solid ${
            invalid.firstName ? "border-red-600" : "border-main"
          } rounded-lg p-[6px] flex flex-col justify-between`}
        >
          <input
            className="flex py-2 remove-autofill-bg text-main-light dark:text-secondary-main flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
            placeholder="First Name"
            onChange={handleFirstName}
            value={firstName}
            autoComplete="none"
          />
        </div>
        <div
          className={`border border-solid ${
            invalid.lastName ? "border-red-600" : "border-main"
          } rounded-lg p-[6px] flex flex-col justify-between`}
        >
          <input
            className="flex py-2 remove-autofill-bg text-main-light dark:text-secondary-main flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
            placeholder="Last Name"
            onChange={handleLastName}
            value={lastName}
            autoComplete="none"
          />
        </div>
      </div>
      <div
        className={`w-full border border-solid ${
          invalid.email ? "border-red-600" : "border-main"
        } rounded-lg p-[6px] flex justify-between`}
      >
        <input
          className="flex py-2 remove-autofill-bg text-main-light dark:text-secondary-main flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
          placeholder="Your email"
          onChange={handleEmail}
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
          <div className="flex text-main-light dark:text-main items-start justify-start pt-1">
            <Rings
              height="20"
              width="20"
              radius="3"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
            <p className="flex-[0.9]">Subscribing...</p>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-start justify-start pt-1">
            <svg
              className="text-red-500 flex-[0.1] mt-[3px]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* <BiError color="red" className="flex-[0.1] mt-[3px]" /> */}
            <p
              className="text-[red] flex-[0.9]"
              dangerouslySetInnerHTML={{ __html: getMessage(message) }}
            />
          </div>
        )}
        {status === "success" && (
          <div className="flex items-start justify-start pt-1 text-transparent">
            <svg
              width="15"
              height="15"
              className="text-[#399944] fill-[#399944] flex-[0.1] mt-[3px]"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p
              className="flex-[0.9] text-[#399944]"
              dangerouslySetInnerHTML={{ __html: message }}
            />
            {/* Clear email on success */}
            {/* Remove modal on success */}
            {status === "success" &&
              setTimeout(() => {
                setShowModal(false);
              }, 3000)}
          </div>
        )}
      </div>
    </div>
  );
};

const BlogNewsLetterSubscribe = ({ setShowModal }) => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <BlogNewsLetter
          subscribe={subscribe}
          status={status}
          message={message}
          setShowModal={setShowModal}
        />
      )}
    ></MailchimpSubscribe>
  );
};

export default BlogNewsLetterSubscribe;
