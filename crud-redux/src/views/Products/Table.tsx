
import { TrTable } from './TrTable'
import { ProductType } from '../../interfaces'
import { TdTable } from './TdTable'

interface Props {
  products: ProductType[],
  handleDelete: (id: number) => void
}
export const Table = ({ products, handleDelete }: Props) => {
  return (
    <>
      <h2>Products List</h2>
      <div className="table-container ">
        <table >
          <thead>
            <TrTable />
          </thead>
          <tbody>
            {
              products.map((product: ProductType) => (
                <tr key={product.id}>
                  <TdTable product={product} handleDelete={handleDelete} />
                </tr>
              ))
            }
          </tbody>
        </table >
      </div>
    </>
  )
}
