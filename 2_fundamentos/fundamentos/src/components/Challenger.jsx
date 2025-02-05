const Chalenger = () => {

    const val1 = 50;
    const val2 = 50;
    
    return(
        <div>
            <h1>valor 1 = {val1}</h1>
            <h1>valor 2 = {val2}</h1>
            <h1>Resultado = {val1+val2}</h1>
            <button onClick={console.log(val1+val2)}>Resultado no console:</button>

        </div>
    );
};

export default Chalenger;