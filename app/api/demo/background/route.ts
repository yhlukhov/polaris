import { inngest } from '@/inngest/client'

export async function POST() {
  const response = await inngest.send({
    name: 'demo/generate.text',
    data: {
      // prompt:
      //   'What is the name of "middleware" file in Next.js? Here are the docs: https://nextjs.org/docs/app/getting-started/proxy',
    },
  })
  return Response.json({ status: 'started' })
}