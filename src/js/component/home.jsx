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
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
