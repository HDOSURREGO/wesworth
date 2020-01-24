import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="contactUsForm">
					<h1>CONTACT US</h1>
					<div>
						<form
							className="contact-form"
							// onSubmit={this.handleSubmit.bind(this)}
							// method="POST"
						>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea className="form-control" rows="5"></textarea>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
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
