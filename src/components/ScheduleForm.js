import React, { Component } from "react";
import "./ScheduleForm.css";
import axios from "axios";

export default class ScheduleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companyName: "",
			personToContact: "",
			contactPhone: "",
			streetAddress: "",
			city: "",
			state: "Florida",
			zipCode: "",
			emailAddress: "",
			message: ""
		};
		this.resetForm = this.resetForm.bind(this);
	}

	genericSync(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log("This is the state after reading the form", this.state);
	}

	handleSubmitScheduleForm(event) {
		event.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:3000/send",
			data: this.state
		}).then(response => {
			if (response.data.status === "success") {
				alert("Message Sent.");
				this.resetForm();
			} else if (response.data.status === "fail") {
				alert("Message failed to send.");
			}
		});
		// axios
		// 	.post(
		// 		// route we are hitting in the backend
		// 		`${process.env.REACT_APP_API_URL}/timeline/create`,
		// 		// the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
		// 		this.state,
		// 		// secure sending
		// 		{ withCredentials: true }
		// 	)
		// 	.then(responseFromServer => {
		// 		console.log(
		// 			"Esto fue lo que volvio del servidor:",
		// 			responseFromServer.data,
		// 			this.state
		// 		);

		// 		let timelineArray = this.state.timelines ? this.state.timelines : [];
		// 		timelineArray.push(responseFromServer.data);

		// 		this.setState({ timelines: timelineArray });
		// 	})
		// 	.catch(err => console.log("Err in timeline creation: ", err));
	}

	resetForm() {
		this.setState({
			companyName: " ",
			personToContact: " ",
			contactPhone: "",
			streetAddress: "",
			city: "",
			state: "Florida",
			zipCode: " ",
			emailAddress: " ",
			message: " "
		});
	}

	render() {
		return (
			<div>
				<div className="serviceCall">
					<div>
						<form
							className="contact-form"
							onSubmit={event => this.handleSubmitScheduleForm(event)}
							method="POST"
						>
							<div className="form-section">
								<h3 htmlFor="company-name">Company Name</h3>
								<input
									type="text"
									className="input-field"
									name="companyName"
									value={this.state.companyName}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-section">
								<h3 htmlFor="person-to-contact">Person to Contact</h3>
								<input
									type="text"
									className="input-field"
									name="personToContact"
									value={this.state.personToContact}
									onChange={event => this.genericSync(event)}
								/>
								<h3 htmlFor="contact-phone">Company Contact Phone</h3>
								<input
									type="text"
									className="input-field"
									name="contactPhone"
									value={this.state.contactPhone}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-section">
								<h3 htmlFor="street-address">Street Address</h3>
								<input
									type="text"
									className="input-field"
									name="streetAddress"
									value={this.state.streetAddress}
									onChange={event => this.genericSync(event)}
								/>
								<h3 htmlFor="city">City</h3>
								<input
									type="text"
									className="input-field"
									name="city"
									value={this.state.city}
									onChange={event => this.genericSync(event)}
								/>
								<h3 htmlFor="state">State</h3>
								<input
									type="text"
									className="input-field"
									name="state"
									value="Florida"
								/>
								<h3 htmlFor="zip-code">Zip Code</h3>
								<input
									type="text"
									className="input-field"
									name="zipCode"
									value={this.state.zipCode}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-section">
								<h3 htmlFor="email-address">Email address</h3>
								<input
									type="email"
									className="input-field"
									aria-describedby="emailHelp"
									name="emailAddress"
									value={this.state.emailAddress}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-section">
								<h3 htmlFor="message">Job/Issue Description</h3>
								<textarea
									className="input-field"
									rows="5"
									name="message"
									value={this.state.message}
									onChange={event => this.genericSync(event)}
								></textarea>
							</div>
							<button type="submit" className="btn">
								Submit
							</button>
							<button type="submit" className="btn" onClick={this.resetForm}>
								Clear Form
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
	s;
}
