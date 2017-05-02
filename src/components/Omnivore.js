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

	// getRandomFood(food){
	// 	this.ref.on('value', function(snapshot){
	// 	var i = 0;
	// 	var rand = Math.floor(Math.random() * snapshot.numChildren());
	// 	snapshot.forEach(function(snapshot) {
 //  		if (i === rand) {
 //   		 // picked random item, 
 //   		 console.log(food);
 //   		let snapFood =  snapshot.val()
 //   		console.log('snapfood ', snapFood);
 //  		}
 //  		i++;
	// 		});
	// 	}); 
	// }

	render(){
		const food = this.state.food.map((food) => {
			console.log('food map', food);
      		let foodLength = food.id;
      		if(foodLength.length < 9){
      		return (
      			<div className="col-md-3">	
      				<a href="#" key={ food.id } name={ food.id }>
							<img src={food.properties.imgUrl} alt="Food" />
							{ food.properties.name }
      				</a>
      			</div>
      		)}});
		return(
			<div className="row">
				<h1 className="animate">So you eat it all huh? What looks good here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I&#8217;m hungry for...</h3>

				
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
				<div className="col-md-3">
					<a href="">{ food }</a>
				</div>
			</div>

			);
	}
}

export default Omnivore;
