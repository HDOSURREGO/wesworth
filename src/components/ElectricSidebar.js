import React from "react";
// import { Link } from "react-router-dom";
import "./ElectricSidebar.css";
// import CommercialServices from "./CommercialServices";
// import IndustrialServices from "./IndustrialServices";
// import BuilderServices from "./BuilderServices";

export default class ElectricSidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<li>COMMERCIAL SERVICES +</li>
					<li>INDUSTRIAL SERVICES +</li>
					<li>BUILDER SERVICES +</li>
					<li>PROPERTY MANAGEMENT SERVICES +</li>
					<li>RESIDENCIAL SERVICES +</li>
				</ul>
			</div>
		);
	}
}
