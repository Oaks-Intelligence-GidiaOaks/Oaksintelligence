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
import { BiSearch } from "react-icons/bi";
import SearchBar from "@/components/blogs/SearchBar";

const ITEMS_PER_PAGE = 1;
const query = groq`
 {
  "posts": *[_type=='post'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  // === SLICING THE COLLECTION ===
  [($pageIndex * ${ITEMS_PER_PAGE})...($pageIndex + 1) * ${ITEMS_PER_PAGE}]
  ,
  "total": count(*[_type == "post"]) 
}
`;

// revalidate this page every 30 seconds
export const revalidate = 30;

const About = async ({ searchParams }) => {
  const { isEnabled } = draftMode();

  const pageIndex = searchParams.page ? Number(searchParams.page) - 1 : 0;

  const currentPage = searchParams.page ? Number(searchParams.page) : 1;

  if (isEnabled) {
    return (
      <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
        <NewsletterBanner />
        <PreviewBlogList query={query} />
      </main>
    );
  }

  const posts = await client.fetch(query, { pageIndex });
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
      <NewsletterBanner />
      {/* Search bar */}
      <div className="w-full">
        <div className="flex mx-auto justify-end max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
          <SearchBar />
        </div>
      </div>
      <BlogList posts={posts.posts} />
      <div className="w-full mb-10 md:mb-20">
        <div className="flex mx-auto justify-center max-w-[1440px] py-5 px-[5%] sm:px-[10%] items-center">
          <div className="flex w-[280px] md:w-[480px] justify-between">
            {/* Prev button */}
            {currentPage > 1 ? (
              <Link
                className="gold-gradient-bg flex items-center justify-center px-3 py-1 rounded-md text-white w-20 hover:scale-110 hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
                href={`/blog?page=${currentPage - 1}`}
              >
                <span>Previous</span>
              </Link>
            ) : (
              <button
                disabled
                className="block gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
              >
                Previous
              </button>
            )}

            {/* Current page */}
            <p className="font-bold text-main-light dark:text-main">
              Page {currentPage}
            </p>

            {/* Next button */}
            {Math.ceil(posts.total / ITEMS_PER_PAGE) > currentPage ? (
              <Link
                className="gold-gradient-bg flex items-center justify-center px-3 py-1 rounded-md text-white hover:scale-110 hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
                href={`/blog?page=${currentPage + 1}`}
              >
                <span>Next</span>
              </Link>
            ) : (
              <button
                disabled
                className="block gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
