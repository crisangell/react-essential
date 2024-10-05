import React, { useState } from "react";

import PageWrapper from "./PageWrapper";
import Pelicula from "./Pelicula";
import Peliculasjson from "./Peliculas.json";
import Paginacion from "./Paginacion";

import "./App.css";

function App() {
	const [paginaActual, setPaginaActual] = useState(1);

	let pelicula = Peliculasjson;

	return (
		<PageWrapper>
			{pelicula.map((pelicula) => (
				<Pelicula
					titulo={pelicula.titulo}
					calificacion={pelicula.calificacion}
					director={pelicula.director}
					actores={pelicula.actores}
					fecha={pelicula.fecha}
					duraccion={pelicula.duracion}
					img={pelicula.img}
					descripcion={pelicula.descripcion}
				/>
			))}
			<Paginacion
				pagina={1}
				total={4}
				onChange={(pagina) => {
					setPaginaActual(pagina);
				}}
			/>
		</PageWrapper>
	);
}

export default App;
