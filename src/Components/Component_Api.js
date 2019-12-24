import React, { Component } from "react";
import IntroSetState from "./Api_functions/IntroSetState";
import IntroForceUpdate from "./Api_functions/IntroForceUpdate";
import IntroDomNode from "./Api_functions/IntroDomNode";

export default class Component_Api extends Component {
	render() {
		return (
			<div>
				<h1>This is Class Component API functions type</h1>
				<p>React component API it top level api in React JS. it helps us to</p>
				<ul>
					<li>Create HTML element </li>
					<li>Transform/update element</li>
					<li>Reuse the element</li>
				</ul>
				<h3>Following are the three function in Component API</h3>
				<ol>
					<li>
						setState()
						<IntroSetState></IntroSetState>
					</li>
					<br></br>
					<li>
						forceUpdate()
						<IntroForceUpdate></IntroForceUpdate>
					</li>
					<br></br>
					<li>
						findDOMNode()
						<IntroDomNode></IntroDomNode>
					</li>
				</ol>
			</div>
		);
	}
}
