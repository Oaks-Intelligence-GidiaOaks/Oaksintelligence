"use client";
import { useContext, useEffect } from "react";
import Header from "../../components/home/Header";
import "./globals.css";
import AppContext, { AppProvider } from "@/contexts/AppContext";
import Footer from "@/components/home/Footer";
import NewsLetterModal from "@/components/NewsLetterModal";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
        <title>
          Oaks Intelligence | Cutting-Edge Solutions for Digital Transformation
        </title>
        <link rel="icon" type="image/png" href="/oaks-icon.png" />
        <link rel="canonical" href="https://www.oaksintelligence.co" />
        <meta
          property="og:title"
          content="Oaks Intelligence | Cutting-Edge Solutions for Digital Transformation"
        />
        <meta
          property="og:description"
          content="Revolutionizing the tech landscape with cutting-edge solutions. Our startup combines innovation and expertise to deliver transformative products that empower businesses and individuals. Discover how our advanced technologies are reshaping industries and driving digital transformation. Join us on this journey towards a smarter, more connected future."
        />
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://www.oaksintelligence.co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Oaksintel" />
        <meta
          name="twitter:title"
          content="Oaks Intelligence | Cutting-Edge Solutions for Digital Transformation"
        />
        <meta
          name="twitter:description"
          content="Revolutionizing the tech landscape with cutting-edge solutions. Our startup combines innovation and expertise to deliver transformative products that empower businesses and individuals. Discover how our advanced technologies are reshaping industries and driving digital transformation. Join us on this journey towards a smarter, more connected future."
        />
        <meta
          name="twitter:image"
          content="https://www.oaksintelligence.co/_next/static/media/oaks-logo-dark.0ed9c30c.svg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.oaksintelligence.co/_next/static/media/oaks-logo-dark.0ed9c30c.svg"
        ></meta>
        <meta
          name="description"
          content="Revolutionizing the tech landscape with cutting-edge solutions. Our startup combines innovation and expertise to deliver transformative products that empower businesses and individuals. Discover how our advanced technologies are reshaping industries and driving digital transformation. Join us on this journey towards a smarter, more connected future."
        />
      </head>
      <body>
        <AppProvider>
          <Wrapper>{children}</Wrapper>
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
