
import { getSaludo } from "../../src/testing-basics/02-template-string.ts";

describe('Test en 02-template-string', () => {
  test("getSaludo debe retornar 'Hola Samurai'", () => {

    const name = "Samurai";
    const saludo = getSaludo(name);

    expect(saludo).toBe(`Hola ${name}`);
    // expect(saludo).toBe(`Hola ${name}!!!`);

  })
});