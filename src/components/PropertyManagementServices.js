import React from "react";
import "./PropertyManagementServices.css";

export default class PropertyManagmentServices extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}
	render() {
		return (
			<div className="service-wrapper">
				<h2>PROPERTY MANAGEMENT SERVICES</h2>
				<hr />
				<div class="commercial-services">
					<div class="column-left">
						<h3>Predictive Maintenance</h3>
						<ul>
							<li>Perform an all-points audit of your electrical systems</li>
							<li>Infrared thermal scanning</li>
							<li>Offline electrical testing</li> <li>Current analysis</li>
							<li>Emergency and exit lights testing</li>
							<li>Surge suppression devices</li>
							<h3>Emergency Services</h3>
							<p>
								Electrical Failures are disruptive to your business and it is
								always good to have someone to call. We will be there for you
								24/7. Call Us – (954) 5804070
							</p>
						</ul>

						{/* <h3>SCHEDULE A SERVICE CALL</h3> */}
					</div>
					<div class="column-right">
						<ul>
							<h3>Specialty Industry Services</h3>
							<li>
								Underground circuit tracing repair and troubleshooting
							</li>{" "}
							<li>Infrared thermal scanning</li>
							<li>Fixtures replacement + repair</li>
							<li>New light pole installations</li>
							<li>Led fixtures retrofitting</li>
							<li>Surge suppression devices</li>
							<li>Generator installations + replacements</li>
							<li>Solar panel design and installations</li>
							<li>Solar carports</li>
							<li>Electrical Vehicles (EV) chargers installations</li>
							<li>
								Support to homeowners through our residential services program
							</li>
							<li>Electrical problems troubleshooting and repair</li>
							<li>Access control design and installation</li>
							<li>Closed circuit TV cameras (CCTV) design and installation</li>
							<li>
								Lighting studies to maximize light output and minimize power
								consumption
							</li>
							<li>Electric sub-metering</li>
							<li>Low voltage (CAT5 – CAT6) installation</li>
							<li>Sign repairs / retrofit</li>
							<li>Store/Office remodels and build out</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
