import React from "react";
import "./ElectricSidebar.css";

export default class ElectricSidebar extends React.Component {
	render() {
		return (
			<div>
				<div className="sidebar">
					<ul>
						<li onClick={() => this.props.serviceBox("commercial")}>
							COMMERCIAL SERVICES
							<i class="fas fa-plus"></i>
						</li>
						<li onClick={() => this.props.serviceBox("industrial")}>
							INDUSTRIAL SERVICES
							<i id="industrial" class="fas fa-plus"></i>
						</li>
						<li onClick={() => this.props.serviceBox("builder")}>
							BUILDER SERVICES
							<i class="fas fa-plus"></i>
						</li>
						<li onClick={() => this.props.serviceBox("property-management")}>
							PROPERTY MANAGEMENT SERVICES
							<i class="fas fa-plus"></i>
						</li>
						<li onClick={() => this.props.serviceBox("residential")}>
							RESIDENTIAL SERVICES
							<i class="fas fa-plus"></i>
						</li>
						{/* <li onClick={() => this.props.serviceBox("schedule-form")}>
							SCHEDULE A SERVICE CALL
							<i class="fas fa-plus"></i>
						</li> */}
					</ul>
					<div>
						<button
							onClick={() => this.props.serviceBox("schedule-form")}
							type="submit"
							className="btn"
						>
							SCHEDULE A SERVICE CALL
						</button>
					</div>
				</div>
			</div>
		);
	}
}
