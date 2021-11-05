import React, { Component } from "react";

// TODO:
// - Elevación de estado
// - Ciclo de vida

class Hola extends Component {
	render() {
		const { nombre } = this.props;
		return (
			<div>
				<h1>Hola {nombre}</h1>
			</div>
		);
	}
}

class Contador extends Component {
	state = {
		contadores: {
			equipo1: 0,
			equipo2: 0,
		},
	};

	sumar() {
		this.setState({ contadores: { ...this.state.contadores, equipo1: this.state.contadores.equipo1 + 1 } });
	}

	sumar2() {
		this.setState({ contadores: { ...this.state.contadores, equipo2: this.state.contadores.equipo2 + 1 } });
	}

	render() {
		return (
			<>
				<h1>Equipo 1: {this.state.contadores.equipo1}</h1>
				<button onClick={() => this.sumar()}>Sumar equipo 1</button>
				<h1>Equipo 2: {this.state.contadores.equipo2}</h1>
				<button onClick={() => this.sumar2()}>Sumar equipo 2</button>
			</>
		);
	}
}

class App extends Component {
	render() {
		return <Contador />;
	}
}

export default App;
