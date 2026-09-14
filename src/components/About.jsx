export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="section-head">
          <h2>About</h2>
          <p>A short version of how you got here and what you're chasing.</p>
        </div>
        <div>
          <p>
            {/* edit-me: replace with your real background */}
            I started making games because I wanted to build the kind of
            experience I loved playing as a kid, then never stopped. Over the
            past few years I've moved between solo prototypes and small team
            projects, focusing on tight game feel and systems that surprise
            players.
          </p>
          <p>
            When I'm not shipping games I'm usually taking them apart to see
            how they work, writing tools to speed up my own pipeline, or
            sketching the next idea.
          </p>
          <div className="stat-row">
            <div className="stat">
              <b>6</b>
              <span>games built</span>
            </div>
            <div className="stat">
              <b>3+</b>
              <span>years making games</span>
            </div>
            <div className="stat">
              <b>2</b>
              <span>engines used</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
