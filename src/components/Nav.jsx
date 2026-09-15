export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-mark" href="#">
          Andy's secret kingdom
        </a>
        <ul className="nav-links">
          <li>
            <a href="#games">Games</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
