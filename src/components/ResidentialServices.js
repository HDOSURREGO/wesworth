import React from "react";
import "./Services.css";

export default class ResidentialServices extends React.Component {
	render() {
		return (
			<div className="service-wrapper">
				<h2>RESIDENTIAL SERVICES</h2>
				<hr />
				<div class="residential-services">
					<div class="column-left">
						<h3>Predictive Maintenance</h3>
						<ul>
							<li>Electrical fire prevention.</li>
							<li>
								Perform an all-points audit of your electrical systems before
								and after hurricane season.
							</li>
							<li>Infrared thermal scanning</li>
							<li>Next day service guaranteed</li>
							<h3>Emergency Services</h3>
							<p>Electrical Failures can take us out of our comfort zone</p>
							<p>
								and it is always good to have someone to call when this happen.
							</p>
							<li>Power outages</li>
							<li>Equipment failure</li> <li>Temporary generators</li>
							<li>Generator rental</li>
							<li>Temporary power and cabling </li>
							<li>Pre storm check of systems</li>
							<p>We will be there for you 24/7. Call Us – (954) 5804070</p>
						</ul>
					</div>
					<div class="column-right">
						<h3>Homeowners Services</h3>
						<ul>
							<li>Electrical upgrades</li> <li>Electrical repairs</li>
							<li>Electrical panel change</li> <li>Home surge protection</li>
							<li>Lighting installation</li> <li>Outlet installation</li>
							<li>Smoke detectors installations and troubleshooting</li>
							<li>Solar panel design and installations</li>
							<li>Electrical vehicles (EV) chargers installations</li>
							<li>Boat lifts electrical installations</li>
							<li>Pool electrical systems</li>
							<li>Pool heater installation</li>
							<li>Sub panel installation</li>
							<li>Generator sales and installation</li>
							<li>Landscape lighting</li>
							<li>Palm tree / holiday lighting</li>
							<li>New/Upgrade electrical services</li>
							<li>Insurance companies electrical requests</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
