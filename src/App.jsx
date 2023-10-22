import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/common/NavBar";
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Nav />
        <Routes>
          <Route></Route>
        </Routes>

      </Router>

    </div>

  )
}

export default App;
