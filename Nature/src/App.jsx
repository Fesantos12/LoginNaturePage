import React from "react"

import Index from "./Components/home"
import IndexLogin from "./Components/Login/IndexLogin"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/Login" element={<IndexLogin/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
