import { inngest } from '@/inngest/client'

export async function POST() {
  const response = await inngest.send({
    name: 'demo/generate.text',
    data: {
      prompt: 'Write simple recipe for fried potatoes'
    },
  })
  return Response.json({status: 'started'})
}
