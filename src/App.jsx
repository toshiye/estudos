import { useState } from 'react'
import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home.jsx'
import Lesson3_1 from './pages/lesson3_1.jsx'
import Lesson3_2 from './pages/lesson3_2.jsx'
import Lesson3_3 from './pages/lesson3_3.jsx'
import Lesson3_4 from './pages/lesson3_4.jsx'
import Lesson3_5 from './pages/lesson3_5.jsx'
import Lesson3_6 from './pages/lesson3_6.jsx'
import Lesson3_7 from './pages/lesson3_7.jsx'
import Lesson3_8 from './pages/lesson3_8.jsx'
import Lesson3_9 from './pages/lesson3_9.jsx'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lesson3_1">Lesson 3.1</Link>
          </li>
          <li>
            <Link to="/lesson3_2">Lesson 3.2</Link>
          </li>
          <li>
            <Link to="/lesson3_3">Lesson 3.3</Link>
          </li>
          <li>
            <Link to="/lesson3_4">Lesson 3.4</Link>
          </li>
          <li>
            <Link to="/lesson3_5">Lesson 3.5</Link>
          </li>
          <li>
            <Link to="/lesson3_6">Lesson 3.6</Link>
          </li>
          <li>
            <Link to="/lesson3_7">Lesson 3.7</Link>
          </li>
          <li>
            <Link to="/lesson3_8">Lesson 3.8</Link>
          </li>
          <li>
            <Link to="/lesson3_9">Lesson 3.9</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson3_1" element={<Lesson3_1 />} />
        <Route path="/lesson3_2" element={<Lesson3_2 />} />
        <Route path="/lesson3_3" element={<Lesson3_3 />} />
        <Route path="/lesson3_4" element={<Lesson3_4 />} />
        <Route path="/lesson3_5" element={<Lesson3_5 />} />
        <Route path="/lesson3_6" element={<Lesson3_6 />} />
        <Route path="/lesson3_7" element={<Lesson3_7 />} />
        <Route path="/lesson3_8" element={<Lesson3_8 />} />
        <Route path="/lesson3_9" element={<Lesson3_9 />} />
      </Routes>
    </>
  )
}

export default App
