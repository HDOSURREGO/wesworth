import React from "react";
import WesworthElectric from "./img/WElectric_transparente.png";
import "./Electric.css";

export default class Electric extends React.Component {
	render() {
		return (
			<div>
				<div className="electrical-head">
					<img src={WesworthElectric} alt="Wesworth-Electric" width="25%" />
					<p>
						Wesworth Electric was founded in 1981 by Mr. Wesley Shreve with the
						basic objective of serving his community with a great quality and a
						great customer service. Over the years Wesworth Electric has evolved
						the array of services we offer, from small residential services to
						high voltage and complex industrial installations. Nowadays,
						Wesworth Electric is a division of Wesworth Construction Group
						spanning customers in two states, and still keeping the basic
						principles we were founded on: Great Quality and Excellent Customer
						Service.
					</p>
				</div>
				<div class="sidebar">
					<a class="active" href="#home">
						Home
					</a>
					<a href="#news">News</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</div>
				{/* Page content */}
				<div class="content">..</div>
			</div>
		);
	}
}
