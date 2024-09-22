"use client";
import { useContext, useEffect } from "react";
import SocketService from "../../modules/socket";
import { MonitoringEvent } from "../../modules/socket/constants";
import AppContext from "../AppContext";

const useSubmitPageView = (page_name) => {
  const { ip } = useContext(AppContext);

  useEffect(() => {
    if (SocketService.isConnected() && ip) {
      SocketService.emit(MonitoringEvent.NEW_PAGE_VIEW, {
        project_name: MonitoringEvent.ProjectName,
        page_name,
        user_id: ip,
        time: Date.now(),
      });
    }
  }, [ip, SocketService.isConnected()]);

  return null;
};

export default useSubmitPageView;
