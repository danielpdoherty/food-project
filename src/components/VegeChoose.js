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
				<button className="extraButton">Let's try one more time!!</button>
				</Link>
				<br/>
				<Link to={"/search/"+ this.state.meal.searchTerm} key={ this.id } id="choices">
					<img src={ this.state.meal.imgUrl } alt={this.state.meal.name} />
					<h1> WHOOP Oh yeah... looks like you're eating:</h1>
					<p>{this.state.meal.name}</p>
				</Link>
			</div>
			);
	}

}
export default VegeChoose;
