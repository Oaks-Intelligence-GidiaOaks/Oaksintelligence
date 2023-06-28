"use client";
import React, { useLayoutEffect } from "react";

const SetTheme = ({ theme, setTheme }) => {
  const cachedTheme = localStorage.getItem("oi-theme");
  setTheme(cachedTheme ? cachedTheme : "light");

  useLayoutEffect(() => {
    cachedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    setTheme((prev) => prev);
  }, []);
  return <div></div>;
};

export default SetTheme;
