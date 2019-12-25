import React from "react";

// This is example of functions with props and value
export default function FuncWithProps() {
	const args = "Demo Value";
	return <Demo value={args}></Demo>;
}

function Demo(props) {
	return <h4>{props.value}</h4>;
}
