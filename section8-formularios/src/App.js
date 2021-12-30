import React, { useState } from "react";

function App() {
	const [form, setForm] = useState({
		name: "",
		description: "",
		race: "",
		faction: "",
		eula: false,
	});

	const handleChange = ({ target: { name, type, value, checked } = {} }) => {
		setForm((state) => ({
			...state,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

  console.log(form);

	return (
		<div>
			<input type="text" name="name" value={form.name} onChange={handleChange} />
			<textarea name="description" value={form.description} onChange={handleChange} />
			<select name="race" value={form.race} onChange={handleChange}>
				<option value="">-- Select Race --</option>
				<option value="human">Human</option>
				<option value="elf">Elf</option>
				<option value="dwarf">Dwarf</option>
			</select>
			<input type="radio" name="faction" value="nilfgaard" onChange={handleChange} checked={form.faction === "nilfgaard"} /> Nilfgaard
			<input type="radio" name="faction" value="mages" onChange={handleChange} checked={form.faction === "mages"} /> Mages
			<input type="radio" name="faction" value="witchers" onChange={handleChange} checked={form.faction === "witchers"} /> Witchers
			<input type="checkbox" name="eula" checked={form.eula} onChange={handleChange} />
		</div>
	);
}

export default App;
