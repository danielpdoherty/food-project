import React, { Component } from 'react';
import { Link } from 'react-router';
import omni from '../img/omni.png';
import vege from '../img/vege.jpg';
import './typingAnim.css';

class Home extends Component {
	state = {

    position: 'unknown'

  };

// Now, in componentDidMount, we can use navigator.geolocation.getCurrentPosition to get our position in terms of latitude and longitude, then set our state:

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        this.setState({position});

      },

      (error) => alert(error),

      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

    );

  }

	render(){
		return(
			<div>
				<div className="row">
					<h1 className="animate">Feeling Hungry and can&#8217;t decide?</h1>
					<h2>I hate that!
					<br />
						Let&#8217;s help you find some grub!
					</h2>
					<h3>Let&#8217;s start with some basic info...
					<br />
						You are a ...
					</h3>
				</div>
				<div className="row">
					<div className="col-md-6 choiceBox">
						<Link to="/omni"><img src={omni} alt="Omnivore"/>Omnivore!</Link>
					</div>
					<div className="col-md-6 choiceBox">
						<Link to="/vege"><img src={vege} alt="Vegetarian"/>Vegetarian!</Link>
					</div>
				</div>
			</div>
			);
	}
}

export default Home;
