import React from 'react';
import '../hojas-de-estilos/Recuadro.css'


function Recuadro({valor}){
  return(
    <div className={`recuadro${valor === 0 ? ' mar': ' buque'}`}>{valor}</div>
  );
}

export default Recuadro;