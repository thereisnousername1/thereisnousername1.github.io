import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function Home() {
  // react-router嘅HashRouter唔會自動幫你跳去頁面入面嘅#section，
  // 呢個effect負責：每次網址嘅hash部分（例如 "#games"）一變，
  // 就自己揾返嗰個id嘅element，再scrollIntoView。
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return (
    <>
      <Nav />
      <Hero />
      <Games />
      <Projects />
      <About />
      <Contact />
      <footer>© {new Date().getFullYear()} thereisnousername1 — built with React, deployed on GitHub Pages</footer>
    </>
  )
}
