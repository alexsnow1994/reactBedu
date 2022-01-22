
import React, {useState} from 'react';
import './../styles/Luz.css'


export default function Luz() {
    //1 ESTADO LOCAL
    const[color, setColor]= useState("pink")
    return (
  <div style={{backgroundColor: color}} className='luz'>
    
  </div>
  )
}
