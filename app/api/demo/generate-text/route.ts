import { NextResponse, NextRequest } from 'next/server'
import { inngest } from '@/inngest/client'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const response = await inngest.send({
    name: 'demo/generate.text',
    data: {
      prompt,
    },
  })
  return NextResponse.json({
    message: 'Event sent: demo/generate.text',
    response,
  })
}
