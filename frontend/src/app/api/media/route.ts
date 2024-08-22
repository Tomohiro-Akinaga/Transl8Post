import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { managementClient } from '../../../libs/client'
import { client } from '../../../libs/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const { fileName, fileURL } = await req.json()

  const response = await managementClient.uploadMedia({
    data: fileURL,
    name: fileName,
  })

  const fileServiceURL = response.url

  const fileResponse = await client.create({
    endpoint: 'media',
    content: {
      media: fileServiceURL,
    },
  })

  return NextResponse.json(fileResponse)
}
