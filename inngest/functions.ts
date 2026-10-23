import { generateText } from 'ai'
import { inngest } from './client'
import { openai } from '@ai-sdk/openai'
import { firecrawl } from '@/lib/firecrawl'

const URL_REGEX = /https?:\/\/[^\s]+/g

export const generateTextAI = inngest.createFunction(
  {
    id: 'generate-text',
    triggers: { event: 'demo/generate.text' },
  },
  async ({ event, step }) => {
    const { prompt } = event.data as { prompt: string }

    const urls = await step.run('extract-urls', async () => {
      return prompt.match(URL_REGEX) ?? ([] as string[])
    })

    const scrapedContent = await step.run('scrape-urls', async () => {
      const results = await Promise.all(
        urls.map(async (url) => {
          const result = await firecrawl.scrape(url, {formats: ['markdown']})
          return result.markdown ?? null
        })
      )
      return results.filter(Boolean).join("\n\n")
    })

    const finalPrompt = scrapedContent
      ? `Content:\n${scrapedContent}\n\nQuestion: ${prompt}`
      : prompt

    const response = await step.run('generate-text', async () => {
      const result = await generateText({
        model: openai('gpt-5.4-nano'),
        prompt: finalPrompt,
      })
      return result.text
    })
    return { response }
  },
)
