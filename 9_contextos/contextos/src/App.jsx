import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Pag1 from "../src/pages/Pag1"
import Pag2 from "../src/pages/Pag2"
import Pag3 from "../src/pages/Pag3"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>contextos</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pag1 />} />
            <Route path="pag1" element={<Pag1 />} />
            <Route path="pag2" element={<Pag2 />} />
            <Route path="pag3" element={<Pag3 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
