import React, { Component } from 'react';
import RestaurantContainer from './RestaurantContainer';


class Search extends Component {
	constructor(props) {
    super(props);
    this.state = {
      query: 'pizza',
    };
  }
  render() {
    return (
      <div className="App">

        <div className="container">
					<RestaurantContainer query={this.state.query}/>
        </div>
      </div>
    );
  }
}

export default Search;
