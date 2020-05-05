import React, { Component } from "react";
import "./ResidentialServicesHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import ResidentialServiceBackground from "./img/residential_services_2.jpg";

export default class ResidentialServicesHead extends Component {
	render() {
		return (
			<div>
				<div className="service-head">
					<img
						src={WesworthElectric}
						alt="Wesworth-Electric"
						width="10%"
						className="logoWE"
					/>
					<img
						src={ResidentialServiceBackground}
						alt="residential-Services"
						width="100%"
						height="100%"
						className="residential-background"
					/>
					<label className="residential-head-text-top">RESIDENTIAL</label>
					<label className="residential-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
