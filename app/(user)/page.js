"use client";
import Hero from "@/components/home/Hero";
import FirstSection from "@/components/home/FirstSection";
import Solutions from "@/components/home/Solutions";
import DashboardMockup from "@/components/home/DashboardMockup";
import Mission from "@/components/home/Mission";
import Services from "@/components/home/Services";
import Excellence from "@/components/home/Excellence";
import Feedback from "@/components/home/Feedback";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
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
