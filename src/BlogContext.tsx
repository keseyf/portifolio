import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface BlogState {
  open: boolean
  show: () => void
  hide: () => void
}

const BlogContext = createContext<BlogState>({ open: false, show: () => {}, hide: () => {} })

export function BlogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const show = useCallback(() => setOpen(true), [])
  const hide = useCallback(() => setOpen(false), [])
  const value = useMemo(() => ({ open, show, hide }), [open, show, hide])
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}

export const useBlog = () => useContext(BlogContext)
