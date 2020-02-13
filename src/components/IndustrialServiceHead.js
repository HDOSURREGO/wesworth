import React, { Component } from "react";
import "./IndustrialServiceHead.css";
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
						alt="industrial-services"
						width="100%"
						className="industrial-background"
					/>
					<label className="industrial-head-text-top">INDUSTRIAL</label>
					<label className="industrial-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
