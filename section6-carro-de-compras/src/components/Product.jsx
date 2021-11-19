import React, { Component } from "react";
import Button from "./Button";
import "./Product.scss";

export default class Product extends Component {
	render() {
		const { product, addToCart } = this.props;
		return (
			<div className="product-container">
				<img className="product-img" src={product.img} alt={product.name} />
				<h3 className="product-name">{product.name}</h3>
				<div className="price-and-button-container">
					<p className="product-price">${product.price}</p>
					<Button onClick={() => addToCart(product)}>Agregar al carro</Button>
				</div>
			</div>
		);
	}
}
