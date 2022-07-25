import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function TablaJugador({nombre}){

  /* tableroJugador inicia con una matriz de valor, este es el patron para el tablero
      -0 son los recuadros sin actividad
      -1 son los buques
      -2 tiros fallados
      -3 tiros de daño a buque
  */

  const [tableroJugador, setTableroJugador] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  
   /*obtenerDatoJugador() recibe la posicion del recuadro seleccionado y la setea con 2(tiro fallado) si es 0(mar) 
  y con 3(tiro que hizo daño) si es 1(buque) */

  const obtenerDatoJugador = (index, index2) =>{
    let copiaTablaJugador = [...tableroJugador];
    if(copiaTablaJugador[index][index2] === 0){
      copiaTablaJugador[index][index2] = 2;
    } else if(copiaTablaJugador[index][index2] === 1){
      copiaTablaJugador[index][index2] = 3;
    }
    setTableroJugador(copiaTablaJugador);
    revisarArray();
  }

  /* revisarArray() es ejecutada en cada clic para verificar si quedan 1(barcos) en el arreglo
  , si no encuentra arrojara la ventana con el ganador*/

  function revisarArray(){
    let copiaTablaJugador = tableroJugador;
    let contadorDeBarco = 0;
    let nombreGanador = nombre;
    copiaTablaJugador.forEach((primerElemento)=>primerElemento.forEach((segundoElemento)=>segundoElemento === 1? contadorDeBarco += 1:''))    
    if(contadorDeBarco === 0){
      alert(`El ganador es ${nombreGanador}`);
      setTableroJugador([[]]);
    }
  }

  return(
      <div className='contenedor-recuadros'>
      {
        tableroJugador.length > 0 && tableroJugador.map((arreglo, index) => {
          return(
            <>
              {arreglo.map((valorArreglo, index2)=>{
                return <Recuadro key={index2} valor={valorArreglo} obtenerDatoJugador={()=>obtenerDatoJugador(index,index2)}/>
              })}
            </>
          );
        })
      }
      </div>
    
  );
}

export default TablaJugador;
