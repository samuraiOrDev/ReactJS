import { getHeroeByIdAsync } from "../../src/testing-basics/09-promesas.ts"
describe("getHeroeByIdAsync", () => {
  test("should return a promise that resolves to the hero with the given id", async () => {
    const id = 1;
    const hero = await getHeroeByIdAsync(id);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  });


});
