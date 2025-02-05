import React from 'react'
import './Agendamento.css'
import Calendar from 'react-calendar'



const Agendamento = () => {
  
  let atual = new Date();
  atual.setMonth(atual.getMonth()+1);


  return (
    <div>
      <h1>Agendamento</h1>
      <Calendar minDate={new Date()} maxDate={atual} className="calendario" />
    </div>

  )
}

export default Agendamento
