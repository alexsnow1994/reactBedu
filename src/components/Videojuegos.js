import React from 'react';
import Videojuego from './Videojuego';

const videojuego = [
    {
        title : "resident evil",
        console: "game cube"
    },
    {
      title : "sonic",
      console: "nes"
  },
  {
      title : "the last of us",
      athor: "ps3"
  },
   {
      title : "hollowknigth",
      athor: "PC"
  }
]
export default function Videojuegos() {
  return (<>
    {videojuego.map((e,i)=>{
        return(<Videojuego key ={i} informacion ={e}/>)
    })}
  </>);
}
