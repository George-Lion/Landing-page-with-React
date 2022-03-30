import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="jumbotron mb-3 ">
			<div className="container bg-light p-4 p-md-5 ">
				<h1 className="display-4">Your safety is our priority.</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-warning btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
