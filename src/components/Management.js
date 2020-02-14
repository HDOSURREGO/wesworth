import React from "react";
import WesworthManagementBackground from "./img/management-under-construction.jpg";

export default class Builders extends React.Component {
	render() {
		return (
			<div>
				<div className="centralBanner">
					<img
						className="wcgBackground"
						src={WesworthManagementBackground}
						alt="WesworthConstructionBackground"
						width="100%"
					/>
				</div>
			</div>
		);
	}
}
