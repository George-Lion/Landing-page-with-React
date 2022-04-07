import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
	return (
		<div className="col-sm-2 m-2">
			<div className="card">
				{props.img1}
				{props.img2}
				{props.img3}
				{props.img4}

				<div className="card-body">
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>

					<div className="d-flex justify-content-center">
						<button type="button" className=" btn btn-warning ">
							{props.btn1}
							{props.btn2}
							{props.btn3}
							{props.btn4}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	btn1: PropTypes.string,
	img1: PropTypes.object,
};

export default Cards;
