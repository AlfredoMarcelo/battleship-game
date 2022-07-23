import React from 'react';
import '../hojas-de-estilos/Recuadro.css'


function Recuadro({valor, obtenerDatoCpu, obtenerDatoJugador}){

  return(
    <div 
    onClick={obtenerDatoCpu || obtenerDatoJugador} 
    className={`recuadro${valor === 0 ? ' mar ': valor === 3? ' danio': valor === 1 ? ' buque' : ' fallo'}`}>
     {valor}
    </div>
  );
}

export default Recuadro;