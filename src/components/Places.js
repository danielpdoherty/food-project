import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Places extends Component{
  render(){
    const list = this.props.venues.map((venue, i) => {
      return (
        <li key={i}>{venue.name}<br />
          {venue.location.formattedAddress}<br />
          {venue.contact.formattedPhone}
          <hr></hr>
        </li>

          /* <li key={i}>{venue.contact.formattedPhone}</li> */
      )
    })

    return (
      <div className="venues">
        <h3>Venues</h3>
        <ol className="venueList">
          {list}
        </ol>

      </div>
    )
  }
}

export default Places;
