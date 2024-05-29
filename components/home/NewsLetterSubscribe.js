"use client";
import React, { useState } from "react";
import { BiError } from "@react-icons/all-files/bi/BiError";
import { IoMdDoneAll } from "@react-icons/all-files/io/IoMdDoneAll";
import { Rings } from "react-loader-spinner";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const defaultStatus = {
  firstName: false,
  lastName: false,
  email: false,
};

export const NewsLetter = ({
  subscribe,
  status,
  message,
  isHome,
  setShowNewsletter,
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
    console.log(message);
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

  return isHome ? (
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
            <BiError color="red" className="flex-[0.1] mt-[3px]" />
            <p
              className="text-[red] flex-[0.9]"
              dangerouslySetInnerHTML={{ __html: getMessage(message) }}
            />
          </div>
        )}
        {status === "success" && (
          <div className="flex items-start justify-start pt-1 text-transparent">
            <IoMdDoneAll color="#399944" className="flex-[0.1] mt-[3px]" />
            <p
              className="flex-[0.9] text-[#399944]"
              dangerouslySetInnerHTML={{ __html: message }}
            />
            {/* Clear email on success */}
            {/* Remove modal on success */}
            {status === "success" &&
              setTimeout(() => {
                setShowNewsletter(false);
              }, 3000)}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-[21%] min-w-[240px] gap-4">
      <div className="poppins-6 text-white text-xl mb-2">Newsletter</div>
      <div className="poppins-4 text-main text-base">
        <div className="poppins-4 dark:text-secondary-main text-secondary-main-light">
          Sign up for our Ecoweather Newsletter to stay ahead of the financial
          forecast and elevate your financial intelligence.
          <br />
        </div>
      </div>

      <div className="flex gap-x-2">
        <div
          className={`border border-solid ${
            invalid.firstName ? "border-red-600" : "border-main"
          } rounded-lg p-[6px] flex flex-col justify-between`}
        >
          <input
            className="flex py-2 remove-autofill-bg text-white flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
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
            className="flex py-2 remove-autofill-bg text-white flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
            placeholder="Last Name"
            onChange={handleLastName}
            value={lastName}
            autoComplete="none"
          />
        </div>
      </div>
      <div
        className={`border border-solid ${
          invalid.email ? "border-red-600" : "border-main"
        } rounded-lg p-[6px] flex flex-col justify-between`}
      >
        <input
          className="flex py-2 remove-autofill-bg text-white flex-1 min-w-[100px] poppins-4 pl-2 bg-transparent outline-none caret-[#eb8a00] w-full"
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
  const oaksMCURL =
    "https://oaksintelligence.us21.list-manage.com/subscribe/post?u=a5912a723f99098c49a84c86e&amp;id=7bfa4858ed&amp;f_id=00ac5ce1f0";
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL ?? oaksMCURL;

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
