"use client";

import { usePreview } from "@/sanity/lib/sanity.preview";
import BlogList from "./BlogList";
import { PreviewSuspense } from "next-sanity/preview";
import { useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 6;

const PreviewBlogList = ({ query, searchParams }) => {
  const pageIndex = useSearchParams.page ? Number(searchParams.page) - 1 : 0;
  // const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  const posts = usePreview(null, query, { pageIndex, ITEMS_PER_PAGE });

  // console.log("Preview posts", posts);
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
      <BlogList posts={posts.posts} />
    </PreviewSuspense>
  );
};

export default PreviewBlogList;
