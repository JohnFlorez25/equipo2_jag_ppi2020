import React from "react";
import "../Style/styles.css";

class configuracion extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-sm-4 col-md-4 col-lg-4"></div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <h1 class="tituloConfiguracion">
            <strong>CONFIGURACIÓN</strong>
          </h1>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4"></div>
      </div>
    );
  }
}

export default configuracion;
