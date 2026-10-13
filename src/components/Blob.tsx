import { useEffect, useRef } from 'react'

const SIZE = 520
const EASE = 0.07

/** Bola grande e desfocada que segue o mouse com um leve atraso. */
export default function Blob() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const tick = () => {
      current.x += (target.x - current.x) * EASE
      current.y += (target.y - current.y) * EASE
      el.style.transform = `translate3d(${current.x - SIZE / 2}px, ${current.y - SIZE / 2}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 rounded-full will-change-transform"
      style={{
        width: SIZE,
        height: SIZE,
        background: 'radial-gradient(circle, rgba(0,255,102,0.2) 0%, rgba(0,255,102,0.05) 45%, transparent 70%)',
        filter: 'blur(70px)',
      }}
    />
  )
}
