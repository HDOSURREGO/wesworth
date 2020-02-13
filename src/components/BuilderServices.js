import React from "react";
import "./BuilderServices.css";

export default class BuilderServices extends React.Component {
	render() {
		return (
			<div className="service-wrapper">
				<h2>BUILDER SERVICES</h2>
				<hr />
				<div class="commercial-services">
					<div class="column-left">
						<h3>Pre-construction</h3>
						<ul>
							<li>Estimating</li>
							<li>Value engineering</li>
							<li>Pre-construction analysis and job layout</li>
							<li>Rush services available</li>
						</ul>
						<h3>Construction Process</h3>
						<ul>
							<li>Electrical demolition</li>
							<li>Site setup with temporary service</li>
							<li>Project management</li>
							<li>Closing documents</li>
							<li>Licensed – insured – bonded</li>
							<li>Quickly staff ramp up levels to meet project timetables</li>
						</ul>
						<h3>Post – Construction</h3>
						<ul>
							<li>Warranty support</li>
							<li>Predictive maintenance</li>
							<li>Future installations or repairs</li>
						</ul>
					</div>
					<div class="column-right"></div>
					<div>
						<h3>Emergency Services</h3>
						<ul>
							<li>Temporary generators</li>
							<li>Temporary power and cabling</li>
							<li>Generator rentals</li>
							<li>Pre-storm equipment check</li>
							<li>Post-storm facilities + equipment check</li>
							<p>
								Count on Us 24/7. We will be there for you. Call Us – (954)
								5804070
							</p>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
