import React from "react";

function App() {
	const submit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(Array.from(new FormData(e.target)));
    console.log(formData);
  };

	return (
		<form onSubmit={submit}>
			<div>
				<span>lala</span>
				<input type="text" name="campo" />
			</div>
			<input type="text" name="campo2" />
			<button type="submit">Enviar</button>
		</form>
	);
}

export default App;
