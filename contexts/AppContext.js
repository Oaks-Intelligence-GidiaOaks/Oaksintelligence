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
    const cachedIP = localStorage.getItem("ip");

    if (cachedIP) {
      console.log("ip", cachedIP);
      setIp(cachedIP);
    } else {
      fetch(`/api/get-ip`)
        .then((response) => response.json())
        .then((data) => {
          setIp(data.ipAddress);
          localStorage.setItem("ip", data.ipAddress);
        })
        .catch((error) => console.error("Error fetching IP:", error));
    }
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
