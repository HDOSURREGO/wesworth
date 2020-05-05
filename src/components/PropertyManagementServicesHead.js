import React, { Component } from "react";
import "./PropertyManagementServicesHead.css";
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
						height="100%"
						className="property-management-background"
					/>
					<label className="property-management-head-text-top">
						PROPERTY MANAGEMENT
					</label>
					<label className="property-management-head-text-bottom">
						SERVICES
					</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
