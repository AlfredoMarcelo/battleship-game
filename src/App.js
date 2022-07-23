import "./App.css";
import TablaJugador from "./componentes/TablaJugador";
import TablaCpu from "./componentes/TablaCpu"
import buqueLogo from "./imagenes/buque.png";

function App() {

  
  let tabla =
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


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
          <TablaJugador tabla={tabla} />
          <TablaCpu tabla={tabla}/>
      </div>
    </div>
  );
}

export default App;
