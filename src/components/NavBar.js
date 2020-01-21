import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";
import WesworthConstruction from "./img/WesworthConstruction.jpg";

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="nav-logo">
					<img
						src={WesworthConstruction}
						alt=" "
						width="150px"
						height="150px"
					/>
				</div>
				<div className="nav-titles">
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
		);
	}
}
