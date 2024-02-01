import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaNewspaper } from "@react-icons/all-files/fa/FaNewspaper";
import Timeago from "react-timeago";
import ecoImage from "../../assets/eco-weather.svg";
import { motion } from "framer-motion";
// import frenchStrings from "react-timeago/lib/language-strings/fr";
// import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const NewsletterCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" my-3 py-3 p-4 h-64 drop-shadow-sm rounded-md flex flex-col gap-2 glassmorphism dark:glassmorphism-sec-link"
    >
      <div className="flex items-end gap-2">
        {/* avatar */}

        <Image src="/eco-weather.png" width={40} height={60} alt="Icon image" />

        <span className="text-gray-500 poppins-5">
          {data?.settings?.from_name}
        </span>

        {/* time ago time */}
        <span className="text-xs ml-auto text-gray-500 poppins-4">
          <Timeago date={data?.send_time} />
        </span>
      </div>

      <div>
        <Link href={data?.archive_url || `/`}>
          <h5 className="font-semibold mb-3 poppins-6 capitalize dark:text-gray-300">
            {data?.settings?.subject_line}
          </h5>
        </Link>

        <p className="text-gray-500 poppins-4 line-clamp-4">
          {data?.settings?.preview_text}
        </p>
      </div>

      <div className="flex gap-4 mt-auto">
        <span className="p-1 border rounded-md text-xs bg-gray-200 poppins-4">
          {data?.settings?.title}
        </span>

        <Link
          target="blank"
          className="ml-auto"
          href={data?.archive_url || "/"}
        >
          <button className="ml-auto underline italic text-[#5ab3e4] poppins-4">
            Read
          </button>
        </Link>

        {/* dots icon */}
      </div>
    </motion.div>
  );
};

export default NewsletterCard;
