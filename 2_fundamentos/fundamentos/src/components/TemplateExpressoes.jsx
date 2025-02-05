 const TemplateExpressoes = () => {
    const name = "Anderson";
    const data = {idade: 25 , trabalho:"programador"};

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Eu trabalho como {data.trabalho}</p>
            <p>{8+8}</p>
            <p>{console.log("ai caralho olha esse comentario")}</p>
        </div>
    );
 };

 export default TemplateExpressoes;