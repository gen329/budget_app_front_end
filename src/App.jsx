import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

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
