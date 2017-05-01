import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import SearchBar from './components/SearchBar.js';
import MapDetail from './components/MapDetail.js';
import RestaurantList from './components/RestaurantList.js';
import _ from 'lodash';
import './App.css';
=======
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> ca53072236dfa40b9f5020fe59b584332922581b

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
    this.search('monkeys');
  }

  changeSelectedVideo(video){
    this.setState({
      selectedVideo: video
    })
  }

  search(term){
    axios.get('https://maps.googleapis.com/maps/api/js',{
      params: {
        q: term,
        key: 'AIzaSyD4Cx5fT60X--BRDV8DjH73VX6SMqV6iL4',
        libraries: 'places',
        callback: 'initMap',
        type: 'video',
        part: 'snippet'
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
<<<<<<< HEAD
      <div className="container">
        <div className="row">
          <SearchBar search={videoSearch}/>
        </div>
        <div className="row">
          <MapDetail selectedVideo={this.state.selectedVideo}/>
          <RestaurantList videos={this.state.videos} changeSelectedVideo={this.changeSelectedVideo.bind(this)}/>
        </div>
      </div>
=======
      <section className="main">
        <Header />
        <div className="container">
            {this.props.children}
        </div>
        <Footer />
      </section>
>>>>>>> ca53072236dfa40b9f5020fe59b584332922581b
    );
  }
}

export default App;
