import "./App.css";

const Li = ({ children, estado, edad }) => (
	<li>
		Hola, soy {children}, tengo {edad} años y estoy {estado}
	</li>
);

function App() {
	return (
		<ul>
			<Li estado="feliz como Roman" edad={22}>
				Seba
			</Li>
			<Li estado="harto de estudiar" edad={23}>
				Mauro
			</Li>
		</ul>
	);
}

export default App;
