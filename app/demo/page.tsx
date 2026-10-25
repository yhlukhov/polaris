'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { logger } from '@sentry/nextjs'
import { useAuth } from '@clerk/nextjs'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('')
  const { userId } = useAuth()

  const handleBlocking = async () => {
    setLoading(true)
    const response = await fetch('/api/demo/blocking', {
      method: 'POST',
    })
    setText(await response.text())
    setLoading(false)
  }

  const handleBackground = async () => {
    setLoading(true)
    const response = await fetch('/api/demo/background', {
      method: 'POST',
    })
    setText(await response.text())
    setLoading(false)
  }

  const clientError = () => {
    logger.info('User click on button Client Error', {userId})
    throw new Error('Client side error occured')
  }

  const apiError = async () => {
    await fetch('/api/demo/error', { method: 'POST' })
  }

  const inngestError = async () => {
    await fetch('/api/demo/inngest-error', { method: 'POST' })
  }

  return (
    <div className='p-8 space-x-4'>
      <Button disabled={loading} onClick={handleBlocking}>
        {loading ? 'Loading...' : 'Blocking'}
      </Button>
      <Button disabled={loading} onClick={handleBackground}>
        {loading ? 'Loading...' : 'Background'}
      </Button>
      <Button variant={'destructive'} onClick={clientError}>
        Client error
      </Button>
      <Button variant={'destructive'} onClick={apiError}>
        Api error
      </Button>
      <Button variant={'destructive'} onClick={inngestError}>
        Inngest error
      </Button>
      <div>{text}</div>
    </div>
  )
}
