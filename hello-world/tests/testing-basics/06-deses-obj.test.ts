import { usContext } from "../../src/testing-basics/06-deses-obj.ts";

describe("usContext", () => {
  test("should return the correct context for a given personaje", () => {

    const personaje = {
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
      rango: "Capitán",
    };

    const result = usContext(personaje);

    expect(result).toEqual({
      nombre: "Tony",
      edad: 45,
      clave: "Ironman",
      rango: "Capitán",
    });
  });

  test("should return the correct context when rango is not provided", () => {
    const personaje = {
      nombre: "Peter",
      edad: 20,
      clave: "Spiderman",
    };

    const result = usContext(personaje);

    expect(result).toEqual({
      nombre: "Peter",
      edad: 20,
      clave: "Spiderman",
      rango: "Capitán",
    });
  });
});
