import React, { Component } from "react";
import "./CommercialServiceHead.css";
import WesworthElectric from "./img/WElectric_transparente.png";
import ScheduleServiceBackground from "./img/schedule-service.jpg";

export default class ScheduleFormHead extends Component {
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
						src={ScheduleServiceBackground}
						alt="Commercial-Services"
						width="100%"
						className="commercial-background"
					/>
					<label className="commercial-head-text-top">SCHEDULE A</label>
					<label className="commercial-head-text-bottom">SERVICE CALL</label>
				</div>
				<div>
					<hr />
				</div>
			</div>
		);
	}
}
