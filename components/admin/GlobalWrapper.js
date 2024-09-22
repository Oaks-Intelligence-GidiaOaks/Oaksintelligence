"use client";
import React, { useContext, useEffect } from "react";
import AppContext from "../../contexts/AppContext";
import SocketService from "../../modules/socket";

const GlobalWrapper = ({ children }) => {
  const { ip } = useContext(AppContext);

  // connect to socket
  useEffect(() => {
    if (!ip) return;

    if (!SocketService.isConnected()) {
      SocketService.connect(ip);
    }

    return () => {
      SocketService.disconnect();
    };
  }, [ip, SocketService.isConnected()]);

  return <>{children}</>;
};

export default GlobalWrapper;
