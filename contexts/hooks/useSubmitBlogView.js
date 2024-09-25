"use client";
import { useContext, useEffect } from "react";
import SocketService from "../../modules/socket";
import { MonitoringEvent } from "../../modules/socket/constants";
import AppContext from "../AppContext";

const useSubmitBlogView = (page_name) => {
  const { ip } = useContext(AppContext);

  useEffect(() => {
    if (SocketService.isConnected() && ip) {
      SocketService.emit(MonitoringEvent.NEW_BLOG_VIEW, {
        project_name: MonitoringEvent.ProjectName,
        page_name,
        user_id: ip,
        time: Date.now(),
      });
    }
  }, [ip, SocketService.isConnected()]);

  return null;
};

export default useSubmitBlogView;
