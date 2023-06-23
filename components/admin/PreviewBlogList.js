"use client";

import { usePreview } from "@/sanity/lib/sanity.preview";
import BlogList from "./BlogList";
import { PreviewSuspense } from "next-sanity/preview";

const PreviewBlogList = ({ query }) => {
  const posts = usePreview(null, query);
  return (
    <PreviewSuspense
      fallback={
        <div>
          <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
            Loading Preview Data...
          </p>
        </div>
      }
    >
      <BlogList posts={posts} />
    </PreviewSuspense>
  );
};

export default PreviewBlogList;
