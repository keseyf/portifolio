import { Route, Routes } from 'react-router-dom'
import { BlogProvider } from './BlogContext'
import Blob from './components/Blob'
import BlogPopup from './components/BlogPopup'
import Cursor from './components/Cursor'
import Layout from './components/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Videos from './pages/Videos'

export default function App() {
  return (
    <BlogProvider>
      <Blob />
      <Cursor />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="videos" element={<Videos />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <BlogPopup />
    </BlogProvider>
  )
}