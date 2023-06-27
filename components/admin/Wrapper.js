"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../home/Header";
import "../../app/(admin)/blog/globals.css";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Oaks Intelligence",
  description: "Tech Startup",
};

export const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const cachedTheme = localStorage.getItem("oi-theme");
  console.log(cachedTheme);
  const [theme, setTheme] = useState(cachedTheme ? cachedTheme : "light");
  const setGlobalTheme = (value) => {
    setTheme(value);
  };

  useEffect(() => {
    localStorage.setItem("oi-theme", theme ?? "light");
  }, [theme]);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    setTheme((prev) => prev);
  }, []);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </>
  );
};