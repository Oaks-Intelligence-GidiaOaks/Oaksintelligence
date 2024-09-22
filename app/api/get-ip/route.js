import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    let response = await fetch(`https://api.ipify.org/?format=json`);
    const data = await response.json();

    return NextResponse.json({
      ipAddress: data.ip,
    });
  } catch (err) {
    return NextResponse.json({ data: "error occurred", error: err.message });
  }
}
