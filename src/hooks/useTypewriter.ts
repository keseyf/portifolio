import { useEffect, useState } from 'react'

interface Options {
  speed?: number
  delay?: number
}

export function useTypewriter(text: string, { speed = 70, delay = 0 }: Options = {}) {
  const [out, setOut] = useState('')

  useEffect(() => {
    let i = 0
    let interval: number | undefined
    setOut('')
    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1
        setOut(text.slice(0, i))
        if (i >= text.length) window.clearInterval(interval)
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(timeout)
      if (interval !== undefined) window.clearInterval(interval)
    }
  }, [text, speed, delay])

  return out
}
