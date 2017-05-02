import React, { Component } from 'react';

class Vegetarian extends Component {
	render(){
		return(
			<div className="row">
				<h1>Ah someone who enjoys a good vegetable or two.
				<br/> What looks good to you here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I'm thinking...</h3>

				<div className="col-md-3">
					<a href="">Pizza</a>
				</div>
				<div className="col-md-3">
					<a href="">Tacos</a>
				</div>
				<div className="col-md-3">
					<a href="">Fried Rice</a>
				</div>
				<div className="col-md-3">
					<a href="">Falafel</a>
				</div>
				<div className="col-md-3">
					<a href="">Brussels Sprouts</a>
				</div>
				<div className="col-md-3">
					<a href="">Salad</a>
				</div>
				<div className="col-md-3">
					<a href="">Hummus</a>
				</div>
				<div className="col-md-3">
					<a href="">Fake Meat</a>
				</div>
			</div>

			);
	}
}

export default Vegetarian;