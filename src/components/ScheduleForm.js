import React, { Component } from "react";
import "./ScheduleForm.css";

export default class ScheduleForm extends Component {
	render() {
		return (
			<div>
				<div className="serviceCall">
					<h1>SCHEDULE A SERVICE CALL</h1>
					<div>
						<form className="contact-form">
							<div className="form-group">
								<h3 htmlFor="name">Company Name</h3>
								<input type="text" className="form-input" />
							</div>
							<div className="form-group">
								<h3 htmlFor="name">Person to Contact</h3>
								<input type="text" className="form-input" />
								<h3 htmlFor="name">Company Contact Phone</h3>
								<input type="text" className="form-input" />
							</div>
							<div className="form-group">
								<h3 htmlFor="name">Street Address</h3>
								<input type="text" className="street-address" />
								<h3 htmlFor="name">City</h3>
								<input type="text" className="city-address" />
								<h3 htmlFor="name">State</h3>
								<input type="text" className="state-address" value="Florida" />
								<h3 htmlFor="name">Zip Code</h3>
								<input type="text" className="zipcode-address" />
							</div>
							<div className="form-group">
								<h3 htmlFor="exampleInputEmail1">Email address</h3>
								<input
									type="email"
									className="form-input"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<h3 htmlFor="message">Job/Issue Description</h3>
								<textarea className="form-input" rows="5"></textarea>
							</div>
						</form>
						<button type="submit" className="btn">
							Submit
						</button>
						<button type="submit" className="btn">
							Clear Form
						</button>
					</div>
				</div>
			</div>
		);
	}
}
