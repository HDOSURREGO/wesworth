import React from "react";
import WEBackground from "./img/wesworth-building-render-50opacity.jpg";
import "./Electric.css";
import ElectricSidebar from "./ElectricSidebar";
import PropertyManagementServices from "./PropertyManagementServices";
import CommercialServices from "./CommercialServices";
import IndustrialServices from "./IndustrialServices";
import ResidentialServices from "./ResidentialServices";
import BuilderServices from "./BuilderServices";
import ScheduleForm from "./ScheduleForm";

export default class Electric extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceToShow: "schedule-form"
		};
	}

	serviceFromSideBar = name => {
		this.setState({
			serviceToShow: name
		});
		console.log(
			"Este es el servicio que voy a mostrar",
			this.state.serviceToShow
		);
	};

	render() {
		return (
			<div>
				<div className="centralImageElectric">
					<img src={WEBackground} alt="Wesworth-Electric" width="100%" />
					<label>WESWORTH ELECTRIC</label>
				</div>
				<div className="whoWeAre">
					<label>WHO WE ARE</label>
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
				<div className="side-services">
					<div className="electric-sidebar">
						<ElectricSidebar serviceBox={this.serviceFromSideBar} />
					</div>
					{/* Page content */}
					<div class="service-content">
						{this.state.serviceToShow === "commercial" && (
							<CommercialServices />
						)}
						{this.state.serviceToShow === "industrial" && (
							<IndustrialServices />
						)}
						{this.state.serviceToShow === "residential" && (
							<ResidentialServices />
						)}
						{this.state.serviceToShow === "builder" && <BuilderServices />}
						{this.state.serviceToShow === "property-management" && (
							<PropertyManagementServices />
						)}
						{this.state.serviceToShow === "schedule-form" && <ScheduleForm />}
					</div>
				</div>
			</div>
		);
	}
}
