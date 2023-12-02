import { getUser, getUsuarioActivo } from '../../src/testing-basics/05-funciones.ts';

describe('Test en 05-funciones-string', () => {
  test("getUser debe retornar un objeto", () => {

    // const userTest = {
    //   uid: 'ABC122',
    //   username: 'El_Papi1502'
    // };

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest);

  })

  test("getUsuarioActivo debe retornar un objeto con el nombre proporcionado", () => {
    const nombre = 'Samurai';
    const usuarioActivo = getUsuarioActivo(nombre);

    expect(usuarioActivo).toEqual({
      uid: 'ABC567',
      username: nombre
    });
  });
});