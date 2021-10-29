import React, { useState } from "react";
import Button from "./Button";
import Kuberneteca from "./Kuberneteca";
import "./Main.css";

const Pibe = ({ children, estado, edad }) => (
	<li className="clase-li">
		Hola, soy {children}, tengo {edad} años y estoy {estado}
	</li>
);

const chanchitos = ["chanchito feliz 🐷😀", "chanchito triste 🐷😭", "chanchito emocionado 🐷🤩🌚"];

// Como regla general, no usar estilos inline, usar className

function App() {
	const [showKuberneteca, setShowKuberneteca] = useState(false);
	return (
		<div>
			{showKuberneteca && <Kuberneteca />}

			<h1 className="red-text">Hola, soy un componente</h1>

			<ul className="clase-ul">
				<Pibe estado="feliz como Roman" edad={22}>
					Seba
				</Pibe>
				<Pibe estado="harto de estudiar" edad={23}>
					Mauro
				</Pibe>

				{chanchitos.map((chanchito) => (
					<p className="clase-chanchito" key={chanchito}>{chanchito}</p>
				))}

				<Button
					onClick={(e) => {
						// console.log(e);
						// console.log("ctrl pressed", e.ctrlKey);
						// console.log("shift pressed", e.shiftKey);
						// console.log("alt pressed", e.altKey);
						setShowKuberneteca(!showKuberneteca);
					}}
				>
					Kuberneteca
				</Button>
			</ul>
		</div>
	);
}

export default App;
