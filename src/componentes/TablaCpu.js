import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function TablaCpu(){

  const [tableroCpu, setTableroCpu] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  
  /*obtenerDatoCpu recibe la posicion del recuadro seleccionado y la setea con 2(tiro fallado) si es 0(mar) 
  y con 3(tiro que hizo daño) si es 1(buque) */

  const obtenerDatoCpu= (index, index2) =>{
    let copiaTablaCpu = [...tableroCpu];
    if(copiaTablaCpu[index][index2] === 0){
      copiaTablaCpu[index][index2] = 2;
    } else if(copiaTablaCpu[index][index2] === 1){
      copiaTablaCpu[index][index2] = 3;
    }
    setTableroCpu(copiaTablaCpu);
    revisarArray(copiaTablaCpu);
  }

  /* Esta función es ejecutada en cada clic para verificar si quedan 1(barcos) en el arreglo
  , si no encuentra arrojara la ventana con el ganador*/

  function revisarArray(){
    let copiaTablaCpu = tableroCpu;
    let contadorDeBarco = 0;
    copiaTablaCpu.forEach((primerElemento)=>primerElemento.forEach((segundoElemento)=>segundoElemento === 1? contadorDeBarco += 1:''))    
    if(contadorDeBarco === 0){
      alert("El ganor fue el Jugador");
      setTableroCpu([[]]);
    }
  }

  return(
    
      <div className='contenedor-recuadros'>
      { 
        tableroCpu.length > 0 && tableroCpu.map((arreglo, index) => {
          return(
            <>
              {arreglo.map((valorArreglo, index2)=>{
                return <Recuadro  valor={valorArreglo} obtenerDatoCpu={()=>obtenerDatoCpu(index, index2)}/>
              })}
            </>
          );
        })
        
      }
      </div>
    
  );
}

export default TablaCpu;
