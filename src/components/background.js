import React from "react";
import "../style/main.css";

const Background = (props) => {
	return <div className="container background">{props.children}</div>;
};

export default Background;
