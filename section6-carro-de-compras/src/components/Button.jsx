import React, { Component } from "react";
import "../styles/Button.scss";

export default class Button extends Component {
	render() {
		return (
			<button className="button" {...this.props} />
		);
	}
}
