import React, { Component, useState } from "react";

/* reglas de los hooks:
 * 1. Siempre tienen que estar en la raiz del componente (no dentro de loops, ifs ni nada)
 * 2. Sólo se llaman en componentes de reacts o en custom hooks
 * 3. Cuando creamos un custom hook se debe llamar useXXX
 */

// class App extends Component {
// 	state = {
// 		contador: 0,
// 	};

// 	incrementar = () => {
// 		this.setState({
// 			contador: this.state.contador + 1,
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				contador: {this.state.contador}
// 				<button onClick={this.incrementar}>Incrementar</button>
// 			</div>
// 		);
// 	}
// }

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial);

	const incrementar = () => {
		setContador(contador + 1);
	};

    return [contador, incrementar];
}

const App = () => {
    const [contador, incrementar] = useContador(0);

	return (
		<div>
			contador: {contador}
			<button onClick={incrementar}>Incrementar</button>
		</div>
	);
};

export default App;
