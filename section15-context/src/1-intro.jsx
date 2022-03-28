import { createContext, useContext } from "react";

const ContextDefault = createContext("default value");
const Context2 = createContext("default value 2");

const DefaultProvider = ({ children }) => {
	return <ContextDefault.Provider value={"mi valor"}>{children}</ContextDefault.Provider>;
};

function Contenido() {
	const ctx = useContext(ContextDefault);
	return (
		<div>
			<h1>{ctx}</h1>
		</div>
	);
}

function Contenido2() {
  const ctx = useContext(Context2);
  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
}

function App() {
	return (
		<DefaultProvider>
			<Contenido />
      <Contenido2 />
		</DefaultProvider>
	);
}

export default App;
