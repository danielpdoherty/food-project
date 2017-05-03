import React, { Component } from 'react';
import RestaurantContainer from './RestaurantContainer';

//todo: if there is no parameter then allow the user to use the search input
// <RestaurantContainer query={this.state.query} />
class Search extends Component {
	constructor(props) {
    super(props);
    this.state = {
  	query: this.props.query,
	
    };
  }
  render() {
		console.log("this param is working ",this.props.params.id)
    return (
      <div className="App">

        <div className="container">
					<RestaurantContainer query={this.props.params.id} />
        </div>
      </div>
    );
  }
}

export default Search;
