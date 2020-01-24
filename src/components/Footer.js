import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="contactUsForm">
					<h1>CONTACT US</h1>
					<div>
						<form className="contact-form">
							<div className="form-group">
								<label htmlFor="name">Name</label>
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
								<label htmlFor="message">Message</label>
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
				<div className="footer">
					<div>Logo & Address</div>
					<div>newsletter bar & text</div>
					<div>Useful Links</div>
				</div>
			</div>
		);
	}
}
