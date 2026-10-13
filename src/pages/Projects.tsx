import { projects, type Project, type ProjectStatus } from '../data/projects'

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 9l6-6M4 3h5v5" />
    </svg>
  )
}

const statusCls: Record<ProjectStatus, string> = {
  live: 'border-accent/40 text-accent',
  wip: 'border-yellow-400/30 text-yellow-300/80',
  'coming soon': 'border-white/15 text-neutral-500',
}

function Row({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <span className="mt-2 text-[10px] tabular-nums text-accent">{String(index + 1).padStart(2, '0')}</span>
      <div className="min-w-0 flex-1">
        <h2 className="font-display text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
          {project.title}
        </h2>
        <p className="mt-2 max-w-lg text-xs leading-relaxed text-neutral-500">{project.description}</p>
        {project.tech.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t} className="border border-white/10 px-1.5 py-0.5 text-[10px] tracking-wide text-neutral-400">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span
        className={`mt-1 whitespace-nowrap border px-2 py-1 text-[10px] tracking-wider ${statusCls[project.status]}`}
      >
        {project.status}
      </span>
      {project.url && (
        <span className="mt-2 text-neutral-500 transition-colors group-hover:text-white">
          <ArrowIcon />
        </span>
      )}
    </>
  )

  const cls = 'group flex items-start gap-4 border-b border-white/[0.06] px-2 py-7 transition-colors sm:gap-6'

  return (
    <li>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer noopener" className={`${cls} hover:bg-white/[0.02]`}>
          {content}
        </a>
      ) : (
        <div className={cls}>{content}</div>
      )}
    </li>
  )
}

export default function Projects() {
  return (
    <section className="mx-auto w-full max-w-[720px] px-6 pb-24 pt-32 sm:pt-40">
      <h1 className="font-display text-5xl font-extrabold uppercase tracking-wide text-white sm:text-7xl">
        Projects
      </h1>
      <p className="mt-6 text-sm text-neutral-500">Standalone builds, tools, and experiments.</p>
      <div className="mt-8 h-px w-14 bg-gradient-to-r from-white/60 to-transparent" />

      <ul className="mt-12 border-t border-white/[0.06]">
        {projects.map((p, i) => (
          <Row key={p.title} project={p} index={i} />
        ))}
      </ul>

      <div className="mt-16 flex flex-col items-center gap-3">
        <span className="h-px w-8 bg-accent/60" />
        <p className="text-[10px] tracking-[0.2em] text-neutral-700">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'} indexed
        </p>
      </div>
    </section>
  )
}