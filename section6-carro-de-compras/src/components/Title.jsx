import React, { Component } from "react";
import "../styles/Title.scss";

export default class Title extends Component {
	render() {
		return (
			<h1 className="title">
				{this.props.children}
			</h1>
		);
	}
}
