import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { managementClient } from '../../../libs/client'

export async function POST(req: NextRequest, res: NextResponse) {
  const { url } = await req.json()

  const response = await managementClient.uploadMedia({
    data: url,
    name: 'image.png',
  })

  return NextResponse.json(response)
}
