import Image from "next/image";
import Link from "next/link";
import React from "react";

const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className=" object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 poppins-4 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg poppins-4 list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl py-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl py-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-10 font-bold poppins-7 text-main-light dark:gradient-text">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-1-[#F7AB0A] border-1-4 pl-5 py-5 my-5 poppins-4 text-main-light dark:text-main poppins-4 leading-[34px] mt-4 transition-all duration-300 ease-in-out">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7a80a] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
