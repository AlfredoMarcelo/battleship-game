import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function TablaJugador({tabla}){

  const [tableroJugador, setTableroJugador] = useState(tabla)
  
  const obtenerDatoJugador = (index, index2) =>{
    let copiaTablaJugador = [...tableroJugador];
    copiaTablaJugador[index][index2] = 3;
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
