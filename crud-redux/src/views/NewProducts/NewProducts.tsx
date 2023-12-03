
import { ProductType } from "../../interfaces"
import { useCreateNewProductMutation } from "../../services/products"
import { addNewProduct } from "../../context/productsReducer"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


import "./NewProducts.css"
import { Input } from "./Input"
import { useState } from "react"
export const NewProducts = () => {

  const [inputValues, setInputValues] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    status: '',
    stock: 0,
    category: '',
    partner: '',
    total: 0
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [createNewProduct] = useCreateNewProductMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const id = Math.floor(Math.random() * 1000000) + Date.now();
    inputValues['id'] = id;
    inputValues['total'] = inputValues['price'] * inputValues['stock'];
    const newProduct: ProductType = { ...inputValues };



    await createNewProduct(newProduct);

    await dispatch(addNewProduct(newProduct));

    navigate('/');


  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="container-input-form">
                <div className="container-form-group">
                  <Input label="Product Name" type="text" name="name" placeholder="Product Name" value={inputValues.name} handleInputChange={handleInputChange} />
                  <Input label="Description" type="text" name="description" placeholder="Product Description" value={inputValues['description']} handleInputChange={handleInputChange} />
                </div>

                <div className="container-form-group">
                  <Input label="Product Price" type="number" name="price" placeholder="Product Price" value={inputValues.price} handleInputChange={handleInputChange} />
                </div>

                <div className="container-form-group">
                  <Input label="Status" type="text" name="status" placeholder="Status" value={inputValues.status} handleInputChange={handleInputChange} />
                  <Input label="Stock" type="number" name="stock" placeholder="Stock" value={inputValues.stock} handleInputChange={handleInputChange} />
                </div>

                <div className="container-form-group">
                  <Input label="Category" type="text" name="category" placeholder="Category" value={inputValues.category} handleInputChange={handleInputChange} />
                  <Input label="Partner" type="text" name="partner" placeholder="Partner" value={inputValues.partner} handleInputChange={handleInputChange} />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

