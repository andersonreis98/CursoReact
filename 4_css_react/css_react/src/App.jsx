import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyComponents } from './components/MyComponents'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  const n = 15;
  const [name] = useState("Anderson");

  const redTitle = false;

  return (
    <>
      <div className='App'>
        {/* CSS Global */}
        <h1>React com CSS</h1>
        <p>paragrafo do App JS</p>
        {/* CSS de componentes */}
        <MyComponents />
        {/* inline css */}
        <p style={{ color: 'blue', padding: "25px" }}>esse elemento foi estilizado inline</p>

        {/* css inline dinamoco */}
        <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>css dinâmico</h2>

        <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>css dinâmico</h2>

        <h2 style={name === "Anderson" ? ({ color: "green", backgroundColor: "blue" }) : null}>css dinâmico</h2>

        {/* classe dinamica */}
        <h2 className={redTitle ? ("red-title") : ("title")} >esse titulo vai ter classe dinamica</h2>

        {/* css modules */}
        <Title/>

      </div>
    </>
  )
}

export default App
