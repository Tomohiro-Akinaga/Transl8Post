import { client } from '../../../../libs/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { userId, title, text, translatedTitle, translatedText } = await req.json()
  console.log(userId, title, text, translatedTitle, translatedText)

  const response = await client.create({
    endpoint: 'blog',
    content: {
      userId: userId,
      title: title,
      text: text,
      translatedTitle: translatedTitle,
      translatedText: translatedText,
    },
  })

  console.log(response)

  return NextResponse.json(response)
}
