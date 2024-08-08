import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../libs/client";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    const response = await client.delete({
      endpoint: "blog",
      contentId: id,
    });

    return NextResponse.json({ status: "200", response: response });
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}
