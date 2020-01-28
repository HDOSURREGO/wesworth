import React from "react";
import { Link } from "react-router-dom";
import "./ElectricSidebar.css";
// import CommercialServices from "./CommercialServices";
// import IndustrialServices from "./IndustrialServices";
// import BuilderServices from "./BuilderServices";

export default class ElectricSidebar extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						COMMERCIAL SERVICES
						{/* <CommercialServices /> */}
					</li>
					<li>
						INDUSTRIAL SERVICES
						{/* <IndustrialServices /> */}
					</li>
					<li>
						BUILDER SERVICES
						{/* <BuilderServices /> */}
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
