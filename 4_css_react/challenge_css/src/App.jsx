import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carro from './components/Carro'

function App() {
  const [count, setCount] = useState(0)
  const car = [
    {id:1, marca:"VW", modelo:"Fusca",ano:1980},
    {id:2, marca:"Fiat", modelo:"Uno",ano:2000},
    {id:3, marca:"Chevrolet", modelo:"Spin",ano:2016},
    {id:4, marca:"VW", modelo:"Gol",ano:2023}

];

  return (
    <>
    <div>
      <h1 className="titulo" >Titulo que vou estilizar</h1>
      {
        car.map((c) => (
          <Carro key={c.id} marca={c.marca} modelo={c.modelo} ano={c.ano} />
        ))}
      
    </div>
    </>
  )
}

export default App
