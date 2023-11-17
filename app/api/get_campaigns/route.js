import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: "16a89c084c7c999bd1909a8f811cdde4-us9",
  server: "us9",
});

export async function GET(request) {
  // console.log(request);
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const count = searchParams.get("count");

  console.log(offset);

  try {
    let response = await mailchimp.campaigns.list({
      count: count,
      offset: offset,
      status: "sent",
      sort_field: "send_time",
      sort_dir: "DESC",
    });

    return NextResponse.json({ data: response.campaigns });
  } catch (err) {
    return NextResponse.json({ data: "error occurred", error: err.message });
  }
}
