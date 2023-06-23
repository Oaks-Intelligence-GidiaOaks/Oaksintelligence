"use client";
import Business from "@/components/about/Business";
import FirstSection from "@/components/about/FirstSection";
import Framework from "@/components/about/Framework";
import Hero from "@/components/about/Hero";
import Integration from "@/components/about/Integration";
import Services from "@/components/home/Services";
import Solutions from "@/components/about/Solutions";
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
      <Hero />
      <FirstSection />
      <Framework />
      <Solutions />
      <Services />
      <Business />
      <Integration />
    </main>
  );
};

export default About;
