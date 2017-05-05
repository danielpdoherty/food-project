import React, { Component } from 'react';
import { Map }  from './';
import Places from './Places';
import UserInput from './UserInput';
import superagent from 'superagent';
import '../index.css';

class Gmap extends Component {

  constructor(props){
    super(props)
    this.state = {
      venues: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount:');

    const url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=30.273428%2C%20-97.739529&query=burgers&limit=10&intent=checkin&client_id=D4QBKSVYZWO5WQ2CKLQZ4BM4UXGEOBEQL0A4IPTVWHB11M5P&client_secret=5FCD2FPAH3XBAIQALGZXDQCQOETKZLEO4ACEYBOLMIBGENUA'
    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.response.venues;
      console.log(JSON.stringify(venues));
      this.setState({
        venues: venues
      })
    })

  }

  render() {
    return (

        <div>
          <div className="map">
             <UserInput />
            <Map
              zoom={14}
              center={{ lat: 30.268723, lng: -97.7456727 }}
                containerElement={
                  <div style={{ height: `100%` }} />
                }
                mapElement={
                  <div style={{ height: `100%` }} />
                }
                markers={this.state.venues}
              />
          </div>
          <div className="venues">
            <Places venues={this.state.venues}/>
          </div>
        </div>
    );
  }
}

export default Gmap;
