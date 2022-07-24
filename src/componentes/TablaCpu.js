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
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);
  
  const obtenerDatoCpu= (index, index2) =>{
    let copiaTablaCpu = [...tableroCpu];
    if(copiaTablaCpu[index][index2] === 0){
      copiaTablaCpu[index][index2] = 2;
    } else if(copiaTablaCpu[index][index2] === 1){
      copiaTablaCpu[index][index2] = 3;
    }
    setTableroCpu(copiaTablaCpu);
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
