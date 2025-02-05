import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Jose", "Maria"]);
  const [user, setUsers] = useState([{ id: 1, nome: "anderson", idade: "25" },
  { id: 2, nome: "andressa", idade: "24" },
  { id: 3, nome: "sandra", idade: "50" }]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };


  return (
    <div>
      <ul>
        {
          list.map
            (
              (item, i) => (
                <li key={i}>
                  {item}
                </li>
              )
            )
        }
      </ul>
      <ul>
        {user.map((use) => (
          <li key={use.id}>{use.nome} - {use.idade}</li>
        ))}
      </ul>
      <button onClick={deleteRandom} >Delete Random</button>
    </div>
  )
}

export default ListRender