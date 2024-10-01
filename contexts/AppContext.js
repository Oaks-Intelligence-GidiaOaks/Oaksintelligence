"use client";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [ip, setIp] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(false);

  // useEffect(() => {
  //   const cachedTheme = localStorage.getItem("oi-theme");
  //   setTheme(cachedTheme ?? "light");
  // }, []);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch(`/api/get-ip`);
        const data = await res.json();
        setIp(data.ipAddress);
        console.log(data.ip, "IP Address");
      } catch (error) {
        throw new Error("Error fetching IP:", error);
      }
    };

    fetchIP();
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        ip,
        setIp,
        showNewsletter,
        setShowNewsletter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
