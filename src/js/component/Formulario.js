import React, { useState } from "react";

const Formulario = () => {
	const [tarea, setTarea] = useState({});
	const [lista, setLista] = useState([]);
	const [eventos, setEventos] = useState([]);

	const getDatos = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juan_m", {
			method: "GET",
			//body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				setLista(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	const ActualizarPost = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/juan_m", {
			method: "PUT",
			body: JSON.stringify(lista),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//here is were your code should start after the fetch finishes
				console.log(data); //this will print on the console the exact object received from the server
				setLista(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	getDatos();
	const cargarDato = event => {
		let tar_aux = { label: event.target.value, done: false };
		setTarea(tar_aux);
	};

	const enviarDatos = event => {
		event.preventDefault();
		if (!tarea.trim()) {
			alert("Campo vacio no se guarda");
			return;
		}

		setLista([...lista, tarea]);
		ActualizarPost();
		setTarea("");
	};

	const eliminarTarea = () => {
		const arrayFiltrado = lista.filter((item, index) => index !== eventos);
		setLista(arrayFiltrado);
		ActualizarPost();
	};

	return (
		<div>
			<form className="row" onSubmit={enviarDatos}>
				<div className="col-md-3">
					<input
						placeholder="Ingrese Tarea"
						className="form-control"
						type="text"
						value={tarea.label}
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
						{item.label}
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
