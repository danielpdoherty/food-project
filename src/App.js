import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar.js';
import MapDetail from './components/MapDetail.js';
import RestaurantList from './components/RestaurantList.js';
import _ from 'lodash';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


// AIzaSyDoQMExpBJGbyzOSCBLu2RncN5_BN3LhGw
// https://www.youtube.com/embed/

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount(){
    this.search('mexican');
  }

  changeSelectedVideo(video){
    this.setState({
      selectedVideo: video
    })
  }

  state = {

    position: 'unknown'

  };

// Now, in componentDidMount, we can use navigator.geolocation.getCurrentPosition to get our position in terms of latitude and longitude, then set our state:

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        this.setState({position});

      },

      (error) => alert(error),

      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

    );

  }

  search(term){
    var lat = this.state.position.coords.latitude;
    var lng = this.state.position.coords.longitude;
    var latlng = "ll=" + String(lat) + "," + String(lng);
    axios.get('https://maps.googleapis.com/maps/api/js',{
      params: {
        term: term + latlng,
        key: 'AIzaSyBYVFaVlAm7z6PBipNIaVb-6SZxWY8Cj-o',
        libraries: 'places'

        // client_id: 'zBUUcNNN5aTMYPsDH4NboA',
        // client_secret: 'wbw8U5Spz89sO5rO6xXMsO9t1W8rfvDONQ3RqvpSkwSqW1NB1jJrGacr4gY3m2ms',
        // access_token: 'up2EoHoFD_BczuphEKC_1gqqijFFTW_Ejc4XkJhZiJIf3i8TgJH-8VTGVSayID_m6_D6tVN8yUt9amDcGPOhKZPGfleZrfOM-fN1wIdWGP1U8_r53V17TqGbQpcDWXYx'
      }
    }).then((response)=>{
      console.log(response);
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    }).catch((error)=>{
      console.error(error);
    });
  }

  render() {
    const videoSearch = _.debounce( term=>{ this.search(term) }, 300);
    return (

     <section className="main">
        <Header />
        <div className="container">
            {this.props.children}
        </div>
        <Footer />
      </section>

    );
  }
}

export default App;
