import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';
import pizza from '../img/pizza.png';
import veggietacos from '../img/veggietacos.jpg';
import friedrice from '../img/friedrice.jpg';
import falafel from '../img/falafel.jpg';
import brusselsprouts from '../img/brusselsprouts.jpg';
import salad from '../img/salad.jpg';
import hummus from '../img/hummus.jpg';
import tofu from '../img/tofu.jpg';
import { Link } from 'react-router';

class Vegetarian extends Component {


	constructor(props){
		super(props);

		this.ref = firebase.database().ref();
		this.state = {
			id : Date.now(),
			vegetarian: [],

		}
	}

	  componentWillMount() {
    database.ref('/food/vegetarian')
      .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('food', results);

          this.setState({
            vegetarian: results
          });
        });
  }


	render(){
		const vegetarian = this.state.vegetarian.map((vegetarian) => {
			console.log('food map', vegetarian);
      		// let omnivoreLength = vegetarian.id;
      		// if(vegetarian.length < 3){
      			// for(var i = 0, x = vegetarian.length; i < x ; i++){
      		return (
      			<div className="col-md-3">

						<Link
                    to={"/search/"+vegetarian.searchTerm}

                    key={ vegetarian.id }>

									<img src={ vegetarian.imgUrl } alt="Food" />
									<br />
										{ vegetarian.name }
                </Link>
      				
      			</div>
      		)});
		return(
			<div className="row">

				<h1 className="animate">Ah someone who enjoys a good vegetable or two.</h1>
				<h1 className="animate"> What looks good to you here?</h1>
				<Link to="/omcho"><button id="choiceButton">Let us choose for you.</button></Link>
				<h3>I&#8217;m thinking...</h3>

				{ vegetarian }

			</div>

			);
	}
}

export default Vegetarian;
