import React, {useEffect} from "react"
import addIcon from "../../assets/add-student.svg"
import List from "../../assets/list-order.svg"
import Filter from "../../assets/filter.svg"
import {Outlet} from "react-router-dom"
import {Link} from "react-router-dom"

const Menu = ({}) => {
  return (
    <>
      <div className="h-full flex flex-col gap-8 items-center justify-center bg-black/5 p-3 rounded-lg">
        <Link to="/">
          <div className="rounded-lg bg-violet-100 p-2 hover:outline-violet-600 duration-200 active:scale-50 transform cursor-pointer outline outline-1 outline-violet-300">
            <img src={addIcon} className="w-6" alt="icon" />
          </div>
        </Link>
        <Link to="/list">
          <div className="rounded-lg bg-violet-100 p-2 hover:outline-violet-600 duration-200 active:scale-50 transform cursor-pointer outline outline-1 outline-violet-300">
            <img src={List} className="w-6" alt="icon" />
          </div>
        </Link>
        <div className="rounded-lg bg-violet-100 p-2 hover:outline-violet-600 duration-200 active:scale-50 transform cursor-pointer outline outline-1 outline-violet-300">
          <img src={Filter} className="w-6" alt="icon" />
        </div>
      </div>
      <Outlet />
    </>
  )
}
export default Menu
