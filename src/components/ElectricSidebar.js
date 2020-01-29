import React from "react";
import "./ElectricSidebar.css";

export default class ElectricSidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<li>
						COMMERCIAL SERVICES
						<i class="fas fa-plus"></i>
					</li>
					<li>
						INDUSTRIAL SERVICES
						<i class="fas fa-plus"></i>
					</li>
					<li>
						BUILDER SERVICES
						<i class="fas fa-plus"></i>
					</li>
					<li>
						PROPERTY MANAGEMENT SERVICES
						<i class="fas fa-plus"></i>
					</li>
					<li>
						RESIDENCIAL SERVICES
						<i class="fas fa-plus"></i>
					</li>
				</ul>
			</div>
		);
	}
}
