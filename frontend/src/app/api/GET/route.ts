import { NextResponse } from 'next/server'
import { client } from '../../../../libs/client'

export async function GET() {
  const response = await client.getAllContents({ endpoint: 'blog' })

  return NextResponse.json(response)
}
