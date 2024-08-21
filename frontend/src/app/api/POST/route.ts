import { client } from '../../../libs/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { userId, title, text, image, price } = await req.json()
  console.log(image)
  const response = await client.create({
    endpoint: 'blog',
    content: {
      userId: userId,
      title: title,
      text: text,
      media: image,
      price: price,
      userName: 'test',
    },
  })

  return NextResponse.json(response)
}
