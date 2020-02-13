import React, { Component } from "react";
import "./CommercialServiceHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import IndustrialServiceBackground from "./img/industrial_services_composition_50opacity.jpg";

export default class IndustrialServiceHead extends Component {
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
						src={IndustrialServiceBackground}
						alt="Commercial-Services"
						width="100%"
						className="commercial-background"
					/>
					<label className="commercial-head-text-top">INDUSTRIAL</label>
					<label className="commercial-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
