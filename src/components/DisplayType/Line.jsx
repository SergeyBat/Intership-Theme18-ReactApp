import React from "react";

const Line = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="33"
			height="29"
			fill="none"
			viewBox="0 0 33 29"
		>
			<path stroke={props.fill}strokeWidth="4" d="M0 2L33 2"></path>
			<path stroke={props.fill}strokeWidth="4" d="M0 15L33 15"></path>
			<path stroke={props.fill}strokeWidth="4" d="M0 27L33 27"></path>
		</svg>
	);
}

export default Line