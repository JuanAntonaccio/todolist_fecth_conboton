import React, { useState } from "react";
import Formulario from "./Formulario";

const Home = () => {
	const [visible, setVisible] = useState(true);
	return (
		<div className="container mt-10">
			<h1>Todos</h1>
			<button onClick={() => setVisible(!visible)}>
				{visible ? "Ocultar" : "Mostrar"}
			</button>
			{visible ? <Formulario /> : ""}
		</div>
	);
};

export default Home;
