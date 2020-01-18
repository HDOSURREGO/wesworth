import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Electric from "./Electric";
import Builders from "./Builders";
import Management from "./Management";

export default class NavBar extends React.Component {
	render() {
		return (
			<div>
				<div className="nav">
					<div className="nav-logo">{/* Logo here */}</div>

					<div className="nav-title">
						<div className="nav-title">
							<Link to={"/"} className="link">
								{Home}Home
							</Link>
							<Link to={"/electric"} className="link">
								{Electric} Electric
							</Link>
							<Link to={"/builders"} className="link">
								{Builders} Builders
							</Link>
							<Link to={"/management"} className="link">
								{Management} Management
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
