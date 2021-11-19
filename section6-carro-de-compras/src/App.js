import React, { Component } from "react";
import Products from "./components/Products";
import "./App.scss";

export default class App extends Component {
	state = {
		products: [
			{ name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
			{ name: "Arvejas", price: 2500, img: "/productos/arvejas.jpg" },
			{ name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
		],
	};
	render() {
		return (
			<div className="container">
				<Products products={this.state.products} addToCart={() => {}} />
			</div>
		);
	}
}
