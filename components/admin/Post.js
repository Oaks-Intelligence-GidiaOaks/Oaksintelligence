"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import RichTextComponents from "@/components/admin/RichTextComponents";
import CommentSection from "@/components/CommentSection";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { GrArticle } from "react-icons/gr";
import moment from "moment";
import ClientSideRoute from "./ClientSideRoute";

const pageIndex = 0;
const ITEMS_PER_PAGE = 5;

const query = groq`
{
"posts": *[_type=='post' && slug.current != $slug] {
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

// && slug.current !== $slug

const PostComponent = async ({ post, slug }) => {
  const posts = await client.fetch(query, { pageIndex, ITEMS_PER_PAGE, slug });

  return (
    <div>
      <article className="pb-28 mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center bg-white dark:bg-main transition-all duration-300 ease-in-out">
        {/* <section className="space-y-2 mb-10 text-white rounded-lg overflow-hidden"> */}
        <section className="space-y-2 mb-10 text-white rounded-lg">
          <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10"></div>
            <section className="w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                  <h1 className="poppins-7 text-3xl sm:text-4xl text-main-light dark:gradient-text transition-all duration-300 ease-in-out poppins-7 font-extrabold">
                    {post.title}
                  </h1>
                </div>
              </div>
              <div>
                <h2 className="italic pt-4 poppins-4 text-main-light-2 dark:text-gray-400 text-base transition-all duration-300 ease-in-out">
                  {post.description}
                </h2>
              </div>
              <div className="flex mt-6 gap-x-6 justify-start items-center space-x-2">
                <div className="flex items-center text-sm justify-start space-x-2">
                  <div className="text-sm jost text-gray-500 uppercase">
                    by{" "}
                  </div>
                  <div className="flex flex-col w-fit">
                    <h3 className="text-main-light dark:text-main uppercase transition-all duration-300 ease-in-out text-sm jost font-bold">
                      {post.author.name}
                    </h3>
                  </div>
                </div>
                <p className="jost text-main-light dark:text-main text-sm transition-all duration-300 ease-in-out">
                  Published{" "}
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-2"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </section>
        <div className="relative">
          <Image
            className="w-full mx-auto"
            width="1240"
            height="1080"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
          />
          <p className="absolute text-sm bottom-0 left-0 w-fit dark:text-white dark:bg-dark-blue bg-white px-3 py-1">
            {post.mainImage?.alt ?? ""}
          </p>
        </div>
        <div className="flex w-full gap-x-10 flex-col lg:flex-row">
          <div className="min-w-[240px]">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
          <div className="min-w-[240px] sm:min-w-[320px] w-full lg:w-[320px] shadow-lg dark:shadow-none mt-10 h-fit sticky top-[100px] rounded-md dark:glassmorphism-sec-link">
            <div className="gold-gradient-bg px-2 py-2 poppins-6 rounded-t flex gap-x-2 items-center">
              <GrArticle size={20} /> <span>More Articles</span>
            </div>
            <div className="py-4 lg:flex flex-col gap-y-4 gap-x-2 px-2 grid grid-cols-1 sm:grid-cols-2">
              {posts.posts.map((post) => (
                <ClientSideRoute
                  route={`/blog/post/${post.slug.current}`}
                  key={post._id}
                >
                  <div className="w-full flex gap-x-2 cursor-pointer">
                    <div className="min-w-[33.33%] max-w-[33.33%]">
                      <Image
                        className="object-cover object-left lg:object-center rounded"
                        alt={post.mainImage.alt}
                        src={urlFor(post.mainImage).url()}
                        width="500"
                        height="500"
                        sizes="480px"
                        priority
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="dark:text-main hover:underline text-main-light poppins-4 font-semibold text-sm line-clamp-2">
                        {post.title}
                      </p>
                      <p className="dark:text-gray-400 text-xs jost text-[#202046c9] poppins-4 font-semibold line-clamp-2">
                        {moment(post._createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                </ClientSideRoute>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-[#f7ab0a] my-10" />
        <section>
          <h3 className="text-3xl pb-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
            About the author
          </h3>
          <div className="flex flex-wrap justify-start gap-6">
            <Image
              className="rounded-full w-[50px] h-[50px] bg-main"
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              height={50}
              width={50}
            />
            <div className="flex max-w-[720px] flex-col">
              <h3 className="gold-gradient-text transition-all duration-300 ease-in-out text-xl jost font-bold">
                {post.author.name}
              </h3>
              <p className="text-main-light dark:text-main poppins-4 leading-[34px]">
                <PortableText
                  value={post.author.bio}
                  components={RichTextComponents}
                />
              </p>
            </div>
          </div>
        </section>
        {/* Comments */}
        <section className="mt-10">
          <h3 className="text-3xl pb-10 font-bold poppins-7 text-main-light dark:gradient-text transition-all duration-300 ease-in-out">
            Comments
          </h3>
          <CommentSection comments={post?.comments} postId={post._id} />
        </section>
      </article>
    </div>
  );
};

export default PostComponent;
