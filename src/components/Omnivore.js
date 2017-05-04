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
	// buttonClick(){
	// 	document.getElementById("choiceButton").addEventListener("click", chooseForMe);

	// 		function chooseForMe() {
	// 			let omnivoreChosen = function shuffleArray(omnivore) {
 //    								for (var i = omnivore.length - 1; i > 0; i--) {
 //        							var j = Math.floor(Math.random() * (i + 1));
	// 								        							var temp = omnivore[i];
	// 								        omnivore[i] = omnivore[j];
	// 								        omnivore[j] = temp;
	// 								    }
	// 								    return omnivore;
	// 								}
 //    			document.getElementById("choices").innerHTML = omnivoreChosen;
	// 		}
	// 	}
	
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
				 <Link to="/omcho"><button id="choiceButton">Let us choose for you.</button></Link>
				<h3>I&#8217;m hungry for...</h3>

				{ omnivore }

			</div>

			);
	}
}

export default Omnivore;
