import React from 'react';
import '../hojas-de-estilos/Recuadro.css'


function Recuadro({valor, obtenerDatoCpu, obtenerDatoJugador}){

  return(
    <div 
    onClick={obtenerDatoCpu || obtenerDatoJugador} 
    className={`recuadro${valor === 0 ? ' mar ': ' buque'}`}>
     {valor}
    </div>
  );
}

export default Recuadro;