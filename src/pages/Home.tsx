import { Link } from 'react-router-dom'
import { useBlog } from '../BlogContext'

const TITLE = 'IWARDEAN'
const linkCls = 'transition-colors duration-200 hover:text-white'

export default function Home() {
  const { show } = useBlog()

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 text-center">
      <h1
        aria-label="iwardean"
        className="glow whitespace-nowrap font-display text-[8.5vw] font-extrabold uppercase leading-none tracking-[0.02em] text-white"
      >
        {TITLE.split('').map((letter, i) => (
          <span
            key={i}
            aria-hidden
            className="inline-block animate-letter-in"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <div className="mt-14 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '900ms' }}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/70" />
        <span className="h-1 w-1 rounded-full bg-accent shadow-[0_0_10px_#00ff66]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/70" />
      </div>

      <nav
        className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs tracking-widest text-neutral-400 animate-fade-up"
        style={{ animationDelay: '1100ms' }}
      >
        <Link to="/videos" className={linkCls}>
          videos
        </Link>
        <Link to="/projects" className={linkCls}>
          projects
        </Link>
        <button type="button" onClick={show} className={linkCls}>
          blog
        </button>
        <Link to="/about" className={linkCls}>
          about
        </Link>
      </nav>
    </section>
  )
}
