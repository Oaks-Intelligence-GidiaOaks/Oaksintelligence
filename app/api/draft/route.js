import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("slug");

  draftMode().enable();
  redirect(`/blog/post/${param}`);
}
