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

	render(){
		const omnivore = this.state.omnivore.map((omnivore) => {
			console.log('food map', omnivore);

      		return (

      			<div className="col-md-3" id="choices">
					<Link to={"/search/"+ omnivore.searchTerm} key={ this.id }>
						<img src={ omnivore.imgUrl } alt="Food" />
						<br />
						<p>{ omnivore.name }</p>
                	</Link>
      			</div>
      		)});
		return(
			<div className="row">
				<h1 className="animate">So you eat it all huh? What looks good here?</h1>
				 <Link to="/omcho"><button id="choiceButton" className="w3-btn w3-white w3-border w3-border-red w3-round-large">Let us choose for you.</button></Link>
				<h3>I&#8217;m hungry for...</h3>

				{ omnivore }

			</div>

			);
	}
}

export default Omnivore;
