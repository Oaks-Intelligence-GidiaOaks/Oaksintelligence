import React from "react";
import NewsletterBanner from "@/components/blogs/NewsletterBanner";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "@/components/admin/PreviewBlogList";
import BlogList from "@/components/admin/BlogList";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/components/blogs/SearchBar";
import ComingSoon from "@/components/ComingSoon";
// import PostHogClient from "../posthog";
// import posthog from "posthog-js";

const ITEMS_PER_PAGE = 6;
const query = groq`
{
"posts": *[_type=='post'] {
  ...,
author->,
categories[]->
} | order(_createdAt desc) 
// === SLICING THE COLLECTION ===
[($pageIndex * $ITEMS_PER_PAGE)...($pageIndex + 1) * $ITEMS_PER_PAGE]
,
"total": count(*[_type == "post"]) 
}
`;

// revalidate this page every 30 seconds
export const revalidate = 30;

const Blog = async ({ searchParams }) => {
  const { isEnabled } = draftMode();

  const pageIndex = searchParams.page ? Number(searchParams.page) - 1 : 0;

  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  if (isEnabled) {
    return (
      <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
        <NewsletterBanner />
        <PreviewBlogList query={query} searchParams={searchParams} />
      </main>
    );
  }

  const posts = await client.fetch(query, { pageIndex, ITEMS_PER_PAGE });

  return (
    <main className="min-h-screen bg-white dark:bg-main transition-all duration-300 ease-in-out overflow-hidden">
      {/* <NewsletterBanner /> */}
      {posts.posts.length ? (
        <>
          {/* Search bar */}
          <div className="w-full">
            <div className="flex mx-auto justify-end max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
              <SearchBar />
            </div>
          </div>
          <BlogList posts={posts.posts} />
          <div className="w-full mb-10 md:mb-20">
            <div className="flex mx-auto justify-center max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
              <div className="flex w-[280px] md:w-[480px] justify-between">
                {/* Prev button */}
                {currentPage > 1 ? (
                  <Link
                    className="poppins-4 gold-gradient-bg flex items-center justify-center px-3 py-1 rounded-md text-white w-20 hover:scale-110 hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
                    href={`/blog?page=${currentPage - 1}`}
                  >
                    <span>Previous</span>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex justify-center items-center poppins-4 gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
                  >
                    Previous
                  </button>
                )}

                {/* Current page */}
                <p className="font-bold poppins-6 text-main-light dark:text-main">
                  Page {currentPage}
                </p>

                {/* Next button */}
                {Math.ceil(posts.total / ITEMS_PER_PAGE) > currentPage ? (
                  <Link
                    className="gold-gradient-bg flex items-center justify-center px-3 py-1 rounded-md text-white hover:scale-110 hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
                    href={`/blog?page=${currentPage + 1}`}
                  >
                    <span className="poppins-4">Next</span>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="flex justify-center items-center poppins-4 gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <ComingSoon />
      )}
    </main>
  );
};

export default Blog;
