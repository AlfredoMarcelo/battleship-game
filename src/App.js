import "./App.css";
import Tabla from "./componentes/Tabla";
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
          <Tabla />
          <Tabla />
      </div>
    </div>
  );
}

export default App;
