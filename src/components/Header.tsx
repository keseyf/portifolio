import { Link, NavLink } from 'react-router-dom'
import { useBlog } from '../BlogContext'

const linkBase = 'transition-colors duration-200'

export default function Header() {
  const { show } = useBlog()
  const cls = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? 'text-white' : 'text-neutral-600 hover:text-neutral-300'}`

  return (
    <header className="absolute left-0 top-0 z-20 flex flex-wrap items-center gap-x-4 gap-y-2 px-5 py-6 text-[11px] tracking-widest sm:px-10 sm:py-7">
      <Link to="/" className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.18em] text-white">
        iwardean
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#00ff66]" />
      </Link>
      <NavLink to="/videos" className={cls}>
        <span className="mr-1 text-neutral-700">/</span>videos
      </NavLink>
      <NavLink to="/projects" className={cls}>
        <span className="mr-1 text-neutral-700">/</span>projects
      </NavLink>
      <button type="button" onClick={show} className={`${linkBase} text-neutral-600 hover:text-neutral-300`}>
        <span className="mr-1 text-neutral-700">/</span>blog
      </button>
      <NavLink to="/about" className={cls}>
        <span className="mr-1 text-neutral-700">/</span>about
      </NavLink>
    </header>
  )
}
