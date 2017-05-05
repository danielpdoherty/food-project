import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';
import { Link } from 'react-router';

class VegeChoose extends Component{
		constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			meal: []
		}
	}



 	componentDidMount(){
 		database.ref('/food/vegetarian')
 		.on('value', snapshot=>{
 			const snap = firebaseListToArray(snapshot.val());
 			console.log('should be array ', snap)
 			this.setState({
 				meal: snap[Math.floor(Math.random() * snap.length)]
 			}, function(){
 				console.log(this.state.meal);
 			})
 			});
 	}


	render(){

		return(
			<div>
				<Link to="/vegechos">

				<button id="choiceButton" className="w3-btn w3-white w3-border w3-border-red w3-round-large">Let's try one more time!</button>
				</Link>
				<br/>
				<Link to={"/search/"+ this.state.meal.searchTerm} key={ this.id } id="randomchoices">
					<img src={ this.state.meal.imgUrl } alt={this.state.meal.name} />
					<h1> WHOOP Oh yeah... looks like you're eating:</h1>
					<p className="mealChoice">{this.state.meal.name}</p>
				</Link>
			</div>
			);
	}

}
export default VegeChoose;
