import { client } from "@/sanity/lib/client";
import { apiVersion, dataset, projectId, useCdn } from "../../../sanity/env";

export async function POST(request) {
  const { name, text, _id } = await request.json();

  client.config({
    // projectId: 'your-project-id',
    // dataset: 'your-dataset-name',
    // useCdn: true, // set to `false` to bypass the edge cache
    // apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });

  return new Response(JSON.stringify({ message: "OK" }), {
    status: 200,
  });
}
