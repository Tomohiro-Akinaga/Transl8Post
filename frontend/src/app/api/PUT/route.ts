import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../libs/client";

export async function PUT(req: NextRequest) {
  const { id, title } = await req.json();

  const response = await client.update({
    endpoint: "blog",
    contentId: id,
    content: { title: title },
  });

  return NextResponse.json(response);
}
