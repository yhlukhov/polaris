import { generateText } from 'ai'
import {inngest} from './client'
import { openai } from '@ai-sdk/openai'

export const generateTextAI = inngest.createFunction({
  id: 'generate-text',
  triggers: {event: 'demo/generate.text'}
}, async ({event, step}) => {
  const response = await step.run("generate-text", async () => {
    const {prompt} = event.data
    const result = await generateText({
      model: openai('gpt-6-luna'),
      prompt
    })
    return result.text
  })
  return {response}
})