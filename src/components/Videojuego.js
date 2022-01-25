import React from 'react';

export default function Videojuego(props) {
    console.log(props);
  return (
      <>
      <p><b>Titulo:</b>{props.informacion.title}</p>
      <p><b>consola:</b>{props.informacion.console}</p>
      </>
  );
}
