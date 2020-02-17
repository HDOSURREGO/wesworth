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
				<div className="aboutUS">
					<h1>ABOUT US</h1>
					<p>
						Wesworth Construction Group is comprised of three companies:
						Wesworth Electric, Wesworth Builders and Wesworth Management. We are
						proud to be trusted advisors and partners to our clients and
						investors as we perform development, construction, and property
						management. We offer our services based always on our core values:
						honesty, integrity, passion, and commitment, to guarantee success in
						all endeavours we got in. Welcome to our site.
					</p>
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

				<div className="experience">
					<div>39 YEARS OF EXPERIENCE</div>
					<div>642 CLIENTS</div>
					<div>972 PROJECTS</div>
				</div>
			</div>
		);
	}
}
