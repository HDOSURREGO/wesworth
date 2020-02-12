import React, { Component } from "react";
import "./Services.css";

export default class ScheduleForm extends Component {
	render() {
		return (
			<div>
				<div className="serviceCall">
					<h1>SCHEDULE A SERVICE CALL</h1>
					<div>
						<form className="contact-form">
							<div className="form-group">
								<label htmlFor="name">Company Name</label>
								<input type="text" className="form-input" />
							</div>
							<div className="form-group">
								<label htmlFor="name">Person to Contact</label>
								<input type="text" className="form-input" />
								<label htmlFor="name">Company Contact Phone</label>
								<input type="text" className="form-input" />
							</div>
							<div className="form-group">
								<label htmlFor="name">Street Address</label>
								<input type="text" className="form-input" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-input"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Job/Issue Description</label>
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
