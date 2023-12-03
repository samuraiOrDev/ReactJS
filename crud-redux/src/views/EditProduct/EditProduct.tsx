
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"


import { ProductType } from "../../interfaces";
import { RootState } from "../../context/store";

import { useUpdateProductMutation } from "../../services/products";
import { updateProductById } from "../../context/productsReducer";

import "../NewProducts/NewProducts.css"
import { Input } from "../NewProducts/Input";

export const EditProduct = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const idNumber = parseInt(id as string)

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

  const [updateProduct] = useUpdateProductMutation();

  const dispatch = useDispatch()

  const product = useSelector((state: RootState) => {
    if (state.products.products.length != 0)
      return state.products.products.find((product: ProductType) => product.id === idNumber)
  })

  useEffect(() => {
    if (product)
      setInputValues({
        ...product
      })

  }, [product])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    inputValues['total'] = inputValues['price'] * inputValues['stock'];

    const updateProductObject = {
      ...inputValues
    }

    await updateProduct(updateProductObject);

    dispatch(updateProductById(updateProductObject));

    navigate('/');

  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
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
                className="btn-primary"
              >
                Change Save
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
