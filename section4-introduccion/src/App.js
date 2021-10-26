import React, { useState } from "react";
import Button from "./Button";
import Kuberneteca from "./Kuberneteca";
import "./Main.css";

const Li = ({ children, estado, edad }) => (
	<li className="clase-li">
		Hola, soy {children}, tengo {edad} años y estoy {estado}
	</li>
);

const chanchitos = ["chanchito feliz 🐷😀", "chanchito triste 🐷😭", "chanchito emocionado 🐷🤩🌚"];

function App() {
	const [showKuberneteca, setShowKuberneteca] = useState(false);
	return (
		<div>
			{showKuberneteca && <Kuberneteca />}
			<ul className="clase-ul">
				<Li estado="feliz como Roman" edad={22}>
					Seba
				</Li>
				<Li estado="harto de estudiar" edad={23}>
					Mauro
				</Li>

				{chanchitos.map((chanchito, index) => (
					<p className="clase-chanchito" key={index}>{chanchito}</p>
				))}

				<Button
					onClick={(e) => {
						console.log("ctrl pressed", e.ctrlKey);
						console.log("shift pressed", e.shiftKey);
						console.log("alt pressed", e.altKey);
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
