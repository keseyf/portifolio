import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      {!isHome && <Header />}
      <main key={pathname} className="flex flex-1 flex-col animate-fade-up">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
