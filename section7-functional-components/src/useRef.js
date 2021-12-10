import React, { useRef } from "react";

const App = () => {
	const inputRef = useRef();
	const divRef = useRef();

	const focus = () => {
		inputRef.current.value = "";
        divRef.current.style.backgroundColor = "#E8F3F3";
	};

	return (
		<div ref={divRef}>
			<input ref={inputRef} id="texto" />
			<button onClick={focus}>Focus</button>
		</div>
	);
};

export default App;
