import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Games />
      <Contact />
      <footer>© {new Date().getFullYear()} thereisnousername1 — built with React, deployed on GitHub Pages</footer>
    </>
  )
}
