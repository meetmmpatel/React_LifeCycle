/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import Component_Api from "./Components/Component_Api";
import ComponentLifeCycle from "./Components/ComponentLifeCycle";
import LifeCycle from "./LifeCycle/LifeCycle";

function App() {
	return (
		<div className="App">
			<Component_Api></Component_Api>
			<br></br>
			<ComponentLifeCycle></ComponentLifeCycle>
			<br></br>
			<LifeCycle></LifeCycle>
		</div>
	);
}

export default App;
