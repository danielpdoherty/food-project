import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      map: null
    }
  }
  mapMoved(){
    console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()));
  }

  zoomChanged(){
    console.log('zoomChanged: ' + this.state.map.getZoom());
  }

  mapLoaded(map){
    // console.log('mapMoved: ' + JSON.stringify(map.getCenter()));

    if (this.state.map != null)
      return
    this.setState({
      map: map
    })
  }

  render(){
    const markers = this.props.markers || [];

    console.log('markers: ', markers);

    return (
        <GoogleMap
          ref={this.mapLoaded.bind(this)}
          onDragEnd={this.mapMoved.bind(this)}
          onZoomChanged={this.zoomChanged.bind(this)}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}
        >
          {markers.map((marker, index) => {
            console.log('marker is: ', marker)
            return(
              <Marker key={index}
                position={{ lat: marker.location.lat, lng: marker.location.lng }}
                {...marker} />)
          }
          )}
        </GoogleMap>

    )

  }
}

export default withGoogleMap(Map);
