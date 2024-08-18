import { NextResponse } from 'next/server'
import { client } from '../../../../libs/client'

export async function GET() {
  const response = await client.getAllContents({ endpoint: 'contents' })

  return NextResponse.json(response)
}
