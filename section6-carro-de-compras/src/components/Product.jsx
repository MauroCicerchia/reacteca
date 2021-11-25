import React, { Component } from "react";
import Button from "./Button";
import "../styles/Product.scss";

export default class Product extends Component {
	render() {
		const { product, addToCart } = this.props;
		return (
			<div className="product-container">
				<div className="product-img-container">
					<div className="product-img-wrapper">
						<img className="product-img" src={product.img} alt={product.name} />
					</div>
				</div>
				<div className="product-info">
					<h3 className="product-name">{product.name}</h3>
					<div className="price-and-button-container">
						<p className="product-price">
							<span className="valorant-points">
								<img src="/img/Valorant_Points.png" alt="valorant points" width="25" height="25" />
							</span>
							{product.price}
						</p>
						<Button onClick={() => addToCart(product)}>Agregar al carro</Button>
					</div>
				</div>
			</div>
		);
	}
}
