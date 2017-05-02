import React, { Component } from 'react';

class Omnivore extends Component {
	render(){
		return(
			<div className="row">
				<h1 className="animate">So you eat it all huh? What looks good here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I&#8217;m hungry for...</h3>

				<div className="col-md-3">
					<a href="">Pizza</a>
				</div>
				<div className="col-md-3">
					<a href="">Tacos</a>
				</div>
				<div className="col-md-3">
					<a href="">Steak</a>
				</div>
				<div className="col-md-3">
					<a href="">Burgers</a>
				</div>
				<div className="col-md-3">
					<a href="">Kung Pao Chicken</a>
				</div>
				<div className="col-md-3">
					<a href="">Pulled Pork</a>
				</div>
				<div className="col-md-3">
					<a href="">Kebab</a>
				</div>
				<div className="col-md-3">
					<a href="">Chicken Wings</a>
				</div>
			</div>

			);
	}
}

export default Omnivore;
