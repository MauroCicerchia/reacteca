import React, { useReducer, useState } from "react";

// const action = { type: String, payload: any }

const initialState = { contador: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, contador: state.contador + 1 };
		case "decrement":
			return { ...state, contador: state.contador - 1 };
		case "set":
			return { ...state, contador: action.payload };
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
    const [valor, setValor] = useState(0);

	return <div>
        Contador: {state.contador}
        <input type="number" value={valor} onChange={e => setValor(e.target.value)} />
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "set", payload: valor })}>Set</button>
    </div>;
};

export default App;
