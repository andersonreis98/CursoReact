import React,{ChangeEvent, useState} from 'react'

const State = () => {
const [texto, setTexto] = useState<string | null>("Testando hook");

const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setTexto(e.target.value);
};

  return (
    <div>
        <p>O texto é: {texto} </p>
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State