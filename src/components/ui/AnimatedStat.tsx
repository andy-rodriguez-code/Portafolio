import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedStatProps {
  value: string
  className?: string
}

export function AnimatedStat({ value, className = 'font-headline text-3xl font-bold text-cyan' }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [count, setCount] = useState(0)

  const numMatch = value.match(/[\d.]+/)
  const isFloat = numMatch ? numMatch[0].includes('.') : false
  const targetNum = numMatch ? parseFloat(numMatch[0]) : 0
  const prefix = numMatch ? value.substring(0, numMatch.index) : ''
  const suffix = numMatch ? value.substring((numMatch.index ?? 0) + numMatch[0].length) : value

  useEffect(() => {
    if (!isInView || targetNum === 0) return
    const duration = 2000
    const startTime = performance.now()

    const update = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = progress * (2 - progress)
      setCount(easeOut * targetNum)
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [isInView, targetNum])

  const displayCount = targetNum > 0 ? (isFloat ? count.toFixed(1) : Math.floor(count)) : 0

  return (
    <div ref={ref} className={className}>
      {targetNum > 0 ? <>{prefix}{displayCount}{suffix}</> : value}
    </div>
  )
}
