import React from "react";
import Background from "./background";
import MenuBar from "./menuBar";
import "../style/main.css";
import Bio from "./bio";
import Logo from "./logo";

const Home = () => {
	return (
		<Background>
			<Logo />
			<Bio />
			<MenuBar />
		</Background>
	);
};

export default Home;
