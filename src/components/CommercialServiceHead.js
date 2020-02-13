import React, { Component } from "react";
import "./CommercialServiceHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import CommercialServiceBackground from "./img/commercial_services_cmyk_half_50opacity.jpg";

export default class CommercialServiceHead extends Component {
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
						src={CommercialServiceBackground}
						alt="Commercial-Services"
						width="100%"
						className="commercial-background"
					/>
					<label className="commercial-head-text-top">COMMERCIAL</label>
					<label className="commercial-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
