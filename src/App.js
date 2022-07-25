import "./App.css";
import "./hojas-de-estilos/Nombre.css"
import TablaJugador from "./componentes/TablaJugador";
import TablaCpu from "./componentes/TablaCpu"
import buqueLogo from "./imagenes/buque.png";
import Nombre from "./componentes/Nombre";

function App() {
  return (
    <div className="contenedor-principal">
      <div className="contenedor-titulo">
        <h1>Batalla Naval</h1>
        <img 
          src={buqueLogo} 
          className="buque-logo" 
          alt="Logo de buque" />
      </div>
      <div className="contenedor-tablas">
          <TablaCpu />
          <TablaJugador/>
      </div>
      <div className="contenedor-principal-nombres">
        <div className="contenedor-nombre">
          <Nombre nombre="Cpu"/>
        </div>
        <div className="contenedor-nombre">
          <Nombre nombre="Saul"/>
        </div>
      </div>
    </div>
  );
}

export default App;
