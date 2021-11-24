import React, { Component } from "react";
import Product from "./Product";
import "../styles/Products.scss";

export default class Products extends Component {
	render() {
		const { products } = this.props;
		return (
			<div className="products-container">
				{products.map((product) => (
					<Product {...this.props} key={product.name} product={product} />
				))}
			</div>
		);
	}
}
