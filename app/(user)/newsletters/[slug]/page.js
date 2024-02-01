/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
// import { useClient } from "next/server";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";
import AppContext from "@/contexts/AppContext";
import Link from "next/link";
import NewsletterBanner from "@/components/blogs/NewsletterBanner";
import { API_BASE, API_TOKEN } from "@/constants/mailchimp";
import axios from "axios";

const Newsletters = ({ params }) => {
  const [pageData, setPageData] = useState(null);
  // const { setTheme } = useContext(AppContext);
  // const client = useClient();

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    },
  };

  // console.log(axiosConfig);

  const id = params.slug;

  // console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch(
        //   `http://localhost:3000/api/get_campaigns/${id}`
        // );

        // const resp = await fetch("http://www.google.com");

        const resp = axios
          .get(
            `${API_BASE}campaigns/${id}/content?status=sent&offset=${0}&count=10`,
            axiosConfig
          )
          .then((res) => res)
          .catch((err) => console.error("Axios Error", err));

        console.log("new Data ", resp);

        setPageData(resp);
      } catch (err) {
        console.error(err);
        setPageData("error");
      }
    }

    fetchData();
  }, []);

  if (pageData) console.log(pageData);

  // useLayoutEffect(() => {
  //   const cachedTheme = localStorage.getItem("oi-theme")
  //     ? localStorage.getItem("oi-theme")
  //     : "light";
  //   setTheme(cachedTheme);
  // }, [setTheme]);

  // const formatDate = (d) => {
  //   let newDate = new Date(d);

  //   let mm = newDate.getMonth();
  //   let yy = newDate.getFullYear();
  //   let dd = newDate.getDay();

  //   return `${dd}/${mm}/${yy}`;
  // };

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <div className="mx-auto max-w-[1560px]  border border-red-500 py-5 px-[5%] sm:px-[10%] mt-10">
        {/* <NewsletterBanner /> */}

        {/* Content goes in here */}
        {/* {pageData === "error" ? (
          <div> Error Ocurred </div>
        ) : (
          pageData &&
          pageData?.map((item) => (
            <div className="border p-3 my-2 rounded-md " key={item.id}>
              <span className="text-sm text-gray-400">
                posted on {formatDate(item.send_time)}
              </span>

              <Link href={item.archive_url}>
                <h1 className="py-1 font-semibold text-xl  text-blue-400">
                  {item.settings.title}
                </h1>
              </Link>

              <Link href={item.archive_url}>
                <h2 className="italic text-gray-600">
                  {item.settings?.subject_line}
                </h2>
              </Link>

              <p className="py-3">{item.settings?.preview_text}</p>
            </div>
          ))
        )} */}
      </div>
    </main>
  );
};

export default Newsletters;
