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
import noResults from "@/assets/no-results.png";
import Image from "next/image";
import ComicList from "@/components/admin/ComicList";

const ITEMS_PER_PAGE = 6;
const query = groq`
 {
  "posts": *[_type=="eco-kiddies" && title match $searchQuery] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  // === SLICING THE COLLECTION ===
  [($pageIndex * ${ITEMS_PER_PAGE})...($pageIndex + 1) * ${ITEMS_PER_PAGE}]
  ,
  "total": count(*[_type == "eco-kiddies" && title match $searchQuery]) 
}
`;

// revalidate this page every 30 seconds
export const revalidate = 30;

const About = async ({ searchParams }) => {
  const { isEnabled } = draftMode();

  const pageIndex = searchParams.page ? Number(searchParams.page) - 1 : 0;
  const searchQuery = searchParams.query;

  const currentPage = searchParams.page ? Number(searchParams.page) : 1;
  if (isEnabled) {
    return (
      <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
        <NewsletterBanner />
        <PreviewBlogList query={query} />
      </main>
    );
  }

  const groqSearchQuery = `*${searchQuery}*`;

  const posts = await client.fetch(query, {
    pageIndex,
    searchQuery: groqSearchQuery,
  });
  return (
    <main className="min-h-screen bg-white dark:bg-main overflow-hidden">
      <NewsletterBanner />
      {/* Search bar */}
      <div className="w-full">
        <div className="flex mx-auto justify-end max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
          <SearchBar placeholder="Search Eco-Kiddies" type={"eco-kiddies"} />
        </div>
      </div>

      {/* Results title */}
      <div className="w-full">
        <div className="flex flex-col mx-auto items-start max-w-[1560px] pb-5 px-[5%] sm:px-[10%]">
          <p>
            <span className="text-base poppins-4 text-main-light dark:text-main">
              Search results for{" "}
            </span>
            <span className="text-lg font-bold poppins-7 text-main-light dark:text-main">
              "{searchQuery}"
            </span>
          </p>
          <p>
            <span className="text-sm poppins-4 text-main-light dark:text-main">
              {posts.total} {posts.total > 1 ? "results" : "result"} found
            </span>
          </p>
        </div>
      </div>

      <ComicList comics={posts.posts} type={"surveys"} />
      <div className="w-full mb-10 md:mb-20">
        <div className="flex mx-auto justify-center max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center">
          {posts.total >= 1 ? (
            <div className="flex w-[280px] md:w-[480px] justify-between">
              {/* Prev button */}
              {currentPage > 1 ? (
                <Link
                  className="gold-gradient-bg flex items-center justify-center px-3 py-1 rounded-md text-white w-20 hover:scale-110 hover:shadow-lg hover:hue-rotate-60 transition-all duration-300"
                  href={`/eco-kiddies/search?page=${
                    currentPage - 1
                  }&query=${searchQuery}`}
                >
                  <span className="poppins-4">Previous</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="flex justify-center poppins-4 gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
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
                  href={`/eco-kiddies/search?page=${
                    currentPage + 1
                  }&query=${searchQuery}`}
                >
                  <span className="poppins-4">Next</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="flex justify-center poppins-4 gold-gradient-bg px-3 py-1 rounded-md grayscale opacity-50 w-20"
                >
                  Next
                </button>
              )}
            </div>
          ) : (
            <div className="mx-auto flex flex-col w-[clamp(240px,40%,600px)] items-center justify-center gap-10">
              <Image
                alt="no-results"
                src={noResults}
                className="w-full"
                width={"40%"}
              />
              <p className="text-lg text-main-light dark:text-main poppins-4">
                No results found
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default About;
