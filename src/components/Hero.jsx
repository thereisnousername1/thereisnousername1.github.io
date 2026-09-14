export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow-line">
            <span className="dot" />
            Available for new projects
          </div>
          <h1>
            Building worlds people <span className="accent">want to get lost in.</span>
          </h1>
          <p className="lead">
            I'm thereisnousername1, a game developer who has shipped and prototyped
            six games — from tight arcade loops to systems-heavy experiments. This
            is a shelf of what I've built.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#games">
              Browse the games
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="row">
            <span>Role</span>
            <span>Game Developer</span>
          </div>
          <div className="row">
            <span>Games shipped</span>
            <span>6</span>
          </div>
          <div className="row">
            <span>Engine</span>
            <span>edit-me</span>
          </div>
          <div className="row">
            <span>Based in</span>
            <span>edit-me</span>
          </div>
          <div className="row">
            <span>Status</span>
            <span>Open to work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
