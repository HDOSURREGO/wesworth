import React, { Component } from "react";
import "./CommercialServiceHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import PropertyManagementServiceBackground from "./img/property_management_services_cmyk_50opacity.jpg";

export default class PropertyManagementServicesHead extends Component {
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
						src={PropertyManagementServiceBackground}
						alt="Commercial-Services"
						width="100%"
						className="commercial-background"
					/>
					<label className="commercial-head-text-top">
						PROPERTY MANAGEMENT
					</label>
					<label className="commercial-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
