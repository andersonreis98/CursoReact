import React, { createContext } from 'react';
import './App.css';

// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 desestruturando props
import SecundComponent from './components/SecundComponent';
import Desestruturing, { Category } from './components/Desestruturing';
import State from './components/State';
import Context from './components/Context';

// context
interface IAppContext {
  language: string,
  framework: string,
  projects: string;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = 'Anderson';
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return "Olá " + name;
  };

  // 8 - type 
  type textOrNull = string | null;

  type fixed = "isso" | "Ou" | "Aquilo";

  const myText: textOrNull = "Tem algum texto aqui"
  let mySecundText: textOrNull = null;

  mySecundText = "opa";


  // context
  const contextValue: IAppContext = {
    language: "javascript",
    framework: "Express",
    projects: "5",
  };


  const testandoFixed: fixed = "Ou"

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TS</h1>
        <h2>Nome: {name}</h2>
        <h2>Idade: {age}</h2>
        {isWorking && (
          <div>
            <p>Está Trabalhando!</p>
          </div>
        )}

        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecundComponent name={"Segundo"} />

        <Desestruturing
          title='Primeiro post'
          content='Algum conteudo'
          comentsQty={10}
          tags={["ts", "js"]}
          category={Category.JS}
        />

        <Desestruturing
          title='Segundo post'
          content='Outro conteudo'
          comentsQty={20}
          tags={["python"]}
          category={Category.PY}
        />
        <State />
        {myText &&
          <p>tem texto na variavel</p>}

        {mySecundText &&
          <p>tem texto na variavel</p>
        }
        <Context />
      </div>
    </AppContext.Provider>

  );
}

export default App;
