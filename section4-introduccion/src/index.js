import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const x = React.createElement("p", null, "Hola Mauro!");

// const X = () => <p>Hola Seba!</p>;

// const Li = ({ children, estado, edad }) => (
// 	<li>
// 		Hola, soy {children}, tengo {edad} años y estoy {estado}
// 	</li>
// );

// const X2 = () => (
// 	<ul>
// 		<Li estado="feliz" edad={22}>
// 			Seba
// 		</Li>
// 		<Li estado="harto de estudiar" edad={23}>
// 			Mauro
// 		</Li>
// 	</ul>
// );

// ReactDOM.render(
// 	<div>
// 		<X2 />
// 	</div>,
// 	document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
