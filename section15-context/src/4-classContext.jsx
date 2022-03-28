import React, { Component, createContext } from "react";

const Context = createContext("default value");

const Provider = ({ children }) => {
	return <Context.Provider value={"mi valor"}>{children}</Context.Provider>;
};

class Componente extends Component {
	// static contextType = Context;
	render() {
		return <h1>{this.context}</h1>;
	}
}

Componente.contextType = Context;

export default class App extends Component {
	render() {
		return (
			<Provider>
				<Componente />
				<Context.Consumer>
					{(value) => <h1>{value}</h1>}
				</Context.Consumer>
			</Provider>
		);
	}
}
