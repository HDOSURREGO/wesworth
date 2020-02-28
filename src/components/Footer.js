import React from "react";
import { Link } from "react-router-dom";
import WesworthConstruction from "./img/WCG_White.png";
import "./Footer.css";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";
import axios from "axios";

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameFromContactUs: "",
			emailAddress: "",
			message: ""
		};
		this.resetForm = this.resetForm.bind(this);
		this.handleSubmitScheduleForm = this.handleSubmitScheduleForm.bind(this);
	}

	genericSync(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log(
			"This is the state after reading the form Contact Us",
			this.state
		);
	}

	handleSubmitScheduleForm(event) {
		event.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:5000/contactUs",
			data: this.state
		}).then(response => {
			if (response.data.status === "success") {
				console.log("Message Sent from Contact Us Form.");
				console.log("luego de enviar al backend", this.state);
				this.resetForm();
			} else if (response.data.status === "fail") {
				console.log("Message failed to send.");
			}
		});
	}

	resetForm() {
		this.setState({
			nameFromContactUs: " ",
			emailAddress: " ",
			message: " "
		});
	}

	render() {
		return (
			<div>
				<div className="contactUsForm">
					<h1>CONTACT US</h1>
					<div>
						<form
							className="contact-form"
							onSubmit={event => this.handleSubmitScheduleForm(event)}
							method="POST"
						>
							<div className="form-group">
								<label htmlFor="nameFromContactUs">Name</label>
								<input
									type="text"
									className="form-input"
									name="nameFromContactUs"
									value={this.state.nameFromContactUs}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-input"
									aria-describedby="emailHelp"
									name="emailAddress"
									value={this.state.emailAddress}
									onChange={event => this.genericSync(event)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									className="form-input"
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
				<div className="footer">
					<div className="logoAddress">
						<Link to={"/"} className="link">
							<img src={WesworthConstruction} alt="Wesworth Construction" />
						</Link>
						<div>
							<p>2351 N Dixie Hwy Pompano Beach, FL 33060</p>
						</div>
					</div>

					<div className="newsletter">
						<form>
							<div class="container">
								<h2>NEWSLETTER</h2>
								<p>
									Subscribe to our newsletter to get relevant information about
									our group.
								</p>
							</div>

							<div class="form-group">
								<input
									className="form-input-nl"
									type="text"
									placeholder="Email address"
									name="mail"
								/>
							</div>

							<div class="container">
								<button type="submit" className="btn-nl">
									Subscribe
								</button>
							</div>
						</form>
					</div>

					<div className="usefulLinks">
						<h2>USEFUL LINKS</h2>
						<ul>
							<li>
								<Link to={"/"} className="link">
									{Home}HOME
								</Link>
							</li>
							<li>
								<Link to={"/electric"} className="link">
									{Electric}ELECTRIC
								</Link>
							</li>
							<li>
								<Link to={"/builders"} className="link">
									{Builders}BUILDERS
								</Link>
							</li>
							<li>
								<Link to={"/management"} className="link">
									{Management}MANAGEMENT
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
