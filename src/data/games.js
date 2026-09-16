// games section
// embed_link: for itch.io iframe embedding
// document_link: if there is portfolio for a product, put the document in public/documents folder

// automatically generate slug from the title, e.g. "Hell of a Rescue" -> "hell-of-a-rescue"
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/'/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const rawGames = [
  {
    title: 'Hell of a Rescue',
    pitch: '2.5D fixed view puzzler in an ancient greek styled building within 12 weeks, where I was incharge of 3D art.',
    description: ["Hell of a Rescue is a groupwork with 12 other teammates. I was incharge of the environmental art(including every 3D static objects in the game) and had a strong collaboration with Euan(concept art + animation + character), Richeng(UI, concept art, character design), Sam(level designer), ZhuoXin(level designer).", "In the development process I have developed the full 3D assets with optimization below 200 triangle counts per each object; a well-written mixed texture loaded master material in Unreal engine that allows us create many textured instances efficiently; high-to-low poly models including a 900000+ triangles building exterior from the American Suerty Building into low-poly model with proper normal mapping to bring most of the detail into our game without performance lost."],
    tags: ['Multi-ending', '2.5D', 'Puzzle', 'backroom', 'ancient greek style', 'Rock'],
    link: 'https://vera-silva.itch.io/hell-of-a-rescue',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/4698547',
    document_link: '/documents/IuPakHungAndy_DES512_ReflectiveReport.pdf',
    cover: '/cover/game1cover.jpg'
  },
  {
    title: 'Concrete Architects',
    pitch: '3D Building simulation game aimed to rebuild Cumbernauld Town Centre with a vintage mono-tone shader within 12 weeks, collaboration with V&A Dundee where I was incharge of art(shader and 3D) and programming(building logic)',
    description: ["Concrete Architect is a teamwork with other 5 teammates. It was a game project collaborated with V&A Dundee, aimed to attract more local tourist in Dundee DD2 and DD4 district to the museum. We've picked a sketching of the old Cumbernauld Town Centre as our insipiration of the topic.", "The finished game aimed let player go back in time to rebuild the Cumbernauld Town Centre as it was often being critizied for its stark Brutalist architecture, confusing layout, and decline into a dysfunctional retail space. I was incharge of the art deliveries including all 3D building parts and the special monotone shader, also the programming part for the building logic, optimization and compiling the executable after merging.", ""],
    tags: ['Multi-ending', '3D', 'simulation', 'architecture', 'Cumbernauld'],
    link: 'https://renaissancestudios.itch.io/concrete-architects',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/4476181',
    cover: '/cover/game2cover.jpg'
  },
  {
    title: "Baby's First Tower Defence",
    pitch: "2 week prototype made in Unreal Engine as part of Abertay University's MProf. A 3D third person shooter where I was incharge of the 3D art(free assets used)",
    tags: ['Multiplayer', '3D', '3rd person shooter', 'winter'],
    link: 'https://colranestudios.itch.io/babys-first-tower-defense',
    color: 'var(--accent-coral)',
    embed_link: 'https://itch.io/embed/4109204',
    cover: '/cover/game3cover.png'
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

export const games = rawGames.map((g) => ({ ...g, slug: slugify(g.title) }))
