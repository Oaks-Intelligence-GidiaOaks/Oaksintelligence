"use client";
import Hero from "@/components/home/Hero";
import FirstSection from "@/components/home/FirstSection";
import Solutions from "@/components/home/Solutions";
import DashboardMockup from "@/components/home/DashboardMockup";
import Mission from "@/components/home/Mission";
import Services from "@/components/home/Services";
import Excellence from "@/components/home/Excellence";
import Feedback from "@/components/home/Feedback";
import { useContext, useEffect, useLayoutEffect } from "react";
import AppContext from "@/contexts/AppContext";
import SocketService from "../../modules/socket";
import { MonitoringEvent, PageEvent } from "../../modules/socket/constants";
// import posthog from "posthog-js";

export default function Home() {
  const { setTheme, ip } = useContext(AppContext);

  useLayoutEffect(() => {
    const cachedTheme = localStorage.getItem("oi-theme")
      ? localStorage.getItem("oi-theme")
      : "light";
    setTheme(cachedTheme);
  }, [setTheme]);

  useEffect(() => {
    if (SocketService.isConnected() && ip) {
      SocketService.emit(MonitoringEvent.NEW_PAGE_VIEW, {
        project_name: MonitoringEvent.ProjectName,
        page_name: PageEvent.HOME,
        user_id: ip,
        time: Date.now(),
      });
    }
  }, [ip, SocketService.isConnected()]);

  // posthog.capture("home page visited", { property: "true" });

  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden transition-[background] duration-500 ease-in-out">
      <Hero />
      <FirstSection />
      <Solutions />
      <DashboardMockup />
      <Mission />
      <Excellence />
      <Services />
      <Feedback />
    </main>
  );
}
