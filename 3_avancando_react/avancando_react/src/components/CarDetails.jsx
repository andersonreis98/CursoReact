
const CarDetails = ({brand,modelo,km,color,newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>      
        <ul>
            <li>Marca: {brand}</li>
            <li>Modelo: {modelo}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            <li>Novo? : {newCar ? ("novo"):("velho")}</li>


            </ul> 
    </div>
  )
}

export default CarDetails