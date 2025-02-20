export default function Pelicula(props) {
	return (
		<div className="movie-item-style-2">
			<img src={props.img} alt="" />
			<div className="mv-item-infor">
				<h6>
					<a href="moviesingle.html">{props.titulo}</a>
				</h6>
				<p className="rate">
					<i className="ion-android-star"></i>
					<span>{props.calificacion}</span> /10
				</p>

				<p className="describe">{props.descripcion}</p>
				<p className="run-time">
					duraccion: {props.duraccion}. <span>MMPA: PG-13 </span>.
					<span>fecha: {props.fecha}</span>
				</p>
				<p>
					Director: <a href="#">{props.director}</a>
				</p>
				<p>
					actores: <a href="#">{props.actores}</a>
					<a href="#">Chris Evans,</a>
					<a href="#"> {props.actores}</a>
				</p>
			</div>
		</div>
	);
}
