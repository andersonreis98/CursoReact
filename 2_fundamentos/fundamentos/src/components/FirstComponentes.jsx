import MyComponents from "./MyComponents";

// comentando meu componente
const FirstComponentes = () =>{
    return(
        <div>
             {/*comentario do lado do servidor*/}
            <h1>minha primeira função</h1>
            <p className="teste">meu teste</p>
            <MyComponents/>
        </div>
    );
};
export default FirstComponentes;