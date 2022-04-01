const products = [
  {
    _id: '1',
    name: 'ELDEN RING',
    cover: '/images/1.jpg',
    tag: 'Souls-like',
    releasedate: 'Feb 24, 2022',
    category: 'Action',
    developer: 'FromSoftware Inc.',
    publisher: 'FromSoftware Inc., BANDAI NAMCO Entertainment',
    description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    price: 79.99,
    countInStock: 99,
    rating: 4.6,
    numReviews: 2077,
  },
  {
    _id: '2',
    name: 'Midnight Ghost Hunt',
    cover: '/images/2.jpg',
    tag: 'Combat',
    releasedate: 'Mar 31, 2022',
    category: 'Action',
    developer: 'Vaulted Sky Games',
    publisher: 'Coffee Stain Publishing',
    description: 'A chaotic multiplayer hide-and-seek game. Possess seemingly harmless objects as Ghosts or chase them down as Hunters before the clock strikes midnight!',
    price: 45.48,
    countInStock: 99,
    rating: 3.9,
    numReviews: 10,
  },
  {
    _id: '3',
    name: 'DEATH STRANDING DIRECTOR CUT',
    cover: '/images/3.jpg',
    tag: 'Walking Simulator',
    releasedate: 'Mar 30, 2022',
    category: 'Action',
    developer: 'KOJIMA PRODUCTIONS',
    publisher: '505 Games',
    description: 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?',
    price: 129.99,
    countInStock: 99,
    rating: 4.7,
    numReviews: 328,
  },
  {
    _id: '4',
    name: 'Weird West',
    cover: '/images/4.jpg',
    tag: 'Western',
    releasedate: 'Mar 31, 2022',
    category: 'RPG',
    developer: 'WolfEye Studios',
    publisher: ' Devolver Digital',
    description: 'Survive and unveil the mysteries of the Weird West through the intertwined destinies of its unusual heroes in an immersive sim from the co-creators of Dishonored and Prey.',
    price: 39.99,
    countInStock: 99,
    rating: 4,
    numReviews: 123,
  },
  {
    _id: '5',
    name: 'LEGO® Star Wars™: The Skywalker Saga',
    cover: '/images/5.jpg',
    tag: 'LEGO',
    releasedate: 'Apr 5, 2022',
    category: 'Adventure',
    developer: 'TT Games',
    publisher: ' Warner Bros. Games, Warner Bros. Interactive Entertainment',
    description: 'Play through all nine Star Wars saga films in a brand-new LEGO video game unlike any other. Experience fun-filled adventures, whimsical humor, and the freedom to fully immerse yourself in the LEGO Star Wars galaxy.',
    price: 59.99,
    countInStock: 99,
    rating: 5,
    numReviews: 77,
  },
  {
    _id: '6',
    name: 'Spiritfarer®: Farewell Edition',
    cover: '/images/6.jpg',
    tag: 'Story Rich',
    releasedate: 'Aug 18, 2020',
    category: 'Indie',
    developer: 'Thunder Lotus Games',
    publisher: ' Thunder Lotus Games',
    description: 'Spiritfarer® is a cozy management game about dying. As ferrymaster to the deceased, build a boat to explore the world, care for your spirit friends, and release them into the afterlife. The Spiritfarer Farewell Edition includes the heartwarming base game and three major content updates.',
    price: 10.19,
    countInStock: 99,
    rating: 5,
    numReviews: 15077,
  },
  {
    _id: '7',
    name: 'TUNIC',
    cover: '/images/7.jpg',
    tag: 'Puzzle',
    releasedate: 'Mar 16, 2022',
    category: 'RPG',
    developer: 'TUNIC Team',
    publisher: 'Finji',
    description: 'Explore a land filled with lost legends, ancient powers, and ferocious monsters in TUNIC, an isometric action game about a small fox on a big adventure.',
    price: 39.58,
    countInStock: 99,
    rating: 5,
    numReviews: 1692,
  },
  {
    _id: '8',
    name: 'Cyberpunk 2077',
    cover: '/images/8.jpg',
    tag: 'Cyberpunk',
    releasedate: 'Dec 9, 2020',
    category: 'RPG',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.',
    price: 89.99,
    countInStock: 99,
    rating: 5,
    numReviews: 4325,
  },
  {
    _id: '9',
    name: 'Planet Zoo',
    cover: '/images/9.jpg',
    tag: 'Management',
    releasedate: 'Nov 5, 2019',
    category: 'Strategy',
    developer: 'Frontier Developments',
    publisher: 'Frontier Developments',
    description: 'Build a world for wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo sim. Construct detailed habitats, manage your zoo, and meet authentic living animals who think, feel and explore the world you create around them.',
    price: 66.71,
    countInStock: 99,
    rating: 5,
    numReviews: 6091,
  },
  {
    _id: '10',
    name: 'Raft',
    cover: '/images/10.jpg',
    tag: 'Survival',
    releasedate: 'May 23, 2018',
    category: 'Indie',
    developer: 'Redbeet Interactive',
    publisher: 'Axolot Games',
    description: 'Raft throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!',
    price: 19.99,
    countInStock: 99,
    rating: 5,
    numReviews: 819,
  },
]

module.exports = products
