import { useState } from "react"

const HookUseState = () => {
    // 1 -useState
    let userName = "João";
    const [nome, setNome] = useState("Anderson");

    const mudaNome = () => {
        setNome("Anderson Nascimento");
        userName = "João da Silva";

        console.log(userName);
        console.log(nome);
    }
    // 2 - Use State e Input
    const [idade, setIdade] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault()

        //envio de dados a API
        console.log(idade);
    }

    return (
        <div>
            {/* 1 - usestate */}
            <h2>useState</h2>
            <p>Variavel: {userName}
            </p>
            <p>useState: {nome}
            </p >
            <button onClick={mudaNome}>Altera Dado</button>
            <br />
            <br />


            {/* 2 - Use State e Input */}
            <h2>useState com Input</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <input type="submit" value="envia porra" />
            </form>
            <p>Você tem {idade} anos de idade!</p>
        </div >
    );
};

export default HookUseState