// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import { useCounterContext } from "../hooks/useCounterContext";

const Pag3 = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  return (
    <div>
        <h1>Pagina 3</h1>
        <h2>Valor do contador: {counter}</h2>
    </div>
  )
}

export default Pag3