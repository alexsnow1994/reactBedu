import React, {useState} from 'react';
import Pelicula from './Pelicula';

export default function Peliculas() {

	const [listado, setListado] = useState([
		{
			titulo: "LOTR I"
		},
		{
			titulo: "LOTR II"
		},
		{
			titulo: "LOTR III"
		},
		{
			titulo: "Harry Potter I"
		}
	]
	)

	const [nuevaPelicula, setNuevaPelicula] = useState("")


	const handleChange = (event) => {

		setNuevaPelicula(event.target.value)

	}

	const handleClick = (event) => {

		event.preventDefault()

		console.log("Me has dado click")

		setListado([
			...listado,
			{
				titulo: nuevaPelicula
			}
		])
        setNuevaPelicula("")
	}

  return (
  		<>
		  <h1>Lista de películas</h1>

		  {
			  listado.map((e, i) => {
				return (
					<Pelicula key={i} informacion={e} />
				)	  
			  })
		  }

		  <form onSubmit={(evt) => { handleClick(evt) }}>
		  		<label>Título</label>
		  		<input 
				  	onChange={(evt) => { handleChange(evt) }}
					name="titulo"
					value={nuevaPelicula}  
				/>

				<button type="submit">
					Crear nueva película
				</button>

		  </form>

  		</>
  );
}