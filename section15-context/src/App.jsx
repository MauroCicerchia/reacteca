import React, { Component, createContext, useContext } from "react";

const Context1 = createContext("default value 1");
const Context2 = createContext("default value 2");

const Provider = ({ children }) => {
	return (
		<Context1.Provider value="value 1">
			<Context2.Provider value="value 2">{children}</Context2.Provider>
		</Context1.Provider>
	);
};

class Componente extends Component {
	render() {
		return (
			<Context1.Consumer>
				{value1 => (
					<Context2.Consumer>
						{value2 => (
							<div>
								<h1>{value1}</h1>
								<h1>{value2}</h1>
							</div>
						)}
					</Context2.Consumer>
				)}
			</Context1.Consumer>
		);
	}
}

function ComponentePiola() {
	const value1 = useContext(Context1);
	const value2 = useContext(Context2);
	return (
		<div>
			<h1>{value1}</h1>
			<h1>{value2}</h1>
		</div>
	);
}

export default class App extends Component {
	render() {
		return (
			<Provider>
				<Componente />
				<ComponentePiola />
			</Provider>
		);
	}
}
