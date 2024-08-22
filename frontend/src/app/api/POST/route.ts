import { client } from '../../../libs/client'
import { managementClient } from '../../../libs/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { userId, title, text, price, fileName, fileURL } = await req.json()

  const fileUploadResponse = await managementClient.uploadMedia({
    data: fileURL,
    name: fileName,
  })

  const fileServiceURL = fileUploadResponse.url

  const response = await client.create({
    endpoint: 'blog',
    content: {
      userId: userId,
      title: title,
      text: text,
      media: fileServiceURL,
      price: price,
      userName: 'test',
    },
  })

  return NextResponse.json(response)
}
