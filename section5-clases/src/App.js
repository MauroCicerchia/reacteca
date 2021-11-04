import { Component } from "react";

class Button extends Component {
	state = {};

	constructor(props) {
		super(props);
		console.log("constructor", props);
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate", prevProps, prevState);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		console.log("Renderizando button");
		return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
	}
}

class Input extends Component {
	render() {
		return <input value={this.props.value} onChange={this.props.onChange} />;
	}
}

class App extends Component {
	state = {
		valor: 3,
		nombre: "",
		apellido: "",
	};

	updateValues = (prop, value) => {
		this.setState({ [prop]: value });
	};

	render() {
		console.log(this.state);
		return (
      <>
        {/* <div>
        <p>Hola Mundo!</p>
        {this.state.valor === 3 && <Button chanchito="feliz" />}
        <button onClick={() => this.setState({ valor: 1 })}>Enviar en App</button>
        </div> */}
			<p>
				Nombre completo: {this.state.nombre} {this.state.apellido}
			</p>
      <Input value={this.state.nombre} onChange={(e) => this.updateValues("nombre", e.target.value)} />
      <Input value={this.state.apellido} onChange={(e) => this.updateValues("apellido", e.target.value)} />
      </>
		);
	}
}

export default App;
