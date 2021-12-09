import React from "react";

// Función impura: devuelve un valor distinto en cada invocación
const funcionImpura = () => new Date().toLocaleString();

console.log(funcionImpura());

// Función pura: devuelve el mismo valor en cada invocación
const MiComponente = ({ miProp }) => {
	return <div>Nombre: {miProp}</div>;
};

const App = () => {
	return <MiComponente miProp="chanchito feliz -.-"></MiComponente>;
};

export default App;
