import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Products from "./components/Products";
import "./App.scss";

export default class App extends Component {
	state = {
		products: [
			{ name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
			{ name: "Arvejas", price: 2500, img: "/productos/arvejas.jpg" },
			{ name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
		],
		cart: [],
	};

	addToCart = (product) => {
		const { cart } = this.state;
		if (cart.find((item) => item.name === product.name)) {
			this.setState({
				cart: cart.map((item) => (item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)),
			});
		} else {
			this.setState({
				cart: [...cart, { ...product, quantity: 1 }],
			});
		}
	};

	render() {
		return (
			<div>
				<Navbar cart={this.state.cart} />
				<Layout>
					<Title>Tienda</Title>
					<Products products={this.state.products} addToCart={this.addToCart} />
				</Layout>
			</div>
		);
	}
}
