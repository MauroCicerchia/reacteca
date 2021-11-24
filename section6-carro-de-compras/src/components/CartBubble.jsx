import React, { Component } from "react";
import "../styles/CartBubble.scss";

export default class CartBubble extends Component {
	getNumber() {
		const { value } = this.props;
		if (!value) return "";
		return value > 9 ? "9+" : value;
	}
	render() {
		return <span className="bubble">{this.getNumber()}</span>;
	}
}
