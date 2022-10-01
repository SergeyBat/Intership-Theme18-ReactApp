import React from "react";

function Tile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="31"
      fill={props.fill}
      viewBox="0 0 32 31"
    >
      <path
        d="M0 0h14v14H0V0zM18 0h14v14H18V0zM0 17h14v14H0V17zM18 17h14v14H18V17z"
      ></path>
    </svg>
  );
}

export default Tile;
