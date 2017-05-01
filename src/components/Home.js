import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
	render(){
		return(
			<div>
				<div className="row">
					<h1>Feeling Hungry and can't decide?</h1>
					<h2>I hate that!
					<br />
						Let's help you find some grub!
					</h2>
					<h3>Let's start with some basic info...
					<br />
						You are a ...
					</h3>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Link to="/omni">Omnivore!</Link>
					</div>
					<div className="col-md-6">
						<Link to="/vege">Vegetarian!</Link>
					</div>
				</div>
			</div>
			);
	}
}

export default Home;