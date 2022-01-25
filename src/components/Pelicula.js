import React from 'react';

export default function Pelicula(props) {
    console.log(props);
  return (<div>
      <>
      <p><b>Titulo:</b>{props.informacion.titulo}</p>
      </>
  </div>);
}
