import HookUseEffect from "../Components/HookUseEffect";
import HookUseReducer from "../Components/HookUseReducer";
import HookUseState from "../Components/HookUseState";
import HookUseRef from "../Components/HookUseRef";
import HookUseCallback from "../Components/HookUseCallback";
import HookUseMemo from "../Components/HookUseMemo";
import HookUseEffectLayout from "../Components/HookUseEffectLayout";
import HookUseImperativeHandle from "../Components/HookUseImperativeHandle";
import HookCustom from "../Components/HookCustom";

import './Home.module.css';

// useContext
import { useContext } from "react";
import { SomeContext } from "../Components/HookUseContext";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <HookUseState />
      <hr />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseEffectLayout />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  )
}

export default Home