import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Electric from "./components/Electric";
import Builders from "./components/Builders";
import Management from "./components/Management";
import CommercialServices from "./components/CommercialServices";
import IndustrialServices from "./components/IndustrialServices";
import BuilderServices from "./components/BuilderServices";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	render() {
		return (
			<div>
				<div>
					<NavBar />
				</div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/electric" component={Electric} />
						<Route exact path="/builders" component={Builders} />
						<Route exact path="/management" component={Management} />
						<Route
							exact
							path="/electric/commercial-services"
							component={CommercialServices}
						/>
						<Route
							exact
							path="/electric/industrial-services"
							component={IndustrialServices}
						/>
						<Route
							exact
							path="/electric/builder-services"
							component={BuilderServices}
						/>
					</Switch>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
export default App;
