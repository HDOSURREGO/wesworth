import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";

export default class NavBar extends React.Component {
	render() {
		return (
			<div>
				<div className="nav-bar">
					<div className="nav-logo">Logo</div>
					<div>
						<ul>
							<li>
								<Link to={"/"} className="link">
									{Home}Home
								</Link>
							</li>
							<li>
								<Link to={"/electric"} className="link">
									{Electric}Electric
								</Link>
							</li>
							<li>
								<Link to={"/builders"} className="link">
									{Builders}Builders
								</Link>
							</li>
							<li>
								<Link to={"/management"} className="link">
									{Management}Management
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
