import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  render() {
    return (
		<nav className="navbar navbar-default header">
	      	<h1 className="appName">Dinner Winner</h1>
	      	<ul className="headerLinks">
	      		<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
	      		<li><Link to="/omni" activeClassName="active">Omnivore</Link></li>
	      		<li><Link to="/vege" activeClassName="active">Vegetarian</Link></li>
	      		<li><Link to="/search" activeClassName="active">Search</Link></li>
	      	</ul>
      	</nav>
    );
  }
}

export default Header;