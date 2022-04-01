import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";

const Home = () => {
	let button1 = "More info";
	let button2 = "Find out more";
	let button3 = "Packs";
	let button4 = "Security";
	let image1 = (
		<img
			src="https://www.myamberlife.com/wp-content/uploads/2019/04/cloud-storage-anim-2.gif"
			className="card-img-top"
			alt="security"
		/>
	);

	let image2 = (
		<img
			src="https://64.media.tumblr.com/5cb6cec9004ddebc058944577a021dfd/tumblr_p9jcnlEnFq1v1fssvo1_1280.gifv"
			className="card-img-top"
			alt="security man"
		/>
	);

	let image3 = (
		<img
			src="https://discovertemplate.com/wp-content/uploads/2020/07/DT_G23_Security-and-Protection.gif"
			className="card-img-top"
			alt="programs"
		/>
	);

	let image4 = (
		<img
			src="https://about.fb.com/wp-content/uploads/2020/10/NRP_Day-180-FTC-Animation_4-icons_GIF_960x540.gif?fit=960%2C540"
			className="card-img-top"
			alt="programs"
		/>
	);

	return (
		<div className="row">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row justify-content-center">
					<Cards btn1={button1} img1={image1} />
					<Cards btn1={button2} img2={image2} />
					<Cards btn1={button3} img3={image3} />
					<Cards btn1={button4} img4={image4} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
