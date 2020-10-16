import React from "react";
import "../Style/styles.css";
import Iconousuario from "../imagenes/usuario.png";
import IconoperfilP from "../imagenes/perfilP.png";
import Iconoavatar from "../imagenes/avatar.png";
import Iconogmail from "../imagenes/gmail.png";
import Iconopuntos from "../imagenes/puntos.png";
import Iconoflechaatras from "../imagenes/flechahaciaatrasPerfil.png";
import fondoperfil from "../imagenes/fondoPerfil.jpg";

class perfil extends React.Component {
  render() {
    return (
      <div
        className="container-fluid fondoperfil"
        style={{ backgroundImage: `url(${fondoperfil})` }}
      >
        <div>
          <div className="container-fluid">
            <img class="iconPerfil" src={Iconousuario} alt="x" />
            <h1 class="tituloPerfil">
              <strong>Perfil </strong>
              <br></br>
            </h1>
            <div>
              <div>
                <h5>
                  <strong>
                    <center>ID 3456 </center>
                  </strong>
                  <br></br>
                </h5>
              </div>
              <img
                className="iconNombre"
                class="rounded mx-auto d-block iconavatar"
                src={Iconoavatar}
                alt="x"
              />
              <h5>
                <center> Nombre </center>
                <br></br>
              </h5>
            </div>
            <div>
              <img
                className="iconCorreo"
                class="rounded mx-auto d-block icongmail"
                src={Iconogmail}
                alt="x"
              />

              <h5>
                <center> Gmail </center>
              </h5>
            </div>
            <br></br>
            <div>
              <img
                className="iconperfilP"
                class="rounded mx-auto d-block iconperfilP"
                src={IconoperfilP}
                alt="x"
              />

              <h5>
                <center> Correo </center>
              </h5>
            </div>
            <br></br>
            <div>
              <img
                className="iconPuntos"
                class="rounded mx-auto d-block iconpuntos"
                src={Iconopuntos}
                alt="x"
              />

              <h5>
                <center> Puntos obtenidos </center>
              </h5>
            </div>
            <div>
              <button className="flechaAtras" type="submit">
                <a href="barraNavegacion">
                  <img
                    class="rounded mx-auto d-block iconfelchaatras"
                    src={Iconoflechaatras}
                    alt="x"
                  />
                </a>
              </button>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default perfil;
