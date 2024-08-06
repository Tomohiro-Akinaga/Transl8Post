import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: "DeepL-Auth-Key cf4f8256-d9ca-46bf-980a-f0b5cce783fc:fx",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: ["Hello, world!"],
      target_lang: "DE",
    }),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
