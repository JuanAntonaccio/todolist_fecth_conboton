import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);

	const cargarDato = event => {
		setTarea(event.target.value);
	};

	const enviarDatos = event => {
		event.preventDefault();
		setLista([...lista, tarea]);
		setTarea("");
	};

	const [eventos, setEventos] = useState([]);

	const eliminar = {
		    
			//SetLista(lista.filter(el => el !== index))
			//const filtredData = this.state.items.filter(item => item.id !== itemId);
		}
	}

	return (
		<div className="container mt-10">
			<h1>Todos</h1>
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
			<ul className="list-group">
				{lista.map((item, index) => (
					<li
						key={index}
						className="list-group-item"
						onMouseOver={() => setEventos(index)}>
						{item}
						{eventos == index ? <button onClick={eliminar}>X</button> : ""}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
