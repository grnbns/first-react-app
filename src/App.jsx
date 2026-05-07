import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Posts from "./pages/Posts.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx";

import Counter from './components/Counter.jsx';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/:id" element={<Users />}/>
      </Routes>
      <div>

      </div>
    </Router>
  )
}

export default App
