import React, { Component } from "react";

export default class ClassWithOutState extends Component {
	alertName = () => {
		alert("This is Class With out State");
	};
	render() {
		return (
			<div>
				<h5> This Class with out state </h5>
				<button onClick={this.alertName}>Press hear for alert</button>
			</div>
		);
	}
}
