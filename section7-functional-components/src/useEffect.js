import React, { useState, useEffect } from "react";
import { Component } from "react";

const useContador = (inicial) => {
	const [contador, setContador] = useState(inicial);

	const incrementar = () => {
		setContador(contador + 1);
	};

	return [contador, incrementar];
};

// class Interval extends Component {
//     interval = "";

//     componentDidMount() {
//         this.interval = setInterval(() => console.log(this.props.contador), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return <p>Intervalo</p>
//     }
// }

const Interval = ({ contador }) => {
    useEffect(() => {
        const interval = setInterval(() => console.log(contador), 1000);

        return () => clearInterval(interval);
    }, [contador]);

    return <p>Intervalo</p>
}

const App = () => {
	const [contador, incrementar] = useContador(0);

	useEffect(() => {
		document.title = `Contador ${contador}`;
	}, [contador]);

	return (
		<div>
			contador: {contador}
			<button onClick={incrementar}>Incrementar</button>
            <Interval contador={contador} />
		</div>
	);
};

export default App;
