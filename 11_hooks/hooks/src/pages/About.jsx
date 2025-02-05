import './About.module.css'
// useContext
import { useContext } from "react";
import { SomeContext } from "../Components/HookUseContext";

const About = () => {

  const {contextValue} = useContext(SomeContext);

  return (
    <div>
      <h1>About</h1>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
    </div>
  )
}

export default About