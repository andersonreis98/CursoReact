import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name] = useState("joão");
    return (
        <div>

            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            {!x && <p>Se x for false, sim</p>}

            {/*If ternario*/}
            {name === "joão" ? (
                <div>
                    <p>O nome é joão</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

        </div>
    )
}

export default ConditionalRender