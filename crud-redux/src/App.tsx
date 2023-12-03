import { Route, Routes } from "react-router-dom"
import { Layouts } from "./components"
import { EditProduct, NewProducts, NotFound, Pokemons, Products } from "./views"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />} >
        <Route path="" element={<Products />} />
        <Route path="products/new" element={<NewProducts />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
