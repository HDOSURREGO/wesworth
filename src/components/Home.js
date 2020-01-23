import React from "react";
import WesworthConstructionBackground from "./img/WcgBackgroundFlippedPano.jpg";
import "./Home.css";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="centralBanner">
					<img
						className="wcgBackground"
						src={WesworthConstructionBackground}
						alt=" "
						width="100%"
					/>
					<div className="centeredTop">SUCCESS</div>
					<div className="centeredMiddle">THROUGH</div>
					<div className="centeredBottom">COMMITMENT</div>
				</div>
				<div>
					<h1>ABOUT US</h1>
					<p>
						Wesworth Electric, a state licensed electrical contractor in
						Florida, was founded in 1981 by Wesley Shreve with the basic
						objective of serving his community with great quality and excellent
						customer service. Over the years Wesworth Electric has evolved the
						array of services it offers, from residential to high voltage and
						complex industrial installations. Nowadays, Wesworth Electric is a
						division of Wesworth Construction Group spanning customers in two
						states, and still keeping the basic principles it was founded on:
						Great Quality and Excellent Customer Service.
					</p>
				</div>
				<div>
					<h1>WHAT WE DO</h1>
					<div>Logo Electric</div>
					<div>Logo Builders</div>
					<div>Logo Management</div>
				</div>
				<div>
					<div>20 YEARS OF EXPERIENCE</div>
					<div>642 CLIENTS</div>
					<div>972 PROJECTS</div>
				</div>
			</div>
		);
	}
}
