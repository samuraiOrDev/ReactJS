
export const heroes = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC'
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel'
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC'
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC'
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel'
  },
];


export const getHeroeById = (id: number) => heroes.find((heroe) => heroe.id === id);
export const getHeroesByOwner = (owner: string) => heroes.filter((heroe) => heroe.owner === owner);




