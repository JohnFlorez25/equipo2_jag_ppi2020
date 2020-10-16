import React from "react";
import "../Style/styles.css";
import fondoAcercaDe from "../imagenes/fondoAcercaDe.jpg";
import flechaAtras from "../imagenes/flechaAtrasAcercaDe.jpg";

class acercaDe extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondo"
        style={{ backgroundImage: `url(${fondoAcercaDe})` }}
      >
        <div className="row text-center">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button class="flechaAtras" type="submit">
              <a href="menu">
                <img
                  class="rounded mx-auto d-block flechaHaciaAtras"
                  src={flechaAtras}
                  alt="x"
                />
              </a>
            </button>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <br></br>
            <br></br>
            <br></br>
            <h1 class="tituloAcercaDe">ACERCA DE</h1>
            <br></br>
            <br></br>
            <h2>
              Nuestro juego trata de como es la separación de los residuos
              ambientales a través de un juego, en el cual se le indicara al
              usuario como debe jugarse por medio de instrucciones.
            </h2>
          </div>

          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default acercaDe;
