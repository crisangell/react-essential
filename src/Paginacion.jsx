export default function Paginacion(props) {
	const getPaginas = () => {
		const resultado = [];
		for (let i = 0; i < props.total; i++) {
			const pagina = i + 1;
			const estilo = props.pagina === pagina ? "active" : "";
			const actualizarPaginaActual = () => props.onChange(pagina);
			resultado.push(
				<a key={i} onClick={actualizarPaginaActual} className={estilo}>
					{pagina}
				</a>
			);
		}
		return resultado;
	};

	return (
		<div className="topbar-filter">
			<div className="pagination2">
				<span>
					pagina {props.pagina} de {props.total}:
				</span>
				{getPaginas()}
			</div>
		</div>
	);
}
