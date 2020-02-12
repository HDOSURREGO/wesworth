import React from "react";
import WesworthElectric from "./img/WElectric_transparente.png";
import "./Electric.css";
import ElectricSidebar from "./ElectricSidebar";
import PropertyManagementServices from "./PropertyManagementServices";
import CommercialServices from "./CommercialServices";
import IndustrialServices from "./IndustrialServices";
import ResidentialServices from "./ResidentialServices";
import BuilderServices from "./BuilderServices";

export default class Electric extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceToShow: "commercial"
		};
	}

	serviceFromSideBar = name => {
		this.setState({
			serviceToShow: name
		});
	};

	render() {
		return (
			<div className="electric-wrapper">
				<div className="electric-head">
					<img src={WesworthElectric} alt="Wesworth-Electric" width="25%" />
					<p>
						Wesworth Electric was founded in 1981 by Mr. Wesley Shreve with the
						basic objective of serving his community with a great quality and a
						great customer service. Over the years Wesworth Electric has evolved
						the array of services we offer, from small residential services to
						high voltage and complex industrial installations. Nowadays,
						Wesworth Electric is a division of Wesworth Construction Group
						spanning customers in two states, and still keeping the basic
						principles we were founded on: Great Quality and Excellent Customer
						Service.
					</p>
				</div>
				<div className="electric-sidebar">
					<ElectricSidebar serviceBox={this.serviceFromSideBar} />
				</div>
				{/* Page content */}
				<div class="service-content">
					{this.state.serviceToShow === "commercial" && <CommercialServices />}
					{this.state.serviceToShow === "industrial" && <IndustrialServices />}
					{this.state.serviceToShow === "residential" && (
						<ResidentialServices />
					)}
					{this.state.serviceToShow === "builder" && <BuilderServices />}
					{this.state.serviceToShow === "property-management" && (
						<PropertyManagementServices />
					)}
				</div>
			</div>
		);
	}
}
