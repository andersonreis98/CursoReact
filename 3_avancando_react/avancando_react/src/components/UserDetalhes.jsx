export const UserDetalhes = ({ id, nome, idade, bonito }) => {
    return (
        <div>
            <h2>Detalhes do usuario:</h2>
            <ul>
                <li>Id: {id}</li>
                <li>Nome: {nome}</li>
                <li>Idade: {idade}</li>
                <li>Bonito?: {bonito ? ("bonito") : ("feio")}</li>
            </ul>
            <p>Pode tirar carta? :  {idade >= 18 ? ("pode sim") : ("não pode")}</p>
        </div>
    )
}
