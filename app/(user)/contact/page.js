"use client";
import React from "react";
import Hero from "@/components/contact/Hero";
import FirstSection from "@/components/contact/FirstSection";
import Remark from "@/components/contact/Remark";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <Hero />
      <FirstSection />
      <Remark />
    </main>
  );
};

export default About;
