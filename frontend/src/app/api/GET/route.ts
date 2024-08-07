import { NextResponse } from "next/server";
import { client } from "../../../../libs/client";

export async function GET() {
  const response = await client.getAllContents({
    customRequestInit: { cache: "no-store" },
    endpoint: "blog",
  });

  return NextResponse.json(response);
}
