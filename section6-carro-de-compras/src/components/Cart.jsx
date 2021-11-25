import React, { Component } from "react";
import CartBubble from "./CartBubble";
import CartDetail from "./CartDetail";
import "../styles/Cart.scss";

export default class Cart extends Component {
	render() {
		const { cart, cartIsOpen, toggleCart } = this.props;
		const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

		return (
			<div>
				{quantity > 0 && (
					<span className="cart-bubble">
						<CartBubble value={quantity} />
					</span>
				)}
				<button className="cart-button" onClick={toggleCart}>
					Carro
				</button>
				{cartIsOpen && <CartDetail {...this.props} />}
			</div>
		);
	}
}
