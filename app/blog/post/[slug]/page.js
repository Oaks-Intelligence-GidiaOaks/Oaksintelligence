import Comment from "@/components/Comment";
import CommentSection from "@/components/CommentSection";
import RichTextComponents from "@/components/admin/RichTextComponents";
import CommentForm from "@/components/blogs/CommentForm";
import { client } from "@/sanity/lib/client";
import urlFor from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

// revalidate this page every 30 seconds
export const revalidate = 30;

// regenerate static params
export const dynamic = "auto";

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]
  {
      slug
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }) => {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]
    {
        ...,
    "comments": *[_type=='comment' && post._ref == ^._id] | order(_createdAt desc),
        author->,
        categories[]->
    }
    `;
  const post = await client.fetch(query, { slug });
  console.log(post);

  return (
    <article className="pb-28 mx-auto justify-between max-w-[1560px] py-5 px-[5%] sm:px-[10%] items-center bg-white dark:bg-main transition-all duration-300 ease-in-out">
      <section className="space-y-2 border border-[#F7AB0A] mb-10 text-white rounded-lg overflow-hidden">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="p-5 bg-[#F7AB0A] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="poppins-7 text-white dark:text-main-light text-3xl transition-all duration-300 ease-in-out poppins-7 font-extrabold">
                  {post.title}
                </h1>
                <p className="poppins-4 text-white dark:text-main-light text-base transition-all duration-300 ease-in-out mt-3">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-start w-64 justify-end space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className="flex flex-col w-fit">
                  <h3 className="text-white dark:text-main-light transition-all duration-300 ease-in-out text-lg jost font-bold">
                    {post.author.name}
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10 poppins-4 text-white dark:text-main-light text-base transition-all duration-300 ease-in-out">
                {post.description}
              </h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />

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
  );
};

export default Post;
