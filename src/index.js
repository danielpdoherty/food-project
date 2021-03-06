import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import Omnivore from './components/Omnivore';
import Vegetarian from './components/Vegetarian';
import Slots from './components/Slots';
import NotFound from './components/NotFound';
import Search from './components/Search';
import OmniChoose from './components/OmniChoose';
import VegeChoose from './components/VegeChoose';
import OmniChooseSwitch from './components/OmniChooseSwitch';
import VegeChooseSwitch from './components/VegeChooseSwitch';
import Gmap from './components/Gmap';
import './index.css';


ReactDOM.render(
  <Router history={ hashHistory }>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home} />
  		<Route path="omni" component={Omnivore} />
  		<Route path="vege" component={Vegetarian} />
      <Route path="search" component={Search} />
  		<Route path="slots" component={Slots} />
  		<Route path="/omni" component={Omnivore} />
  		<Route path="/vege" component={Vegetarian} />
      <Route path="/search" component={Search} />
      <Route path="/search/:id" component={Search} />
  		<Route path="/slots" component={Slots} />
      <Route path="/omcho" component={OmniChoose} />
      <Route path="/omchos" component={OmniChooseSwitch} />
      <Route path="/vegecho" component={VegeChoose} />
      <Route path="/vegechos" component={VegeChooseSwitch} />
      <Route path="/map" component={Gmap} />
  	</Route>
  	<Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
