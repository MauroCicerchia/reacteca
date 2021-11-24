import React, { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import "../styles/Navbar.scss";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<Logo />
				<Cart {...this.props} />
			</nav>
		);
	}
}
