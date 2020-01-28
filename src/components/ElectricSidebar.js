import React from "react";
import { Link } from "react-router-dom";
import "./ElectricSidebar.css";
import CommercialServices from "./CommercialServices";
import IndustrialServices from "./IndustrialServices";
import BuilderServices from "./BuilderServices";

export default class ElectricSidebar extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={"/electrical/commercial-services"} className="link">
							{CommercialServices}COMMERCIAL SERVICES
						</Link>
					</li>
					<li>
						<Link to={"/electrical/industrial-services"} className="link">
							{IndustrialServices}INDUSTRIAL SERVICES
						</Link>
					</li>
					<li>
						<Link to={"/electric/builder-services"} className="link">
							{BuilderServices}BUILDER SERVICES
						</Link>
					</li>
					{/* <li>
						<Link
							to={"/electric/property-management-services"}
							className="link"
						>
							{PropertyManagementServices}PROPERTY MANAGEMENT SERVICES
						</Link>
					</li>
					<li>
						<Link to={"/electric/residential-services"} className="link">
							{ResidentialServices}RESIDENCIAL SERVICES
						</Link>
					</li> */}
				</ul>
			</div>
		);
	}
}
