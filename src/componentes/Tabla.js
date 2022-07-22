import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function Tabla(){

  const tabla =
    [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [10, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

  const [tablaJugador, setTablaJugador] = useState(tabla)
  const [tablaCpu, setTablaCpu] = useState(tabla)

  console.log(tablaCpu[0]);

  return(
    <>
      <div className='contenedor-recuadros'>
      {
        tablaJugador.map((arreglo, index) => {
          return(
            <>
              {arreglo.map((valorArreglo)=>{
                return <Recuadro valor={valorArreglo}/>
              })}
            </>
          );
        })
      }
      

      </div>
      <div className='contenedor-recuadros'>
      { 
        tablaCpu.map((arreglo, index) => {
          return(
            <>
              {arreglo.map((valorArreglo)=>{
                return <Recuadro valor={valorArreglo}/>
              })}
            </>
          );
        })
        
      }
      </div>
    </>
  );
}

export default Tabla;
