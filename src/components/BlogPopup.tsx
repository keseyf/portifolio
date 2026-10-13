import { useEffect } from 'react'
import { useBlog } from '../BlogContext'

export default function BlogPopup() {
  const { open, hide } = useBlog()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') hide()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, hide])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm animate-fade-in"
      onClick={hide}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Blog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md border border-white/15 bg-neutral-950/90 p-10 text-center shadow-[0_0_80px_rgba(0,255,102,0.08)] animate-pop-in"
      >
        <button
          type="button"
          onClick={hide}
          aria-label="Close"
          className="absolute right-4 top-4 text-neutral-500 transition-colors hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        <p className="text-[10px] tracking-[0.35em] text-accent">/ BLOG</p>
        <h2 className="mt-6 whitespace-nowrap font-display text-lg font-extrabold uppercase text-white animate-glitch sm:text-2xl">
  In development
</h2>
        <p className="mt-4 text-xs text-neutral-500">
          Something is being built here<span className="animate-blink">_</span>
        </p>

        <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
          <div className="h-px w-1/4 bg-accent shadow-[0_0_12px_#00ff66] animate-sweep" />
        </div>

        <p className="mt-6 text-[10px] tracking-[0.2em] text-neutral-600">press esc to close</p>
      </div>
    </div>
  )
}
