import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Products from "./components/Products";
import "./App.scss";

export default class App extends Component {
	state = {
		products: [
			{ name: "Sentinels of Light Vandal", price: 2175, img: "/img/Sentinels_Of_Light_Vandal.png" },
			{ name: "Glitchpop Vandal", price: 2175, img: "/img/Glitchpop_Vandal.png" },
			{ name: "Reaver Vandal", price: 1775, img: "/img/Reaver_Vandal.png" },
			{ name: "Prime Vandal", price: 1775, img: "/img/Prime_Vandal.png" },
			{ name: "Origin Vandal", price: 1775, img: "/img/Origin_Vandal.png" },
		],
		cart: [],
		cartIsOpen: false,
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

	toggleCart = () => {
		if (this.state.cart.length === 0) {
			return;
		}
		this.setState({
			cartIsOpen: !this.state.cartIsOpen,
		});
	};

	render() {
		return (
			<div>
				<Navbar cart={this.state.cart} cartIsOpen={this.state.cartIsOpen} toggleCart={this.toggleCart} />
				<Layout>
					<Title>Tienda</Title>
					<Products products={this.state.products} addToCart={this.addToCart} />
				</Layout>
			</div>
		);
	}
}
