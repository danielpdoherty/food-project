import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';

class Omnivore extends Component {
	constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			food : []
		}
	}

	  componentWillMount() {
    database.ref('/food')
      .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('food', results);

          this.setState({
            food: results
          });
        });
  }

	getRandomFood(food){
		this.ref.on('value', function(snapshot){
		var i = 0;
		var rand = Math.floor(Math.random() * snapshot.numChildren());
		snapshot.forEach(function(snapshot) {
  		if (i === rand) {
   		 // picked random item, 
   		 console.log(food);
   		const snapFood =  snapshot.val()
  		}
  		i++;
			});
		});
	}

	render(){
		const food = this.state.food.map((food) => {
			console.log('food ', food);
      		return (<a href="#" key={ food.id } name={ food.id }>{this.snapFood}</a>)})
		return(
			<div className="row">
				<h1>So you eat it all huh? What looks good here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I'm hungry for...</h3>

				<div className="col-md-3">
					{ food }
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