import React, { Component } from 'react';
import { Link } from 'react-router';
import omni from '../img/omni.png';
import vege from '../img/vege.jpg';
import vegge from '../img/Veggies.jpg';
import meat from '../img/meat.jpg';
import backgroundimg from '../img/backgroundimg.jpg';
import './typingAnim.css';
import Slider from 'react-slick';


class Home extends Component {

	render(){
		const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			autoplay: true,
			arrows: false

    };

		return(
			<div>
				<div className="row">
					<h1 className="animate">Feeling Hungry and can&#8217;t decide?</h1>
					<Slider {...settings}>
					<img src={vegge} alt="Omnivore"/>
					<img  src={meat} alt="Omnivore" />
					</Slider>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Link to="/omni">
						<button type="button" class="btn btn-primary">Omnivore!</button>
            </Link>
						</div>
						<div className="col-md-6">
							<Link to="/vege">
							<button type="button" class="btn btn-primary">Vegetarian</button>
	            </Link>
							</div>
				</div>
			</div>
			);
	}
}

export default Home;
