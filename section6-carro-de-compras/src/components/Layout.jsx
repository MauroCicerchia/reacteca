import React, { Component } from "react";
import "../styles/Layout.scss";

export default class Layout extends Component {
	render() {
		return <div className="layout-container">{this.props.children}</div>;
	}
}
