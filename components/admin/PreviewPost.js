"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import RichTextComponents from "@/components/admin/RichTextComponents";
import CommentSection from "@/components/CommentSection";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "../../sanity/lib/sanity.preview";
import Post from "./Post";

const PreviewPost = async ({ query, slug }) => {
  const post = usePreview(null, query, { slug });

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
      <Post post={post} slug={slug} />
    </PreviewSuspense>
  );
};

export default PreviewPost;
