import React, { useRef } from "react";

function App() {
  const inputRef = useRef();
  const fileRef = useRef();
  
	const submit = (e) => {
    console.log(inputRef.current.value);
    console.log(fileRef.current.files);
    const formData = new FormData();

    formData.append("campo", inputRef.current.value);
    formData.append("archivo", fileRef.current.files[0]);
    fetch("/lala", { method: "POST", body: formData });
  };

	return (
		<div>
      <div>
        <span>lala</span>
        <input type="text" name="campo" ref={inputRef} />
        <input type="file" name="archivo" ref={fileRef} />
      </div>
      <input type="submit" value="Enviar" onClick={submit} />
    </div>
	);
}

export default App;
