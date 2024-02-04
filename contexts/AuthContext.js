"use client";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const isTokenExpired = checkTokenExpiry(userData.token);
      if (!isTokenExpired) {
        setUser(userData);
      } else {
        logout();
      }
    }
  }, []);

  const checkTokenExpiry = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  };

  const login = (userData) => {
    localStorage.setItem("token", JSON.stringify(userData.data.accessToken));

    console.log(userData);

    setUser(userData.data.user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
