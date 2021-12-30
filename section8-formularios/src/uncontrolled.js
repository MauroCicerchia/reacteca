import React from "react";

function App() {
	const submit = (event) => {
		event.preventDefault();
		const formData = Object.fromEntries(Array.from(new FormData(event.target)));
		console.log(formData);
		fetch("/lala", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: { "Content-Type": "application/json", authorization: "Bearer e1n1dj1j2j3h1j1kj21n1kjnd" },
		});
	};

	return (
		<form onSubmit={submit}>
			<input type="text" name="campo" />
			<input type="text" name="campo2" />
			<button type="submit">Enviar</button>
		</form>
	);
}

export default App;
