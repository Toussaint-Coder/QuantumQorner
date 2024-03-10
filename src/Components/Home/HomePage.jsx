import React, {useEffect, useState} from "react"
import {Link, Outlet} from "react-router-dom"

import Menu from "../Menu/Menu"
import Form from "../Form/Form"

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen p-8 bg-violet-100">
        <div className="w-full bg-white h-full shadow-lg rounded-lg p-8 max-w-4xl mx-auto flex gap-8">
          <Menu />
        </div>
      </div>
    </>
  )
}
export default HomePage
