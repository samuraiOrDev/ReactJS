import { Link } from "react-router-dom"

import "./Header.css"
export const Header = () => {
  return (
    <nav style={{ background: 'rgba(0,0,0,.05)' }}>
      <div className="container-nav">
        <h1>
          <Link to={"/"}>
            CRUD - React, Redux Toolkit & REST API
          </Link>
        </h1>
        <button type="button" className="btn btn-primary">
          <Link to={"/products/new"} className="">&#43; Add Product</Link>
        </button>
      </div>
    </nav>
  )
}
