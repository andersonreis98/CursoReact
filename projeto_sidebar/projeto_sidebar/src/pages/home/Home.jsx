import React from 'react';
import './Home.css'; // Importa o arquivo de estilos CSS
import Logo1 from './logo1.png'
import Medica from './medica.png'
import balao3 from './balao3.png'

const Home = () => {
  return (
    <div className="container">
      <img src={Logo1} alt="Background" className="background-image" />
      <div className="header-layout">
        <button className="action-button">
          <img src={Medica} alt="Action Button" className="action-image" />
        </button>
        {/* <div className="info-container">
          <img id='image' src={balao3} alt="Info Image" className="info-image" />
          <label id='texto' className="welcome-text">Olá CENFT, <br /> Seja Bem Vindo!</label>
        </div> */}
        <div className="image-container">
          <img src={balao3} alt="Background" className="background-image2" />
          <div className="text-overlay">Olá CENFT, <br /> Seja Bem Vindo!</div>
        </div>
      </div>
      <div className="content-layout">
        <h2 className="title-text">Consultas Agendadas:</h2>
        <ul className="agenda-list">
          <li className="agenda-item">Consulta 1</li>
          <li className="agenda-item">Consulta 2</li>
          {/* Adicione mais itens conforme necessário */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
