import "./App.css";
import TablaJugador from "./componentes/TablaJugador";
import TablaCpu from "./componentes/TablaCpu"
import buqueLogo from "./imagenes/buque.png";

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
    </div>
  );
}

export default App;
