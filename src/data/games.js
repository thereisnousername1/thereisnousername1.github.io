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
    description: ["Hell of a Rescue is a groupwork with 12 other teammates. I was incharge of the environmental art(including every 3D static objects in the game) and had a strong collaboration with Euan(concept art + animation + character), Richeng(UI, concept art, character design), Sam(level designer), ZhuoXin(level designer).", "In the development process I have developed the full 3D assets with optimization below 200 triangle counts per each object; a well-written mixed texture loaded master material in Unreal engine that allows us create many textured instances efficiently; high-to-low poly models including a 900000+ triangles building exterior from the American Suerty Building into low-poly model with proper normal mapping to bring most of the detail into our game without performance lost.", ""],
    tags: ['Unreal', 'Multi-ending', '2.5D', 'Puzzle', 'backroom', 'ancient greek style', 'Rock'],
    link: 'https://vera-silva.itch.io/hell-of-a-rescue',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/4698547',
    document_link: '/documents/IuPakHungAndy_DES512_ReflectiveReport.pdf',
    cover: '/cover/game1cover.jpg',
    images: ['/cover/game1cover.jpg', '/cover/game1cover2.png', '/cover/game1cover3.png'],
    contributions: ['Modeled and optimized all 3D environment assets', 'Built a shared texture master material for efficient instancing', 'Reduced a 900k-triangle building to game-ready low-poly with normal mapping','']
  },
  {
    title: 'Concrete Architects',
    pitch: '3D Building simulation game aimed to rebuild Cumbernauld Town Centre with a vintage mono-tone shader within 12 weeks, collaboration with V&A Dundee where I was incharge of art(shader and 3D) and programming(building logic)',
    description: ["Concrete Architect is a teamwork with other 5 teammates. It was a game project collaborated with V&A Dundee, aimed to attract more local tourist in Dundee DD2 and DD4 district to the museum. We've picked a sketching of the old Cumbernauld Town Centre as our insipiration of the topic.", "The finished game aimed let player go back in time to rebuild the Cumbernauld Town Centre as it was often being critizied for its stark Brutalist architecture, confusing layout, and decline into a dysfunctional retail space. I was incharge of the art deliveries including all 3D building parts and the special monotone shader, also the programming part for the building logic, optimization and compiling the executable after merging.", ""],
    tags: ['Unreal', 'Multi-ending', '3D', 'simulation', 'architecture', 'Cumbernauld'],
    link: 'https://renaissancestudios.itch.io/concrete-architects',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/4476181',
    cover: '/cover/game2cover.jpg',
    images: ['/cover/game2cover.jpg', '/cover/game2cover2.png'],
  },
  {
    title: "Baby's First Tower Defence",
    pitch: "2 week prototype made in Unreal Engine as part of Abertay University's MProf. A 3D third person shooter where I was incharge of the 3D art(free assets used)",
    description: ["Baby's First Tower Denfence is a teamwork with 5 other teammates after creation of GoodBabies in the same 12 week cycle. We used a lot of free art assets and reused many assets from prvious game to speed up the creation. I was incharge of the static building like the igloo and the school. The school building is inspired from the Dundee High School.", ""],
    tags: ['Unreal', 'Multiplayer', '3D', '3rd person shooter', 'winter'],
    link: 'https://colranestudios.itch.io/babys-first-tower-defense',
    color: 'var(--accent-coral)',
    embed_link: 'https://itch.io/embed/4109204',
    cover: '/cover/game3cover.png'
  },
  {
    title: 'GoodBabies',
    pitch: "10 week prototype made in Unreal Engine as part of Abertay University's MProf. A simulation game where I was incharge of the 3D art.",
    description: ["GoodBabies is a teamwork with 5 other teammates. It is a fun project with lots of memes and popular culture references. I was incharge of the creation of 3D objects in the room and the material. It was my first time working with a complete 3Ds Max to Unreal Engine working pipeline and so the final product is not as good as the latter game projects.", "In the project I planned my creation in separate topics for different area of the room. I had my first collaboration with another art related teammate Euan, converting his 2D concept art into 3D assets for our development and working with Mikey to put them into game mechanism. My work was delivered in time and well planned to use all over the game environment.", ""],
    tags: ['Unreal', 'Multi-ending', 'crime', 'card game', 'intense', 'fun'],
    link: 'https://colranestudios.itch.io/goodbabies',
    color: 'var(--accent-lilac)',
    embed_link: 'https://itch.io/embed/4108940',
    cover: '/cover/game4cover.png',
    images: ['/cover/game4cover.png', ''],
  },
  {
    title: 'From Healthy to Zombie',
    pitch: "My bachelor's degree final year project, a Meta VR simulation game",
    description: ["From Healthy to Zombie is an individual game for my final year project in Bachelor's degree. It was the first time I am incharge of develop individually and delivering a game project in such scale.", "Free art assets including food pack, supermarket with the parking lots and the shopping trolley were used to speed up my creation, so that I can focus on mainly the programming and VR development part. I had developed a working game mechanism for to play with Meta Quest 2 VR device, implemented elements like a basic hand menu, value counter on the trolley UI, movement logic requires only analog stick to perform teleporting, basic enemy AI, an immersive VR video player in Unity, interactive scene transitions to improve player experience.", "The environment setting was experimental for me, it was the first time I am putting shader in use for better visual deliveries. A toon shader is used in the game for most of the objects in static buildings and visually tuned for different daylight setting in a day. I have learned alot from the development as my programming mindset, knowledge to VR development, shader usage, version control and production pipeline, UIUX design has improved alot and supporting my later journey of my Master's degree.", "The game project is not perfect but I did my best at the time. Given another year to improve the game I would put a city view background for immersion, a better trolley physics to encounter lagging, better enemy AI for more challenging gameplay, redesign all 3D art assets for orginality and looking for art style best fit into the game setting, a clear tutorial level for player with instruction, better video recordings of the game for promotion.", ""],
    tags: ['Unity', 'Zombie simulation', 'VR', 'shopping'],
    link: 'https://thereisnousername1.itch.io/from-healthy-to-zombie',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/3513355'
  },
  {
    title: 'Timelock',
    pitch: 'My first unreal shipping game for practice.',
    tags: ['Unreal', '3D puzzle game', 'time limitation'],
    link: 'https://mockname.itch.io/timelock',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/3060964'
  },
]

export const games = rawGames.map((g) => ({ ...g, slug: slugify(g.title) }))
