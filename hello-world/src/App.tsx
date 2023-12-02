import { CounterComponent, MyNameComponent } from "./components"


const name = "MyName: Samurai Ordiales"

function App() {

  return (
    <>
      <MyNameComponent title={name} />
      <br />
      <CounterComponent />
    </>
  )
}

export default App
