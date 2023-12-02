
test("Espero que msg sea igual a msg2", () => {


  // 1. Arrange
  const msg = 'Hola Mundo'

  // 2. Act
  const msg2 = msg.trim()

  // 3. Assert
  // Espero que msg sea igual a msg2
  expect(msg).toBe(msg2)



  // eslint-disable-next-line no-constant-condition
  // if (1 === 1) {
  //   throw new Error('1 es igual a 1')
  // }
})