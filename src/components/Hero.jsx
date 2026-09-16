export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow-line">
            <span className="dot" />
            Looking for a career
          </div>
          <h1>
            Building games people <span className="accent">wants to play.</span>
          </h1>
          <p className="lead">
            I'm Andy Iu, a game developer who has shipped and prototyped some games and project — from 2.5D puzzler to VR simulation game. This is my portfolio website for what I've built.
          </p>
          <div className="hero-cta">
            <a class="btn btn-primary" href="#/#games">
              Browse the games
            </a>
            <a class="btn btn-ghost" href="#/#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="row">
            <span>Role</span>
            <span>Game Developer, junior technical artist(3D, shader)</span>
          </div>
          <div className="row">
            <span>Tools</span>
            <span>Unreal, Unity, 3Ds Max, Github, Blender(learning)</span>
          </div>
          <div className="row">
            <span>School</span>
            <span>BSc degree in University of Plymouth, MProf degree in Abertay University</span>
          </div>
          <div className="row">
            <span>Status</span>
            <span>Looking for work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
