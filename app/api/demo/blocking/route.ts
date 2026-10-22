// localhost:3000/api/demo/blocking
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST() {
  const response = await generateText({
    model: openai('gpt-6-luna'), // gpt-6.1-sol
    prompt: 'Write a simple recipe for fried potatoe',
  })
  return Response.json(response.output)
}