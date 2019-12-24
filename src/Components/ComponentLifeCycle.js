import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
	render() {
		return (
			<div>
				<h1>This is Component Life Cycle with each phase</h1>
				<ol>
					<li>
						Initial Phase(birth of component
						<ul>
							<li>
								<strong>getDefaultProps();</strong>
								<p>
									It will used default value of this.props and create component
									in React JS{" "}
								</p>
							</li>
							<li>
								<strong>getInitialState();</strong>
								<p>
									This will use default value of this.state and create and pass
									into class component
								</p>
							</li>
						</ul>
					</li>
					<li>
						Mounting Phase
						<ul>
							<li>constructor()</li>
							<li>static getDerivedStateFromProps()</li>
							<li>render()</li>
							<li>componentDidMount()
								<br></br>
								<strong>Note: Please do not user componentWillMount() function</strong>
							</li>
						</ul>
					</li>
					<li>Updating Phase</li>
					<li>Unmounting Phase</li>
				</ol>
			</div>
		);
	}
}
