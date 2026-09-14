export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <h2>Let's talk about a game.</h2>
            <p>Open to freelance work, collaborations, or a full-time role.</p>
          </div>
          <div className="contact-links">
            {/* edit-me: swap in your real handles */}
            <a className="btn btn-primary" href="mailto:you@example.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="https://github.com/thereisnousername1">
              GitHub
            </a>
            <a className="btn btn-ghost" href="#">
              Itch.io
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
