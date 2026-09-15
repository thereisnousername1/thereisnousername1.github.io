// games section

const games = [
  {
    title: 'Hell of a Rescue',
    pitch: '2.5D fixed view puzzler in an ancient greek styled building within 12 weeks, where I was incharge of 3D art.',
    tags: ['Multi-ending', '2.5D', 'Puzzle', 'backroom', 'ancient greek style', 'Rock'],
    link: 'https://vera-silva.itch.io/hell-of-a-rescue',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/4698547'
  },
  {
    title: 'Concrete Architects',
    pitch: '3D Building simulation game aimed to rebuild Cumbernauld Town Centre with a vintage mono-tone shader within 12 weeks, collaboration with V&A Dundee where I was incharge of art(shader and 3D) and programming(building logic)',
    tags: ['Multi-ending', '3D', 'simulation', 'architecture', 'Cumbernauld'],
    link: 'https://renaissancestudios.itch.io/concrete-architects',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/4476181'
  },
  {
    title: "Baby's First Tower Defence",
    pitch: "2 week prototype made in Unreal Engine as part of Abertay University's MProf. A 3D third person shooter where I was incharge of the 3D art(free assets used)",
    tags: ['Multiplayer', '3D', '3rd person shooter', 'winter'],
    link: 'https://colranestudios.itch.io/babys-first-tower-defense',
    color: 'var(--accent-coral)',
    embed_link: 'https://itch.io/embed/4109204'
  },
  {
    title: 'GoodBabies',
    pitch: "10 week prototype made in Unreal Engine as part of Abertay University's MProf. A simulation game where I was incharge of the 3D art.",
    tags: ['Multi-ending', 'crime', 'card game', 'intense', 'fun'],
    link: 'https://colranestudios.itch.io/goodbabies',
    color: 'var(--accent-lilac)',
    embed_link: 'https://itch.io/embed/4108940'
  },
  {
    title: 'From Healthy to Zombie',
    pitch: "My bachelor's degree final year project, a meta VR simulation game",
    tags: ['Zombie simulation', 'VR', 'shopping'],
    link: 'https://thereisnousername1.itch.io/from-healthy-to-zombie',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/3513355'
  },
  {
    title: 'Timelock',
    pitch: 'My first unreal shipping game for practice.',
    tags: ['3D puzzle game', 'time limitation'],
    link: 'https://mockname.itch.io/timelock',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/3060964'
  },
]

export default function Games() {
  return (
    <section className="games" id="games">
      <div className="wrap">
        <div className="section-head">
          <h2>Games</h2>
          <p>Here are some of the games I have built individually or as part of a team. Details could be viewed in corresponding itch.io pages.</p>
        </div>
        <div className="shelf">
          {games.map((g, i) => (
          
            <article className="cart" key={g.title} style={{ '--cart-color': g.color }}>

              <span className="cart-index">
                {String(i + 1).padStart(2, '0')} / {String(games.length).padStart(2, '0')}
              </span>
              
              <h3>{g.title}</h3>
              
              <p>{g.pitch}</p>
              
              <iframe src={g.embed_link} width="552" height="167" frameborder="0">
              </iframe>
              
              <div className="cart-tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              
              <a className="cart-link" href={g.link} target="blank">
                Learn more
              </a>
              
            </article>
            
          ))}
        </div>
      </div>
    </section>
  )
}
