"use client";
import React from "react";
import useSubmitBlogView from "../../contexts/hooks/useSubmitBlogView";

const BlogEventWrapper = ({ page_name }) => {
  useSubmitBlogView(page_name);

  return (
    <div>
      <></>
    </div>
  );
};

export default BlogEventWrapper;
