import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import Home from './components/Home';
import Omnivore from './components/Omnivore';
import Vegetarian from './components/Vegetarian';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router history={ hashHistory }>
  	<Route path="/" component={App}> 
  		<IndexRoute component={Home} />
  		<Route path="/omni" component={Omnivore} />
  		<Route path="/vege" component={Vegetarian} />
  	</Route>
  	<Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
