// projects section
const projects = [
  {
    title: 'Da Vinci Gallery',
    pitch: 'A trial 3D viewer developed with OpenGL 4.6 and SDL2, a gallery to preview different 3D models in various shading',
    tags: ['OpenGL', 'C++', 'SDL2', 'phong-model', '3D model viewer'],
    link: 'https://github.com/thereisnousername1/Davinci-Gallery',
    color: '#d00000',
    cover: '/cover/project1cover.jpg'
  },
  {
    title: 'Velocity Vortex',
    pitch: 'An exciting retro racing game developed with SDL2.',
    tags: ['C++', 'SDL2', 'scrolling background', 'smooth music'],
    link: 'https://github.com/thereisnousername1/VelocityVortex',
    color: '#00ff41',
    cover: '/cover/project2cover.jpg'
  },
    {
    title: 'Lab practices for OpenGL - Advanced',
    pitch: 'A series of advanced lab practices to different OpenGL practices.',
    tags: ['C++', 'SDL2', 'scrolling background', 'smooth music'],
    link: 'https://github.com/thereisnousername1/LabsOpenGLAdvanced/tree/main',
    color: '#1060f0',
    cover: '/cover/project3cover.mov'
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

        {/* each card */}
        <div className="shelf">
          {projects.map((p, i) => (
            <article className="cart" key={p.title} style={{ '--cart-color': p.color }}>
              
              <span className="cart-index">
                {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>

              {p.cover && <img src={p.cover} alt={p.title} className="cart-cover" />}
              
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
                Learn more
              </a>

            </article>
          ))}
        </div>
      </div>
    </section>
    )
}
