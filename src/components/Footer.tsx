import { useTypewriter } from '../hooks/useTypewriter'

const COORDS = '-19.9208,-43.9378'
const LINE = `${COORDS} // iwardean`

export default function Footer() {
  const text = useTypewriter(LINE, { speed: 75, delay: 700 })

  return (
    <footer className="relative z-10 py-8 text-center">
      <p className="font-mono text-[11px] tracking-[0.2em] text-neutral-600">
        {text}
        <span className="ml-0.5 inline-block h-[12px] w-[6px] translate-y-[2px] bg-neutral-500 animate-blink" />
      </p>
    </footer>
  )
}
