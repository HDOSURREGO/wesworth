import React, { Component } from "react";
import "./ScheduleForm.css";

export default class ScheduleForm extends Component {
	render() {
		return (
			<div>
				<div className="serviceCall">
					{/* <h1>SCHEDULE A SERVICE CALL</h1> */}
					<div>
						<form className="contact-form">
							<div className="form-section">
								<h3 htmlFor="name">Company Name</h3>
								<input type="text" className="input-field" />
							</div>
							<div className="form-section">
								<h3 htmlFor="name">Person to Contact</h3>
								<input type="text" className="input-field" />
								<h3 htmlFor="name">Company Contact Phone</h3>
								<input type="text" className="input-field" />
							</div>
							<div className="form-section">
								<h3 htmlFor="name">Street Address</h3>
								<input type="text" className="input-field" />
								<h3 htmlFor="name">City</h3>
								<input type="text" className="input-field" />
								<h3 htmlFor="name">State</h3>
								<input type="text" className="input-field" value="Florida" />
								<h3 htmlFor="name">Zip Code</h3>
								<input type="text" className="input-field" />
							</div>
							<div className="form-section">
								<h3 htmlFor="exampleInputEmail1">Email address</h3>
								<input
									type="email"
									className="input-field"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-section">
								<h3 htmlFor="message">Job/Issue Description</h3>
								<textarea
									name="job-description"
									className="input-field"
									rows="5"
								></textarea>
							</div>
							<button type="submit" className="btn">
								Submit
							</button>
							<button type="submit" className="btn">
								Clear Form
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
