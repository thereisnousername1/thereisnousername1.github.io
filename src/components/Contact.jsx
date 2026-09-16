export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <h2>Contact me</h2>
            <p>Open to freelance work, collaborations, or a full-time role.</p>
          </div>
          <div className="contact-links">
            {/* edit-me: swap in your real handles */}
            <a className="btn btn-primary" href="mailto:okt07011@icloud.com">
              Email me
            </a>
            <a className="btn btn-ghost" href="https://github.com/thereisnousername1">
              GitHub
            </a>
            <a className="btn btn-ghost" href="https://thereisnousername1.itch.io">
              Itch.io
            </a>
            <a className="btn btn-primary"
                href="https://discordapp.com/users/459203320599543808">Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}
