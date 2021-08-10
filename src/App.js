//  import pop from "./Rectangle2.png";
import bow from "./password2.png";
import paga from "./password3.png";
import word from "./password1.png";
import bum from "./password.png";
import copy from "./generic.png";
import car from "./washingcar.png";
import color from "./Color1.png";
import open from "./door.png";
import "./App.css";

function App() {
  return (
    <div className="boom">
      <div className="juicy">
        <div>
          <img src={color} width="100" height="50" alt="colo" />
        </div>
        <div className="body">
          <h6> nosotros</h6>
          <h6>como funciona</h6>
          <h6> servicios</h6>
        </div>
      </div>
      <div className="car">
        <img src={car} width="1000" height="500" alt="carry" />
      </div>
      <div className="mastu">
        <h1>MASTURAH AUTOMOTRIZ A DOMICILIO</h1>
        <h6>
          Elije un servicio, paga en linea y espera a que llegue nuestro
          personal.
        </h6>
        <img src={copy} width="100" height="50" alt="cop" />
      </div>
      <div className="main">
        <div className="alert">
          <div>
            <img src={color} width="100" height="50" alt="colo" />
          </div>
          <div className="app">
            <h6> nosotros</h6>
            <h6>como funciona</h6>
            <h6> servicios</h6>
          </div>
        </div>
        <div className="alias">
          <div>
            <h3>Como Funciona Mr Wash</h3>
            <div>
              <h4>We sell cars of various types</h4>
              <h5>1. Camry</h5>
              <h5>2. Toyota</h5>
              <h5>3. Benz</h5>
              <h5>4. Lexus</h5>
            </div>
          </div>
          <div className="atn">
            <img src={open} width="800" height="400" alt="close" />
          </div>
        </div>
      </div>
      <div className="bar">
        <div>
          <img src={word} width="80" height="40" alt="passed" />
          <h6>1. Descarga Mr Wash para Android</h6>
        </div>
        <div>
          <img src={bum} width="80" height="40" alt="pased" />
          <h6>2. Elije tu servicio y paquete</h6>
        </div>
        <div>
          <img src={paga} width="80" height="40" alt="paus" />
          <h6>3. Paga en linea, facil y seguro</h6>
        </div>
        <div>
          <img src={bow} width="80" height="40" alt="pass" />
          <h6>4. Elije tu ubicación y listo.</h6>
        </div>
      </div>
      <button className="button">Sign Up</button>
    </div>
  );
}

export default App;
