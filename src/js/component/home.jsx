import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="row">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
