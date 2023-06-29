/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useLayoutEffect } from "react";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";
import AppContext from "@/contexts/AppContext";

const About = () => {
  const { setTheme } = useContext(AppContext);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <div className="mx-auto max-w-[1440px] py-5 px-[5%] sm:px-[10%] mt-10">
        <h1 className="text-[2rem] font-bold poppins-7 text-main-light dark:gradient-text">
          Terms and Conditions for Oaks Intelligence
        </h1>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Introduction
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our website, oaksintelligence.com accessible
          at https://www.oaksintelligence.com.
        </p>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          These Terms will be applied fully and affect to your use of this
          Website. By using this Website, you agreed to accept all terms and
          conditions written in here. You must not use this Website if you
          disagree with any of these Website Standard Terms and Conditions.
          These Terms and Conditions have been generated with the help of the{" "}
          <a href="https://www.termsandcondiitionssample.com">
            Terms And Conditiions Sample Generator
          </a>
          .
        </p>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          Minors or people below 18 years old are not allowed to use this
          Website.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Intellectual Property Rights
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          Other than the content you own, under these Terms, Oaks Intelligence
          and/or its licensors own all the intellectual property rights and
          materials contained in this Website.
        </p>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          You are granted limited license only for purposes of viewing the
          material contained on this Website.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Restrictions
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          You are specifically restricted from all of the following:
        </p>

        <ul className="list-disc text-main-light dark:text-main pl-4">
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            publishing any Website material in any other media;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            selling, sublicensing and/or otherwise commercializing any Website
            material;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            publicly performing and/or showing any Website material;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            using this Website in any way that is or may be damaging to this
            Website;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            using this Website in any way that impacts user access to this
            Website;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            using this Website contrary to applicable laws and regulations, or
            in any way may cause harm to the Website, or to any person or
            business entity;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            engaging in any data mining, data harvesting, data extracting or any
            other similar activity in relation to this Website;
          </li>
          <li className="text-main-light dark:text-main poppins-4 pl-4 mt-4">
            using this Website to engage in any advertising or marketing.
          </li>
        </ul>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          Certain areas of this Website are restricted from being access by you
          and Oaks Intelligence may further restrict access by you to any areas
          of this Website, at any time, in absolute discretion. Any user ID and
          password you may have for this Website are confidential and you must
          maintain confidentiality as well.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Your Content
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          In these Website Standard Terms and Conditions, "Your Content" shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant Oaks
          Intelligence a non-exclusive, worldwide irrevocable, sub licensable
          license to use, reproduce, adapt, publish, translate and distribute it
          in any and all media.
        </p>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          Your Content must be your own and must not be invading any
          third-party's rights. Oaks Intelligence reserves the right to remove
          any of Your Content from this Website at any time without notice.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          No warranties
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          This Website is provided "as is," with all faults, and Oaks
          Intelligence express no representations or warranties, of any kind
          related to this Website or the materials contained on this Website.
          Also, nothing contained on this Website shall be interpreted as
          advising you.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Limitation of liability
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          In no event shall Oaks Intelligence, nor any of its officers,
          directors and employees, shall be held liable for anything arising out
          of or in any way connected with your use of this Website whether such
          liability is under contract.  Oaks Intelligence, including its
          officers, directors and employees shall not be held liable for any
          indirect, consequential or special liability arising out of or in any
          way related to your use of this Website.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Indemnification
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          You hereby indemnify to the fullest extent Oaks Intelligence from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages and expenses arising in any way related to your breach of any
          of the provisions of these Terms.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Severability
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          If any provision of these Terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Variation of Terms
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          Oaks Intelligence is permitted to revise these Terms at any time as it
          sees fit, and by using this Website you are expected to review these
          Terms on a regular basis.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Assignment
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          The Oaks Intelligence is allowed to assign, transfer, and subcontract
          its rights and/or obligations under these Terms without any
          notification. However, you are not allowed to assign, transfer, or
          subcontract any of your rights and/or obligations under these Terms.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Entire Agreement
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          These Terms constitute the entire agreement between Oaks Intelligence
          and you in relation to your use of this Website, and supersede all
          prior agreements and understandings.
        </p>

        <h2 className="text-[1.5rem] font-semibold poppins-5 mt-6 text-main-light dark:gradient-text">
          Governing Law & Jurisdiction
        </h2>

        <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4">
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of ng, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in ng for the
          resolution of any disputes.
        </p>
      </div>
    </main>
  );
};

export default About;
