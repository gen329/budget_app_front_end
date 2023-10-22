import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/NavBar";
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Nav />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
