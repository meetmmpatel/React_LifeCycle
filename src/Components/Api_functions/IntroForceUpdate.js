import React, { Component } from "react";

export default class IntroForceUpdate extends Component {
	constructor(props) {
		super(props);
		this.forceUpdateState = this.forceUpdateState.bind(this);
	}

	forceUpdateState() {
		this.forceUpdate();
	}
	render() {
		return (
			<div>
				<h4>About forceUpdate() function</h4>
				<p>
					We Can use this function when we want force an update directly from
					DOM /HTML object
				</p>
				<h4>Example of Random Number using forceUpdate</h4>
				<h4>Random Number: {Math.floor(Math.random() * (50 - 10 + 1) + 10)}</h4>
				<button onClick={this.forceUpdateState}> Force Update Number</button>
			</div>
		);
	}
}
