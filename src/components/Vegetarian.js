import React, { Component } from 'react';
import firebase, { database, firebaseListToArray } from '../firebase';
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

      		return (
      			<div className="col-md-3" id="choices">

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
				<h1 className="animate"> What looks good to you here?</h1>
				<Link to="/vegecho"><button id="choiceButton" className="w3-btn w3-white w3-border w3-border-red w3-round-large">Let us choose for you.</button></Link>
				<h3>I&#8217;m thinking...</h3>

				{ vegetarian }

			</div>

			);
	}
}

export default Vegetarian;
