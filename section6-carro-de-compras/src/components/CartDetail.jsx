import React, { Component } from "react";
import "../styles/CartDetail.scss";

export default class CartDetail extends Component {
	render() {
		const { cart } = this.props;
		return (
			<div className="cart-detail">
				<ul className="cart-detail__list">
					{cart.map((item) => {
						return (
							<li key={item.name} className="cart-detail__li">
								<div className="cart-detail__item">
									<img className="cart-detail__item-image" src={item.img} alt={item.name} width="50" height="32" />
									<div className="cart-detail__item-info">
										<div className="cart-detail__item-name">{item.name}</div>
										<div className="cart-detail__item-price">{item.quantity}</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
