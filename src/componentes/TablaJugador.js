import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function TablaJugador(){

  const [tableroJugador, setTableroJugador] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  
  const obtenerDatoJugador = (index, index2) =>{
    let copiaTablaJugador = [...tableroJugador];
    if(copiaTablaJugador[index][index2] === 0){
      copiaTablaJugador[index][index2] = 2;
    } else if(copiaTablaJugador[index][index2] === 1){
      copiaTablaJugador[index][index2] = 3;
    }
    setTableroJugador(copiaTablaJugador);
  }

  return(
    
      <div className='contenedor-recuadros'>
      {
        tableroJugador.length > 0 && tableroJugador.map((arreglo, index) => {
          return(
            <>
              {arreglo.map((valorArreglo, index2)=>{
                return <Recuadro valor={valorArreglo} obtenerDatoJugador={()=>obtenerDatoJugador(index,index2)}/>
              })}
            </>
          );
        })
      }
      </div>
    
  );
}

export default TablaJugador;
