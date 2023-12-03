
import { useDispatch, useSelector } from "react-redux"


import { AsyncAppDispatch, RootState } from "../../context/store"
import { useDeleteProductMutation } from "../../services/products"
import { deleteProductById } from "../../context/productsReducer"
import { Table } from "./Table"

import './Products.css'

export const Products = () => {

  const data = useSelector((state: RootState) => state.products)
  const { products, error, isLoading } = data
  const [deleteProduct] = useDeleteProductMutation();

  const dispatch = useDispatch<AsyncAppDispatch>()


  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    await dispatch(deleteProductById(id));
  }

  return (
    <>


      {
        error ? (
          <div className="wrong">
            <>No se han podido obtener los productos</>
          </div>
        ) : isLoading ? (
          <div className="loading">
            Loading...
          </div>
        ) : products.length === 0 ? (
          <div className="info">
            No hay productos
          </div>
        ) : (
          <>
            <Table products={products} handleDelete={handleDelete} />
          </>

        )
      }

    </>
  )
}
