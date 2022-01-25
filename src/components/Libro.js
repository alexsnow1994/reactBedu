import React from 'react';

export default function Libro(props) {
 console.log(props);
    return (
      <>
      <p><b>Titulo:</b>{props.informacion.title}</p>
      <p><b>Author:</b>{props.informacion.athor}</p>
      </>
  );
}
