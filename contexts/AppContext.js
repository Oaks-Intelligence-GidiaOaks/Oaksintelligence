"use client";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export function AppProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage?.getItem("oi-theme") ?? "light"
  );

  // useEffect(() => {
  //   const cachedTheme = localStorage.getItem("oi-theme");
  //   setTheme(cachedTheme ?? "light");
  // }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
