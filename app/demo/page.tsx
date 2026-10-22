'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('')

  const handleBlocking = async () => {
    setLoading(true)
    const response = await fetch('/api/demo/blocking', {
      method: 'POST'
    })
    setText(await response.text())
    setLoading(false)
  }

  const handleBackground = async () => {
    setLoading(true)
    const response = await fetch('/api/demo/background', {
      method: 'POST'
    })
    setText(await response.text())
    setLoading(false)
  }

  return (
    <div className='p-8 space-x-4'>
      <Button disabled={loading} onClick={handleBlocking}>
        {loading ? 'Loading...' : 'Blocking'}
      </Button>
      <Button disabled={loading} onClick={handleBackground}>
        {loading ? 'Loading...' : 'Background'}
      </Button>
      <div>{text}</div>
    </div>
  )
}
