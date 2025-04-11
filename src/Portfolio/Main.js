
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Skills from './Skills';
import Qualificaiton from './Qualificaiton';
import Project from './Project';
import Contact from './Contact';
import './Main.css';


function App() {
  return (
   <>

    <Router>
    <Navbar />
   
      <div className='main'>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/Home" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Qualificaiton" element={<Qualificaiton />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

    </Router>
  </>

  );
}

export default App;


