import React, { useState } from "react";

const Formulario = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	const cargarDato = event => {
		setTarea(event.target.value);
	};

	const enviarDatos = event => {
		event.preventDefault();
		if (!tarea.trim()) {
			alert("Campo vacio no se guarda");
			return;
		}
		setLista([...lista, tarea]);
		setTarea("");
	};

	const [eventos, setEventos] = useState([]);

	const eliminarTarea = () => {
		const arrayFiltrado = lista.filter((item, index) => index !== eventos);
		setLista(arrayFiltrado);
	};

	return (
		<div>
			<form className="row" onSubmit={enviarDatos}>
				<div className="col-md-3">
					<input
						placeholder="Ingrese Tarea"
						className="form-control"
						type="text"
						value={tarea}
						onChange={cargarDato}></input>
				</div>

				<div className="col-md-3">
					<button className="btn btn-primary" type="submit">
						Enviar
					</button>
				</div>
			</form>
			<ul className="list-group list-group-numbered col-md-3">
				{lista.map((item, index) => (
					<li
						key={index}
						className="list-group-item list-group-item-primary"
						onMouseOver={() => setEventos(index)}>
						{item}
						{eventos === index ? (
							<button
								onClick={() => eliminarTarea()}
								className="btn btn-sm btn-danger float-end mx-6">
								x
							</button>
						) : (
							""
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Formulario;
