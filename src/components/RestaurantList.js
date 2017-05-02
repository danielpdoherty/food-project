import React, { Component } from 'react';
import 'whatwg-fetch';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'elemental'

// import {checkStatus, parseJSON} from '../utilities/index';

class RestaurantList extends Component {
	render() {
		var restaurants = this.props.restaurants || [];
		return (
			<div>
				<ul className="list-group">
					{restaurants.map(function(restaurant){
						return (
							<li key={restaurant.id} className="list-group-item">
								<a href={restaurant.Url}>
									<h4 className="list-group-item-heading">{restaurant.Title}</h4>
								</a>
								<p className="list-group-item-text">
								{restaurant.Address} {restaurant.City} {restaurant.State}
								</p>
									<b>Distance:</b> {restaurant.Distance} <br/>
									<b>Ratings:</b> {restaurant.Rating.AverageRating !== 'NaN' ? restaurant.Rating.AverageRating : '0'} <br/>
									<b>Review:</b> {restaurant.Rating.LastReviewIntro !== 'NaN' ? restaurant.Rating.LastReviewIntro : 'None'}
							</li>
						)

					})}
				</ul>
			</div>
		)
	}
}
export default RestaurantList;
