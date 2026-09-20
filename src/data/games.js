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
    pitch: 'A 2.5D game set in a "corporate hell" 1980s office. Over three levels the player climbs the same skyscraper. The characters are 16-directional sprites, and the environment is 3D.',
    description: ["Hell of a Rescue is a group project with 12 other teammates. I was in charge of the environmental art including every 3D static objects in the game. The art direction changed several times (Greek-office, then 1990s, then 1980s), and the team capped every object at around 200 triangles. I adapted by rebuilding my detailed office props as low-poly models and baking the lost detail into normal maps. A keyboard dropped from over 12,000 triangles to 92, and a desk from about 600 to 156, while both stayed recognisable on screen.", "I also built a master material with instances, including a scriptable checkerboard floor mat. After players found the original pattern dizzy, it let the team change tiling and colour in about 10 seconds instead of a 30-minute round trip through 3ds Max. My largest asset was the 23-storey American Surety Building. I sculpted it at roughly 1 million triangles, then split it into modular walls of around 200 triangles each with 1024×1024 normal maps. I reused it across all three levels so the player feels they are climbing one building.", ""],
    tags: ['Unreal', 'Multi-ending', '2.5D', 'Puzzle', 'backroom', 'ancient Greek style', 'Rock'],
    link: 'https://vera-silva.itch.io/hell-of-a-rescue',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/4698547',
    document_link: '/documents/Hell_of_a_rescue_reflective_report.pdf',
    cover: '/cover/game1cover.jpg',
    images: ['/cover/game1cover.jpg', 
             '/cover/game1cover2.png', 
             '/cover/game1cover3.png'],
    contributions: ['I created the game’s environment, modelled and optimised all 3D assets.', 'Produced optimised assets with a target of fewer than 200 triangles per object.', 'Developed a reusable Unreal Engine master material with efficient mixed-texture support.', 'Converted a 900,000+ triangle building exterior into low-poly assets with normal mapping.', 'Collaborated with concept artist, animators and level designers to support the game’s visual direction and level integration.'], 
    quick_info: 'Team of 13 · Environment artist · Art direction had turned 3 times · 12 weeks'
  },
  {
    title: 'Concrete Architects',
    pitch: 'A building game set in 1960s Cumbernauld Town Centre. The player places interior and exterior buildings on a grid across four floors. Walls generate automatically when the design is submitted, and the layout affects the ending. The visuals mimic a hand-drafted architectural sketch.',
    description: ["Concrete Architects is a team project with 5 other teammates. It was a game project collaborated with V&A Dundee, aimed at attracting more local tourists in Dundee DD2 and DD4 districts to the museum. We've picked a sketch of the old Cumbernauld Town Centre as our inspiration for the topic.", "I built the sketch-style look by combining an outline shader with four layers of cross-hatching on a yellow-brown paper background. I fixed the shader jitter by turning off anti-aliasing and disabling Nanite on every mesh. I modelled around 20 building types and 7 vehicles from books, photos and archive film, all built to fixed grid dimensions so they snap together. In Unreal Blueprints, I implemented the collision-based checks that decide where each building can be placed. These cover floor limits, entrance connections and overlaps. I also kept the asset list and building dimensions up to date, merged the team's work in GitHub, and packaged builds. At the deadline I worked with a teammate to cut the build size by more than half so we could submit.", "The finished game aimed to let players go back in time to rebuild the Cumbernauld Town Centre, as it was often criticised for its stark Brutalist architecture, confusing layout, and decline into a dysfunctional retail space."],
    tags: ['Unreal', 'Applied Game', 'Multi-ending', '3D', 'simulation', 'architecture', 'Cumbernauld'],
    link: 'https://renaissancestudios.itch.io/concrete-architects',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/4476181',
    document_link: '/documents/Concrete_Architects_portfolio.pdf',
    cover: '/cover/game2cover.jpg',
    images: ['/cover/game2cover.jpg', 
             '/cover/game2cover2.png',
             '/cover/game2cover3.png',
             '/cover/game2cover4.png'], 
    contributions: ['Led the production of the game’s 3D building assets and environmental art.', 'Developed the game’s distinctive monochrome shader in Unreal Engine.', 'Implemented the building logic for the architectural simulation.', 'Optimised assets and integrated art and gameplay systems during team development.', 'Managed the final executable build after merging the team’s work using GitHub.'], 
    quick_info: 'Team of 6 · 3D artist, shader & building logic · collaboration with V&A Dundee · 12 weeks'  
  },
  {
    title: "Baby's First Tower Defence",
    pitch: "2-week prototype made in Unreal Engine as part of Abertay University's MProf, straight after GoodBabies, and reuses many of that game's assets. It is a 3D third-person shooter where I was in charge of the 3D art (free assets used)",
    description: ["Baby's First Tower Defence is a teamwork project with 5 other teammates after the creation of GoodBabies in the same 12-week cycle. We used a lot of free art assets and reused many assets from previous games to speed up the creation. I was in charge of the static buildings like the igloo and the school. The school building is inspired by Dundee High School.", "I made the snow fort and the school background. I built the snow fort modularly, with one fixed igloo core and swappable top pieces, plus several staircase variants. That gave the level designer a range of layouts quickly, and let the environment come together within the short schedule."],
    tags: ['Unreal', 'Multiplayer', '3D', '3rd person shooter', 'winter'],
    link: 'https://colranestudios.itch.io/babys-first-tower-defense',
    color: 'var(--accent-coral)',
    embed_link: 'https://itch.io/embed/4109204',
    document_link: '/documents/GoodBabies_&_tower_defence_portfolio.pdf',
    cover: '/cover/game3cover.png', 
    quick_info: 'Team of 6 · Modular snow fort & school environment · 2 weeks'
  },
  {
    title: 'GoodBabies',
    pitch: `A dark-comedy game where the player sits at a table across from the "Bambino crime family", a mafia of babies. Distraction events pull the player's attention away while a suspicion meter builds. Childlike toys and festive decorations contrast with the criminal setting.`,
    description: ["GoodBabies is a teamwork project with 5 other teammates. It is a fun project with lots of memes and popular culture references. I was in charge of creating 3D objects for the room and the materials. It was my first time working with a complete 3Ds Max to Unreal Engine pipeline, and so the final product is not as good as the latter game projects.", "I built the props that make the mafia-baby setting work. The distraction objects include a cuckoo clock with a spring-loaded horse head, a modular train set with extra track pieces and a drawer table, a TV set and highchair, and a fly with glowing red eyes. Each one was designed to pull the player's attention away from the table. For the storytelling props, I made the toys, chocolate coins and the rubber duck. I mocked up a shared scale with a biped in 3ds Max and checked every model again in Unreal, which led to five versions of the TV remote. I also set up naming rules and a clear folder structure after early files got messy. My work was delivered on time and well planned to use throughout the game environment.", ""],
    tags: ['Unreal', 'Multi-ending', 'crime', 'card game', 'intense', 'fun'],
    link: 'https://colranestudios.itch.io/goodbabies',
    color: 'var(--accent-lilac)',
    embed_link: 'https://itch.io/embed/4108940',
    document_link: '/documents/GoodBabies_&_tower_defence_portfolio.pdf',
    cover: '/cover/game4cover.png',
    images: ['/cover/game4cover.png',
             '/cover/game4cover2.png',
             '/cover/game4cover3.png',
             '/cover/game4cover4.png'],
    quick_info: 'Team of 6 · Prop & material artist · first time working with 3ds Max to Unreal pipeline · 10 weeks'
  },
  {
    title: 'From Healthy to Zombie',
    pitch: "My bachelor's degree final year project, a Meta VR simulation game",
    description: ["From Healthy to Zombie is an individual game for my final year project in my Bachelor's degree. It was the first time I was in charge of developing and delivering a game project on such a scale.", "Free art assets, including a food pack, supermarket with the parking lots and the shopping trolley, were used to speed up my creation, so that I could focus mainly on the programming and VR development part. I developed a working game mechanism to play with the Meta Quest 2 VR device, implemented elements like a basic hand menu, a value counter on the trolley UI, movement logic that requires only analog stick to perform teleporting, basic enemy AI, an immersive VR video player in Unity, and interactive scene transitions to improve player experience.", "The environment setting was experimental for me; it was the first time I was putting shaders to use for better visual delivery. A toon shader is used in the game for most of the objects in static buildings and is visually tuned for different daylight settings throughout the day. I have learned a lot from the development, as my programming mindset, knowledge of VR development, shader usage, version control and production pipeline, and UI/UX design have improved a lot and supported my later journey of my Master's degree.", "The game project is not perfect, but I did my best at the time. Given another year to improve the game, I would add a city view background for immersion, better trolley physics to avoid lag, better enemy AI for more challenging gameplay, redesign all 3D art assets for originality and looking for art style best fit into the game setting, a clear tutorial level for the player with instructions, and better video recordings of the game for promotion.", ""],
    tags: ['Unity', 'Zombie simulation', 'VR', 'shopping'],
    link: 'https://thereisnousername1.itch.io/from-healthy-to-zombie',
    color: 'var(--accent-amber)',
    embed_link: 'https://itch.io/embed/3513355', 
    document_link: '/documents/From_healthy_to_zombie_final_report.pdf',
    quick_info: 'Solo project · Programming oriented · Meta VR · Oct 2024 - May 2025'
  },
  {
    title: 'Timelock',
    pitch: 'My first Unreal shipping game for practice.',
    tags: ['Unreal', '3D puzzle game', 'time limitation'],
    link: 'https://mockname.itch.io/timelock',
    color: 'var(--accent-teal)',
    embed_link: 'https://itch.io/embed/3060964', 
    quick_info: 'Team of 2 · Programmer · 3 months(part-time)'
  },
]

export const games = rawGames.map((g) => ({ ...g, slug: slugify(g.title) }))




