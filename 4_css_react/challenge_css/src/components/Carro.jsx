import style from './Carro.module.css'
const Carro = ({marca, modelo,ano}) => {
  return (
    <div>
        <h1>Carro: {modelo}</h1>

        <h2>Marca: {marca}</h2>
        <h2>Modelo: {modelo}</h2>
        <h2>Ano: {ano}</h2>

    </div>
  )
}

export default Carro