import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";
import WesworthConstruction from "./img/WCG_White.png";
import "./NavBar.css";

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<div className="nav-logo">
					<Link to={"/"} className="link">
						<img
							src={WesworthConstruction}
							alt="Wesworth Construction"
							width="25%"
						/>
					</Link>
				</div>
				<div className="nav-titles">
					<ul>
						<li>
							<Link to={"/management"} className="link">
								{Management}MANAGEMENT
							</Link>
						</li>
						<li>
							<Link to={"/builders"} className="link">
								{Builders}BUILDERS
							</Link>
						</li>
						<li>
							<Link to={"/electric"} className="link">
								{Electric}ELECTRIC
							</Link>
						</li>
						<li>
							<Link to={"/"} className="link">
								{Home}HOME
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
