import { createContext, useContext, useState } from "react";

const ContextDefault = createContext({
	valor: false,
	toggle: () => {},
});

const DefaultProvider = ({ children }) => {
	const [valor, setValor] = useState(false);
	const value = {
		valor,
		toggle: () => setValor(!valor),
	};
	return <ContextDefault.Provider value={value}>{children}</ContextDefault.Provider>;
};

function Componente() {
	const { valor, toggle } = useContext(ContextDefault);
	return (
		<div>
			<label>{valor.toString()}</label>
			<button onClick={toggle}>Cambiar</button>
		</div>
	);
}

function App() {
	return (
		<DefaultProvider>
			<Componente />
		</DefaultProvider>
	);
}

export default App;
