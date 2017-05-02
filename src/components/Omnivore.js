import React, { Component } from 'react';
import meatpizza from '../img/meatpizza.jpg';
import tacos from '../img/tacos.jpg';
import steak from '../img/steak.jpg';
import burger from '../img/burger.jpg';
import kungpaochicken from '../img/kungpaochicken.jpg';
import pulledpork from '../img/pulledpork.jpg';
import kebab from '../img/kebab.jpg';
import chickenwings from '../img/chickenwings.jpg';
import firebase, { database, firebaseListToArray } from '../firebase';


class Omnivore extends Component {
	constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
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
      		// let foodLength = food.id;
      		// if(foodLength.length < 9){
      			for(var i = 0, x = food.length; i < x ; i++){
      		return (
      				<a href="#" key={ this.state.id } name={ food.omnivore[0].name }>
						<img src={ food[i].omnivore[0].imgUrl } alt="Food" />
							{ food[i].omnivore[0].name }
      				</a>
      		)}});
		return(
			<div className="row">
				<h1 className="animate">So you eat it all huh? What looks good here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I&#8217;m hungry for...</h3>

				
        <div className="col-md-3">
						{ food }
				</div>
      
				<div className="col-md-3">
					<a href=""><img src={meatpizza} alt="Pizza"/></a>
					<h3><a href="">Pizza</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={tacos} alt="Pizza"/></a>
					<h3><a href="">Tacos</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={steak} alt="Pizza"/></a>
					<h3><a href="">Steak</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={burger} alt="Pizza"/></a>
					<h3><a href="">Hamburger</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={kungpaochicken} alt="Pizza"/></a>
					<h3><a href="">Kung Pao Chicken</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={pulledpork} alt="Pizza"/></a>
					<h3><a href="">Pulled Pork</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={kebab} alt="Pizza"/></a>
					<h3><a href="">Kebab</a></h3>
				</div>
				<div className="col-md-3">
					<a href=""><img src={chickenwings} alt="Pizza"/></a>
					<h3><a href="">Chicken Wings</a></h3>
  
        <div className="col-md-3">
						{ food }
				</div>
			
			</div>

			);
	}
}

export default Omnivore;
