import { API_BASE } from "@/constants/mailchimp";
import mailchimp from "@mailchimp/mailchimp_marketing";
import axios from "axios";
import { NextResponse } from "next/server";

mailchimp.setConfig({
  apiKey: "16a89c084c7c999bd1909a8f811cdde4-us9",
  server: "us9",
});

const apiKeyy = "16a89c084c7c999bd1909a8f811cdde4-us9";

export async function GET(request, { params }) {
  const id = params.id;

  try {
    // const response = await mailchimp.campaigns.get("campaign_id");

    const resp = await axios.get(`${API_BASE}campaigns/${id}/content`, {
      headers: {
        Authorization: `Bearer ${apiKeyy}`,
      },
    });

    console.log(resp);

    return NextResponse.json({ data: resp.data });
  } catch (err) {
    return NextResponse.json({ data: "error occurred", error: err.message });
  }
}
