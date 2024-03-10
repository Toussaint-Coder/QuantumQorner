import React from "react"
import "./App.css"
import HomePage from "./Components/Home/HomePage"
import Menu from "./Components/Menu/Menu"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import List from "./Components/List/List"
import Form from "./Components/Form/Form"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />}>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
