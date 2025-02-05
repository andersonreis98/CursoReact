// import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Pag1 = () => {

  // const {counter} = useContext(CounterContext);
  const { counter } = useCounterContext();

  // context complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando contexto complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Pagina 1</h1>
      <h2>Valor do contador: {counter}</h2>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Pag1