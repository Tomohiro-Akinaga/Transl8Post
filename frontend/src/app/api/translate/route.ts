import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text, target_lang } = await req.json();

  const response = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${process.env.NEXT_PUBLIC_DEEPL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      target_lang,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
