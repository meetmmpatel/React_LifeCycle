import React from "react";
import IntroToFuncComp from "./FunctionComponent/IntroToFuncComp";
import FuncWithProps from "./FunctionComponent/FuncWithProps";
import ClassWithOutState from "./ClassComponent/ClassWithOutState";
import ClassWithState from "./ClassComponent/ClassWithState";
import FunctionWithState from "./FunctionComponent/FunctionWithState";
import ClassMultiState from "./ClassComponent/ClassMultiState";

export default function LifeCycle() {
	return (
		<div>
			<section>
				<h1>About Class Component</h1>
				<ClassWithOutState></ClassWithOutState>
				<ClassWithState></ClassWithState>
				<ClassMultiState></ClassMultiState>
			</section>

			<section>
				<h1>About Functional Component</h1>
				<IntroToFuncComp></IntroToFuncComp>
				<FuncWithProps></FuncWithProps>
				<FunctionWithState></FunctionWithState>
			</section>
		</div>
	);
}
