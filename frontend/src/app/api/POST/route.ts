import { client } from "../../../../libs/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, text, translatedTitle, translatedText } = await req.json();
  const response = await client.create({
    endpoint: "blog",
    content: JSON.parse(
      `{"title":"${title}", "text":"${text}", "translatedTitle":"${translatedTitle}", "translatedText":"${translatedText}"}`
    ),
  });

  return NextResponse.json(response);
}
