import React from "react";
import WesworthBuildersBackground from "./img/builders-under-construction.jpg";

export default class Builders extends React.Component {
	render() {
		return (
			<div>
				<div className="centralBanner">
					<img
						className="wcgBackground"
						src={WesworthBuildersBackground}
						alt="WesworthConstructionBackground"
						width="100%"
					/>
				</div>
			</div>
		);
	}
}
