import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const NAME = 'IWARDEAN'
const FINAL_FONT = 'Syne'

// Fontes que ficam alternando em cada letra durante o carregamento
const FONTS = [
  'Syne',
  'Press Start 2P',
  'VT323',
  'Unbounded',
  'Playfair Display',
  'Bebas Neue',
  'Pacifico',
  'Orbitron',
  'Righteous',
  'Monoton',
  'Space Mono',
  'Abril Fatface',
]

const TICK = 150
const SETTLE_START = 1800 // quando a primeira letra assenta na fonte final
const SETTLE_STEP = 130 // atraso entre cada letra assentando
const FADE_AT = SETTLE_START + NAME.length * SETTLE_STEP + 500
const DONE_AT = FADE_AT + 600

const randomFont = () => FONTS[Math.floor(Math.random() * FONTS.length)]

export default function Loader({ onDone }: { onDone: () => void }) {
  const [fonts, setFonts] = useState<string[]>(() => NAME.split('').map(randomFont))
  const [fading, setFading] = useState(false)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    const start = performance.now()
    const interval = window.setInterval(() => {
      const elapsed = performance.now() - start
      setFonts(
        NAME.split('').map((_, i) =>
          elapsed >= SETTLE_START + i * SETTLE_STEP ? FINAL_FONT : randomFont(),
        ),
      )
    }, TICK)
    const fade = window.setTimeout(() => setFading(true), FADE_AT)
    const done = window.setTimeout(() => doneRef.current(), DONE_AT)

    // trava o scroll enquanto o loader está na tela
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(fade)
      window.clearTimeout(done)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  // Portal no <body>: assim o `fixed` sempre cobre a janela inteira e nada
  // (header, rodapé, animações do Layout) consegue ficar por cima.
  return createPortal(
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-label="Loading iwardean"
    >
      <div
        className="flex h-[1.5em] items-center justify-center gap-[0.14em] text-3xl text-white sm:text-6xl"
        aria-hidden
      >
        {NAME.split('').map((letter, i) => (
          <span
            key={i}
            className="inline-block whitespace-nowrap leading-none"
            style={{ fontFamily: `"${fonts[i]}", sans-serif`, fontWeight: 800 }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="mt-10 h-px w-40 overflow-hidden bg-white/10">
        <div className="h-px origin-left bg-accent animate-grow" style={{ animationDuration: `${FADE_AT}ms` }} />
      </div>
    </div>,
    document.body,
  )
}