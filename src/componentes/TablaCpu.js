import React, { useState } from 'react';
import '../hojas-de-estilos/Tabla.css'
import Recuadro from './Recuadro';

function TablaCpu({tabla}){

  const [tableroCpu, setTableroCpu] = useState(tabla)
  
  const obtenerDatoCpu= (index, index2) =>{
    let copiaTablaCpu = [...tableroCpu];
    copiaTablaCpu[index][index2] = 3;
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
