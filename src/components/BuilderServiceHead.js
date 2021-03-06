import React, { Component } from "react";
import "./BuilderServiceHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import BuilderServiceBackground from "./img/builder_services_cmyk_50opacity.jpg";

export default class BuilderServiceHead extends Component {
	render() {
		return (
			<div>
				<div className="service-head">
					<img
						src={WesworthElectric}
						alt="Wesworth-Electric"
						width="10%"
						className="logoWE"
					/>
					<img
						src={BuilderServiceBackground}
						alt="builder-services"
						width="100%"
						height="100%"
						className="builder-background"
					/>
					<label className="builder-head-text-top">BUILDER</label>
					<label className="builder-head-text-bottom">SERVICES</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
