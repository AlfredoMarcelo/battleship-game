import "./App.css";
import "./hojas-de-estilos/Nombre.css"
import TablaJugador from "./componentes/TablaJugador";
import TablaCpu from "./componentes/TablaCpu"
import buqueLogo from "./imagenes/buque.png";
import Nombre from "./componentes/Nombre";
import { useState } from "react";

function App() {

  /* inicio comienza con valor true para mostrar el form, cuando se aprete el boton se apretado inicio cambiara a 
      false y mostara los tableros
  */
 
  const [inicio, setInicio] = useState(true);

  /*nombreJugador contiene una cadena vacia, este almacenara el nombre del jugador que es enviado por el input
    nombre, luego lo enviara como props al componente <Nombre/>*/

  const [nombreJugador, setNombreJugador] = useState("");

  /*capturarNombre() cumple con la funcion de setear el nombreJugador por el valor que se captura en el input name */
  const capturarNombre = (nombre) => {
    setNombreJugador(nombre);
  }

  return (
    <div className="contenedor-principal">
      <div className="contenedor-titulo">
        <h1>Batalla Naval</h1>
        <img 
          name="nombre"
          src={buqueLogo} 
          className="buque-logo" 
          alt="Logo de buque" />
      </div>
      {inicio ?
        <div className="contenedor-formulario">
          <div className="formulario">
            <p>Ingresa tu nombre</p>
            <input
              type='text'
              onChange={(evento) => capturarNombre(evento.target.value)}
            /> 
            <button
            onClick={()=>setInicio(false)}
            >
              Comenzar
            </button>
          </div>
        </div>
      :
      <>
        <div className="contenedor-principal-nombres">
          <div className="contenedor-nombre">
            <Nombre nombre="Cpu"/>
          </div>
          <div className="contenedor-nombre">
            <Nombre nombre={nombreJugador}/>
          </div>
        </div>
        <div className="contenedor-tablas">
          <TablaCpu
            nombre={nombreJugador}
          />
          <TablaJugador
            nombre="CPU"
          />
        </div>
        </>
      }
    </div>
  );
}

export default App;
