import React from "react";

const Star = ({className, ...props}=props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="23"
			fill="none"
			viewBox="0 0 25 23"
			className={className}
		>
			<path
				fill="#F1E05A"
				fillRule="evenodd"
				d="M25 8.654l-8.75-1.108L12.5 0 8.75 7.546 0 8.654l6.429 5.642L4.768 22.5l7.732-4.033 7.732 4.033-1.66-8.204L25 8.654z"
				clipRule="evenodd"
			></path>
		</svg>
	);
}

export default Star;
