const Events = ()=>{
    const handleEvent = (e) =>{
        console.log(e);
        console.log("ativou o evento!");
    }
    const renderSomething = (x) =>{
        if(x){
            return <h1>Renderizando isso!</h1>;
        }
        else{
            return <h1>Também posso renderizar isso!</h1>;
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={console.log("clicou")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log("logica no html");
                    }
                }
                }>Clique aqui também!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;