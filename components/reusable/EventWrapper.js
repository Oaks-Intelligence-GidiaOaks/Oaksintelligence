"use client";
import React from "react";
import useSubmitPageView from "../../contexts/hooks/useSubmitPageView";

const EventWrapper = ({ page_name }) => {
  useSubmitPageView(page_name);

  return (
    <div>
      <></>
    </div>
  );
};

export default EventWrapper;
