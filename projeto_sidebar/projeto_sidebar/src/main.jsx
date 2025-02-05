import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// pages
import Home from './pages/home/Home.jsx'
import Financeiro from './pages/financeiro/Financeiro.jsx'
import Configuracoes from './pages/configuracoes/Configuracoes.jsx'
import GraficosRelatorios from './pages/graficosrelatorios/GraficosRelatorios.jsx'
import Historico from './pages/historico/Historico.jsx'
import Prontuario from './pages/prontuario/Prontuario.jsx'
import Sobre from './pages/sobre/Sobre.jsx'
import Termos from './pages/termos/Termos.jsx'
import Vinculacoes from './pages/vinculacoes/Vinculacoes.jsx'
import Agendamento from './pages/agendamento/Agendamento.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="financeiro" element={<Financeiro />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="relatorios" element={<GraficosRelatorios />} />
          <Route path="historico" element={<Historico />} />
          <Route path="prontuario" element={<Prontuario />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="termos" element={<Termos />} />
          <Route path="vinculacoes" element={<Vinculacoes />} />
          <Route path="agendamento" element={<Agendamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
