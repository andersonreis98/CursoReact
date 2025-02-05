import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagem from './assets/img1.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExeuteFunction from './components/ExeuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
import { UserDetalhes } from './components/UserDetalhes'

function App() {
  const [count, setCount] = useState(0)
  const name = "tonho";
  const cars = [
    { id: 1, brand: "ferrari", modelo: "ferrari", km: 0, color: "orange", newCar: true },
    { id: 2, brand: "chevrolet", modelo: "camaro", km: 50000, color: "yelow", newCar: false },
    { id: 3, brand: "ford", modelo: "fiesta", km: 10000, color: "blue", newCar: false }
  ];

  const pessoas = [
    { id: 1, nome: "anderson", idade: 25, bonito: true },
    { id: 2, nome: "guilherme", idade: 3, bonito: true },
    { id: 3, nome: "enzzon", idade: 18, bonito: false },
    { id: 4, nome: "andressa", idade: 24, bonito: false }
  ];


  function showMensagem() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div>

        <h1>Avançando em react</h1>
        <div>
          {/*imagem dentro da pasta public*/}
          <img src='/img1.jpg' about='paisagem' />
        </div>
        <div>
          {/*imagem dentro da pasta asset*/}
          <img src={imagem} about='paisagem' />

        </div>

      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} />

      {/* Destruturing */}
      <CarDetails brand="chevrolet" modelo="Spin" km="10000" color="blue" newCar={false} />

      {/* Reaproveitando codigo */}
      <CarDetails brand="Ford" modelo="Fusion" km="0" color="red" newCar={true} />
      <CarDetails brand="Vw" modelo="Fusca" km="80000" color="black" newCar={false} />
      {/* loop em array de objetos */}
      <h1>dentro do loop</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} modelo={car.modelo} km={car.km} color={car.color} newCar={car.newCar} />
      ))}

      {/* Fragments */}
      <Fragments propFragment="teste" />

      {/* containers children */}
      <Container>
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue="testando">
        <p>Esse é o conteúdo</p>
      </Container>

      {/* passar funções */}
      <ExeuteFunction myFunction={showMensagem} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />

      {/* teste */}
      {pessoas.map((pessoa) => (
        <UserDetalhes key={pessoa.id} id={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} bonito={pessoa.bonito} />
      ))}
    </>
  )
}

export default App
