import { createContext, useContext, useState, memo, useCallback } from "react";

const ContextDefault = createContext();

const ContadorProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => setCount(count + 1));
	const decrement = useCallback(() => setCount(count - 1));
	return <ContextDefault.Provider value={{ count, increment, decrement }}>{children}</ContextDefault.Provider>;
};

const Increment = memo(() => {
	console.log("Increment");
	const { increment } = useContext(ContextDefault);
	return <button onClick={increment}>Increment</button>;
});

const Decrement = memo(() => {
	console.log("Decrement");
	const { decrement } = useContext(ContextDefault);
	return <button onClick={decrement}>Decrement</button>;
});

const Label = () => {
	console.log("Label");
	const { count } = useContext(ContextDefault);
	return <h1>{count}</h1>;
};

function App() {
	return (
		<ContadorProvider>
			<Label />
			<Decrement />
			<Increment />
		</ContadorProvider>
	);
}

export default App;
