import { serve } from 'inngest/next'
import { inngest } from '@/inngest/client'
import { generateTextAI, demoError } from '@/inngest/functions'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateTextAI, demoError],
})
