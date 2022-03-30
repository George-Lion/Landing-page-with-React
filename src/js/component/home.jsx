import React from "react";
import Navbar from "./navbar";
import Cards from "./card";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="row">
			<Navbar />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
