import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'

// 2 - adicionando links
// components
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1>React Router</h1>

        <BrowserRouter>
          <Navbar />
          {/* 9 - search */}
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            {/* 6 - nested route */}
            <Route path="/products/:id/info" element={<Info />} />
            {/* 4 - rota dinamica */}
            <Route path="/products/:id" element={<Product />} />

            {/* 9 search params */}
            <Route path="/search" element={<Search />} />
            {/* 10 - redirect */}
            <Route path="/company" element={<Navigate to="/about" />} />
            {/* 7  - no match route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
