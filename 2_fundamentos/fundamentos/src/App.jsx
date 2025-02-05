import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemplateExpressoes from './components/TemplateExpressoes'
import FirstComponentes from './components/FirstComponentes'
import MyComponents from './components/MyComponents'
import Events from './components/Events'
import Chalenger from './components/Challenger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponentes/>
      <TemplateExpressoes/>
      <MyComponents/>
      <Events />
      <Chalenger/>
    </>
  )
}

export default App
