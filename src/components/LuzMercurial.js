import React,{useState} from 'react';

export default function LuzMercurial() {
    const [color, setColor] = useState("pink")
    return ( 
  <div style={{ backgroundColor: color}} className='luzMercurial'>

  </div>
  );
};
