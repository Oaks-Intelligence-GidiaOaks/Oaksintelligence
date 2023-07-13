"use client";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [showNewsletter, setShowNewsletter] = useState(true);

  // useEffect(() => {
  //   const cachedTheme = localStorage.getItem("oi-theme");
  //   setTheme(cachedTheme ?? "light");
  // }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        showNewsletter,
        setShowNewsletter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
