import { getHeroeById, getHeroesByOwner, heroes } from '../../src/testing-basics/08-imp-exp'

describe('Testing in 08-imp-exp.ts', () => {
  test('should return a heroe by id: getHeroById', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((heroe) => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('should return undefined if heroe does not exist: getHeroeById(', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('should return an array with DC heroes: getHeroesByOwner', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);
    expect(heroes).toEqual(heroesData);
  });

  test('should return an array with Marvel heroes: getHeroesByOwner', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});