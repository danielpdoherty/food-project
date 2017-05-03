import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import Home from './components/Home';
import Omnivore from './components/Omnivore';
import Vegetarian from './components/Vegetarian';
import Slots from './components/Slots';
import NotFound from './components/NotFound';
import Search from './components/Search';



ReactDOM.render(
  <Router history={ hashHistory }>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home} />
<<<<<<< HEAD
  		<Route path="omni" component={Omnivore} />
  		<Route path="vege" component={Vegetarian} />
      <Route path="search" component={Search} />
  		<Route path="slots" component={Slots} />
=======
  		<Route path="/omni" component={Omnivore} />
  		<Route path="/vege" component={Vegetarian} />
      <Route path="/search" component={Search} />
      <Route path="/search/:id" component={Search} />
  		<Route path="/slots" component={Slots} />
>>>>>>> dev
  	</Route>
  	<Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
