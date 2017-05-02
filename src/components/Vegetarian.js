import React, { Component } from 'react';
import pizza from '../img/pizza.png';
import tacos from '../img/tacos.jpg';
import friedrice from '../img/friedrice.jpg';
import falafel from '../img/falafel.jpg';
import brusselsprouts from '../img/brusselsprouts.jpg';
import salad from '../img/salad.jpg';
import hummus from '../img/hummus.jpg';
import tofu from '../img/tofu.jpg';

class Vegetarian extends Component {
	render(){
		return(
			<div className="row">
				<h1 className="animate">Ah someone who enjoys a good vegetable or two.</h1>
				<h1 className="animate"> What looks good to you here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I&#8217;m thinking...</h3>

				<div className="col-md-3">
					<a href=""><img src={pizza} alt="Pizza"/></a>
					<h3><a href="">Pizza</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={tacos} alt="Tacos"/></a>
					<h3><a href="">Tacos</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={friedrice} alt="Fried Rice"/></a>
					<h3><a href="">Fried Rice</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={falafel} alt="Falafel"/></a>
					<h3><a href="">Falafel</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={brusselsprouts} alt="Brussel Sprouts"/></a>
					<h3><a href="">Brussel Sprouts</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={salad} alt="Salad"/></a>
					<h3><a href="">Salad</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={hummus} alt="Hummus"/></a>
					<h3><a href="">Hummus</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={tofu} alt="Tofu"/></a>
					<h3><a href="">Tofu</a></h3>
				</div>
			</div>

			);
	}
}

export default Vegetarian;
