import React from "react";
import "./CommercialServices.css";

export default class CommercialServices extends React.Component {
	render() {
		return (
			<div className="service-wrapper">
				<h2>COMMERCIAL SERVICES</h2>
				<hr />
				<div class="commercial-services">
					<div class="column-left">
						<h3>Predictive Maintenance</h3>
						<ul>
							<li>Perform an all-points audit of your electrical systems.</li>
							<li>Infrared thermal scanning.</li>
							<li>Offline electrical testing.</li>
							<li>Power/current analysis.</li>
							<li>
								Surge suppressors installation and check (3 phase + Single
								phase).
							</li>
							<li>Exit and emergency lighting installation and check.</li>
						</ul>
						<h3>Benefits</h3>
						<ul>
							<li>Minimize downtime</li>
							<li>Up to date status of electrical systems</li>
							<li>Reduce hazards.</li>
							<li>Improve operator safety</li>
						</ul>
						<h3>Emergency Services</h3>
						<p>
							Electrical failures are disruptive to your business and it is
							always good to have someone to call
						</p>
						<p>We will be there for you 24/7</p>
						<p>Call us - (954) 580 4070</p>
					</div>
					<div class="column-right">
						<h3>Industry Specific Services</h3>
						<ul>
							<li>Underground circuit tracing</li>
							<li>Infrared thermal scanning</li>
							<li>Fixtures replacement + Repair</li>
							<li>New light pole installations</li>
							<li>LED fixtures retrofitting</li>
							<li>Surge suppression devices</li>
							<li>Generator installations + Replacements</li>
							<li>Switchgear replacement + Testing</li>
							<li>
								Automatic Transfer Switch (ATS) installations + Replacements
							</li>
							<li>Solar panel design and Installations</li>
							<li>Solar Carports</li>
							<li>Electric Vehicle (EV) Chargers Installations</li>
							<li>Access control design and installation</li>
							<li>Closed Circuit TV Cameras (CCTV) design and installation</li>
							<li>
								Lighting studies to maximize light output and minimize power
								consumption
							</li>
							<li>Commercial Sign Repair</li>
							<li>Low voltage (CAT5 – CAT6) installations</li>
							<li>Troubleshooting</li>
							<li>Breakers</li>
							<li>Panels and subpanels work</li>
							<li>Bucket truck and auger truck services</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
