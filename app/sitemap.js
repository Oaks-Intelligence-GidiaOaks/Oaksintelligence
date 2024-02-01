import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap() {
  const WEBSITE_HOST_URL =
    process.env.SITE_URL || "https://oaksintelligence.co";
  const postQuery = groq`
 {
  "posts": *[_type=='post'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc)
  ,
  "total": count(*[_type == "post"])
}
`;
  const ecoKiddiesQuery = groq`
 {
  "posts": *[_type=='eco-kiddies'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  ,
  "total": count(*[_type == "eco-kiddies"]) 
}
`;
  const ecoTalesQuery = groq`
 {
  "posts": *[_type=='eco-tales'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  ,
  "total": count(*[_type == "eco-tales"]) 
}
`;
  const mirQuery = groq`
 {
  "posts": *[_type=='market-intelligence-report'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  ,
  "total": count(*[_type == "market-intelligence-report"]) 
}
`;
  const surveyQuery = groq`
 {
  "posts": *[_type=='survey'] {
    ...,
  author->,
  categories[]->
  } | order(_createdAt desc) 
  ,
  "total": count(*[_type == "survey"]) 
}
`;

  // async function fetchNewsLetter() {
  //   try {
  //     const response = await fetch(
  //       `/api/get_campaigns`
  //     );

  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     return [];
  //   }
  // }

  const mainRoutes = [
    {
      url: `${WEBSITE_HOST_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${WEBSITE_HOST_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${WEBSITE_HOST_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/eco-kiddies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/eco-tales`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/market-intelligence-reports`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/surveys`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${WEBSITE_HOST_URL}/newsletters`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];

  let blogPostsData = await client.fetch(postQuery);
  let ecokiddiesData = await client.fetch(ecoKiddiesQuery);
  let ecoTalesData = await client.fetch(ecoTalesQuery);
  let mirData = await client.fetch(mirQuery);
  let surveyData = await client.fetch(surveyQuery);
  // let newsletterData = await fetchNewsLetter();

  // /blog/post/${post.slug.current}
  let blogPosts = blogPostsData.posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/blog/post/${post.slug.current}`,
    lastModified: post.updatedAt,
    changeFrequency: "daily",
  }));

  let ecoKiddiesPosts = ecokiddiesData.posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/eco-kiddies/${post.slug.current}`,
    lastModified: post.updatedAt,
    changeFrequency: "daily",
  }));

  let ecoTalesPosts = ecoTalesData.posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/eco-tales/${post.slug.current}`,
    lastModified: post.updatedAt,
    changeFrequency: "daily",
  }));

  let mirPosts = mirData.posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/market-intelligence-reports/${post.slug.current}`,
    lastModified: post.updatedAt,
    changeFrequency: "daily",
  }));

  let surveyPosts = surveyData.posts.map((post) => ({
    url: `${WEBSITE_HOST_URL}/eco-kiddies/${post.slug.current}`,
    lastModified: post.updatedAt,
    changeFrequency: "daily",
  }));

  // console.log(blogPosts);

  return [
    ...mainRoutes,
    ...blogPosts,
    ...ecoKiddiesPosts,
    ...ecoTalesPosts,
    ...mirPosts,
    ...surveyPosts,
  ];
}
