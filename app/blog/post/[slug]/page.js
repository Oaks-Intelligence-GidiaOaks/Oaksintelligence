import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import React from "react";
import PreviewPost from "../../../../components/admin/PreviewPost";
import DraftSwitch from "../../../../components/DraftSwitch";
import PostComponent from "../../../../components/admin/Post";

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
  // console.log(data);
  const { isEnabled } = draftMode();

  const query = groq`
    *[_type=="post" && slug.current == $slug][0]
    {
        ...,
    "comments": *[_type=='comment' && post._ref == ^._id] | order(_createdAt desc),
        author->,
        categories[]->
    }
    `;

  if (isEnabled) {
    return (
      <main className="min-h-screen bg-white dark:bg-main">
        <PreviewPost query={query} slug={slug} />
        {isEnabled ? <DraftSwitch /> : null}
      </main>
    );
  }

  console.log(slug);

  const post = await client.fetch(query, { slug });

  return (
    <>
      <PostComponent post={post} slug={slug} />
      {isEnabled ? <DraftSwitch /> : null}
    </>
  );
};

export default Post;
