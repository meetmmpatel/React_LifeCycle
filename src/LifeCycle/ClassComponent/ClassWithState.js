import React, { Component } from "react";

export default class ClassWithState extends Component {
	state = {
		name: " "
	};

	alertName = () => {
		alert(this.state.name);
	};

	handleNameInput = setName => {
		this.setState({ name: setName.target.value });
	};

	render() {
		return (
			<div>
				<h5> This is class with state without bind function</h5>
				<input
					type="text"
					onChange={this.handleNameInput}
					value={this.state.name}
					placeholder="Print Name"
				></input>
				<button onClick={this.alertName}> Print Name</button>
			</div>
		);
	}
}
