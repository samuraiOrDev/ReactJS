import { Outlet } from "react-router-dom"
import { Header } from "../Header"


export const Layouts = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '20px 20px' }}>

        <div className="width-cotainer mt-5">
          <Outlet />
        </div>
      </div>
    </>
  )
}
