import React, { Component } from 'react';
import { Link } from 'react-router';
import omni from '../img/omni.png';
import vege from '../img/vege.jpg';
import vegge from '../img/Veggies.jpg';
import meat from '../img/meat.jpg';
// import './typingAnim.css';

class Home extends Component {

	render(){
		return(
			<div>
				<div className="row">

					<h1 className="animate">Feeling Hungry and can&#8217;t decide?</h1>
					<h3>
						You are a ...
					</h3>
				</div>
				<div className="row">
					<div className="col-md-6 choiceBox" id="homeOmni">
						<Link to="/omni">
						<img src={meat} alt="Omnivore"/>
						<br/>
						<button id="choiceButton" type="button" className="btn btn-primary" className="w3-btn w3-white w3-border w3-border-red w3-round-large">Omnivore</button>
						</Link>
					</div>
					<div className="col-md-6 choiceBox"id="vegeOmni">
						<Link to="/vege">
						<img src={vegge} alt="Vegetarian"/>
						<br/>
						<button  id="choiceButton" type="button" className="btn btn-primary" className="w3-btn w3-white w3-border w3-border-red w3-round-large">Vegetarian</button>
						</Link>
					</div>
				</div>
			</div>
			);
	}
}

export default Home;
