"use client";
import { useContext, useEffect } from "react";
import Header from "../../components/home/Header";
import "./globals.css";
import AppContext, { AppProvider } from "@/contexts/AppContext";
import Footer from "@/components/home/Footer";
import NewsLetterModal from "@/components/NewsLetterModal";
import { AnimatePresence } from "framer-motion";

const Wrapper = ({ children }) => {
  const { theme, setTheme, showNewsletter, setShowNewsletter } =
    useContext(AppContext);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    setTheme((prev) => prev);
  }, [theme]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <NewsLetterModal />
      {children}
      <Footer />
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/oaks-icon.png" />
        <title>Oaks Intelligence</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Innovative Tech Company." />
      </head>
      <body>
        <AppProvider>
          <Wrapper>{children}</Wrapper>
        </AppProvider>
      </body>
    </html>
  );
}
