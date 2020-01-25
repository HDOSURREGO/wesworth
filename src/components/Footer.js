import React from "react";
import { Link } from "react-router-dom";
import WesworthConstruction from "./img/WCG_White.png";
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
					<div className="logoAddress">
						<Link to={"/"} className="link">
							<img
								src={WesworthConstruction}
								alt="Wesworth Construction"
								// width="100%"
							/>
						</Link>
						<div>
							<p>2351 N Dixie Hwy Pompano Beach, FL 33060</p>
						</div>
					</div>

					<div className="newsletter">newsletter bar & text</div>

					<div className="usefulLinks">Useful Links</div>
				</div>
			</div>
		);
	}
}
