import { FC } from "react"


interface Props { }

const name = "MyName: Samurai Ordiales"

const newMessage = {
  id: 1,
  message: "Hello",
}
export const MyNameComponent: FC<Props> = () => {

  const addTwoNumbers = (a: number, b: number) => {
    return a + b
  }
  return (

    <>
      <h1>{name}</h1>
      <h2>Apellidos: García</h2>

      <h3>Pintamos las propiedades de un objeto JS</h3>

      <ul>
        <li> {Object.keys(newMessage)[0]} - {newMessage.id}</li>
        <li> {Object.keys(newMessage)[1]} - {newMessage.message}</li>
      </ul>

      <h3>Pintamos el objeto cómo una cadena de texto</h3>

      <code>{JSON.stringify(newMessage)}</code>

      {/* 
        Está anotación sirve para escribir comentarios en JSX. 
        Debe estar dentro de las llaves
      
      */}

      <h3>Suma de los números 2 y 3 es: </h3>
      <code>{addTwoNumbers(2, 3)}</code>
    </>
  )
}
