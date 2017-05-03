import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';
import { Link } from 'react-router';



class Omnivore extends Component {
	constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			omnivore: []
		}
	}

	  componentWillMount() {
    database.ref('/food/omnivore')
      .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('food', results);

          this.setState({
            omnivore: results
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
		const omnivore = this.state.omnivore.map((omnivore) => {
			console.log('food map', omnivore);
      		// let omnivoreLength = omnivore.id;
      		// if(omnivore.length < 3){
      			// for(var i = 0, x = omnivore.length; i < x ; i++){
      		return (
      			<div className="col-md-3">
						<Link to={"/search/"+ omnivore.name} key={ this.id }>
							<img src={ omnivore.imgUrl } alt="Food" />
								<br />
								<p>{ omnivore.name }</p>
                </Link>
      		
      			</div>
      		)});
		return(
			<div className="row">
				<h1 className="animate">So you eat it all huh? What looks good here?</h1>
				<h2>Or, let us choose for you.</h2>
				<h3>I&#8217;m hungry for...</h3>

				{ omnivore }

			</div>

			);
	}
}

export default Omnivore;
