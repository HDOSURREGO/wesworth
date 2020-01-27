import React from "react";
import { Link } from "react-router-dom";
import WesworthConstruction from "./img/WCG_White.png";
import "./Footer.css";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";

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
								// width="25%"
							/>
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
