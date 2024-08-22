import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { managementClient } from '../../../libs/client'
import { client } from '../../../libs/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const { url } = await req.json()

  const response = await managementClient.uploadMedia({
    data: url,
    name: 'image.png',
  })

  const fileURL = response.url

  const fileResponse = await client.create({
    endpoint: 'media',
    content: {
      media: fileURL,
    },
  })

  return NextResponse.json(fileResponse)
}
