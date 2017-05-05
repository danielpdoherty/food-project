import React, { Component } from 'react';
import { Link } from 'react-router';
import omni from '../img/omni.png';
import vege from '../img/vege.jpg';
import './typingAnim.css';

class Home extends Component {

	render(){
		return(
			<div>
				<div className="row">
					<h1 className="animate">Feeling Hungry and can&#8217;t decide?</h1>
					<h2>I <em>hate</em> that!
					<br />
						Let&#8217;s help you find some grub!
					</h2>
					<h3>Let&#8217;s start with some basic info...
					<br />
						You are a ...
					</h3>
				</div>
				<div className="row">
					<div className="col-md-6 choiceBox" id="choices">
						<Link to="/omni">
						<img src={omni} alt="Omnivore"/>
						<br/>
						Omnivore!
						</Link>
					</div>
					<div className="col-md-6 choiceBox" id="choices">
						<Link to="/vege">
						<img src={vege} alt="Vegetarian"/>
						<br/>
						Vegetarian!
						</Link>
					</div>
				</div>
			</div>
			);
	}
}

export default Home;
