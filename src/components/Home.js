import React from "react";
import { Link } from "react-router-dom";
import WesworthConstructionBackground from "./img/WcgBackgroundFlippedPano.jpg";
import WesworthElectric from "./img/WElectric_transparente.png";
import WesworthBuilders from "./img/WBuilders_transparente.png";
import WesworthManagement from "./img/WManagement_transparente.png";
import "./Home.css";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="centralBanner">
					<img
						className="wcgBackground"
						src={WesworthConstructionBackground}
						alt="WesworthConstructionBackground"
						width="100%"
					/>
					<div className="centeredTop">SUCCESS</div>
					<div className="centeredMiddle">THROUGH</div>
					<div className="centeredBottom">COMMITMENT</div>
				</div>
				<div className="whatWeDo">
					<div className="logo">
						<Link to={"/electric"} className="link">
							<img src={WesworthElectric} alt="WesworthElectric" width="50%" />
						</Link>
					</div>
					<div className="logo">
						<Link to={"/builders"} className="link">
							<img src={WesworthBuilders} alt="WesworthBuilders" width="50%" />
						</Link>
					</div>
					<div className="logo">
						<Link to={"/management"} className="link">
							<img
								src={WesworthManagement}
								alt="WesworthManagement"
								width="50%"
							/>
						</Link>
					</div>
				</div>
				<div className="aboutUS">
					<h1>ABOUT US</h1>
					<p>
						Wesworth Construction Group is the result of a group of experiences
						we have had in the past. A state licensed electrical contractor in
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

				<div className="experience">
					<div>39 YEARS OF EXPERIENCE</div>
					<div>642 CLIENTS</div>
					<div>972 PROJECTS</div>
				</div>
			</div>
		);
	}
}
