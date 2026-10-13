import { useEffect, useRef, useState } from 'react'

const CLICKABLE = 'a[href], button, [role="button"], input, textarea, select, summary, label, .clickable'

/**
 * Cursor custom: uma cruz por padrão, vira mãozinha em elementos clicáveis.
 * Só aparece em dispositivos com mouse (hover + pointer fine).
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const [hand, setHand] = useState(false)
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      el.style.opacity = '1'
    }
    const over = (e: MouseEvent) => {
      const target = e.target as Element | null
      setHand(Boolean(target?.closest?.(CLICKABLE)))
    }
    const leave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 mix-blend-difference"
    >
      {/* cruz */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`absolute -left-3 -top-3 transition-all duration-150 ${
          hand ? 'rotate-45 scale-50 opacity-0' : 'opacity-100'
        }`}
      >
        <path d="M12 1v22M1 12h22" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      {/* mãozinha (a ponta do dedo fica na posição do mouse) */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`absolute -left-[9px] -top-[2px] transition-all duration-150 ${
          hand ? 'opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <path d="M22 14a8 8 0 0 1-8 8" />
        <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
        <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
        <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    </div>
  )
}
