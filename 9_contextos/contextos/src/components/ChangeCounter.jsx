// 3 - alterando valor do contador
// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  // const { counter, setCounter } = useContext(CounterContext);

  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add valor ao contador
      </button>
    </div>
  );
};

export default ChangeCounter;
