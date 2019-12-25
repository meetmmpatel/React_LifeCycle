import React from "react";

// This is example of function without props/args

function IntroToFuncComp() {
	return <Demo></Demo>;
}

function Demo() {
	const printName = "Test User One";
	return <h5>{printName}</h5>;
}

export default IntroToFuncComp;
