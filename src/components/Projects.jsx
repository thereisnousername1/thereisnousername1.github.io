// projects section
const projects = [
  {
    title: 'Hell of a Rescue',
    pitch: '2.5D fixed view puzzler in an ancient greek styled building within 12 weeks, where I was incharge of 3D art.',
    tags: ['Multi-ending', '2.5D', 'Puzzle', 'backroom', 'ancient greek style', 'Rock'],
    link: 'https://vera-silva.itch.io/hell-of-a-rescue',
    color: 'var(--accent-amber)',
  },
  
]

export default function Projects() {
    return(
        <section className="projects" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <p>Here are some of the other projects I have built for practice use. Details could be viewed in corresponding GitHub pages.</p>
        </div>
        <div className="shelf">
          {projects.map((p, i) => (
            <article className="cart" key={p.title} style={{ '--cart-color': p.color }}>
              <span className="cart-index">
                {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <h3>{p.title}</h3>
              <p>{p.pitch}</p>
              <div className="cart-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a className="cart-link" href={p.link}>
                Play this game
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    )
}
