import React, { useState } from "react";

import Peliculasjson from "./Peliculas.json";

import PageWrapper from "./PageWrapper";
import Pelicula from "./Pelicula";
import Paginacion from "./Paginacion";

import "./App.css";

const PAGINA_INICIAL = 1;
const TOTAL_POR_PAGINA = 4;

function App() {
	const [paginaActual, setPaginaActual] = useState(PAGINA_INICIAL);

	const getPeliculasPorPagina = (paginaActual) =>
		Peliculasjson.slice(
			(paginaActual - 1) * TOTAL_POR_PAGINA,
			paginaActual * TOTAL_POR_PAGINA
		);

	return (
		<PageWrapper>
			{getPeliculasPorPagina(paginaActual).map((pelicula, index) => (
				<Pelicula
					key={index}
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
				pagina={paginaActual}
				total={TOTAL_POR_PAGINA}
				onChange={(pagina) => setPaginaActual(pagina)}
			/>
		</PageWrapper>
	);
}

export default App;
