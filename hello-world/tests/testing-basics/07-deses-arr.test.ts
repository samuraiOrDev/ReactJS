import { retornaArreglo } from "../../src/testing-basics/07-deses-arr.ts"
describe("retornaArreglo", () => {
  test("debería retornar un arreglo con dos elementos", () => {
    const arreglo = retornaArreglo();
    expect(Array.isArray(arreglo)).toBe(true);
    expect(arreglo.length).toBe(2);
  });

  // test("debería retornar un arreglo con los elementos [1, 2]", () => {
  //   const arreglo = retornaArreglo();
  //   expect(arreglo).toEqual([1, 2]);
  // });
  test("debería retornar un arreglo con los elementos ['ACB', 123]", () => {
    const arreglo = retornaArreglo();
    expect(arreglo).toEqual(['ABC', 123]);
  });
});
