import React from "react";
import Navbar from "./navbar";

const Home = () => {
	let navBackground = "bg-dark";
	let navNa = "navbar-dark";

	return (
		<div>
			<Navbar bgNav={navBackground} nav={navNa} />
		</div>
	);
};

export default Home;
