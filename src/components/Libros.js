import React from 'react';
import Libro from './Libro';

export default function Libros() {
    const libro = [
        {
            title : "the mist",
            athor: "stephen king"
        },
        {
          title : "the exsorcist",
          athor: "william"
      },
      {
          title : "the ocean at the end of the lane",
          athor: "neil gaiman"
      },
       {
          title : "juventud en extasis",
          athor: "cuatemoc sanchez"
      }
    ]
    return (
      <>
        {/* <Libro informacion={libro[0]}/>
        <Libro informacion={libro[1]}/>
        <Libro informacion={libro[2]}/>    */}
        {
            libro.map((e,i)=>{
                return(
                    <Libro key={i} informacion ={e}/>
                )
            })
        }
      
        </>
  );
}
