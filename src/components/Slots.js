import React, { Component } from 'react';

class Slots extends Component{
	render(){
		return(
			<div>
				<h1>How much are you looking to spend?</h1>
				<h3>I'm willing to part with...</h3>

				<div className="col-md-12">
					<ul className="slot">  
						<li>Mexican</li>  
						<li>Indian</li>  
						<li>American</li>  
						<li>Italian</li>  
						<li>French</li>  
						<li>Mediterranean</li>  
						<li>Just Beer</li>  
					</ul> 
					<ul className="slot">  
						<li>Mexican</li>  
						<li>Indian</li>  
						<li>American</li>  
						<li>Italian</li>  
						<li>French</li>  
						<li>Mediterranean</li>  
						<li>Just Beer</li>  
					</ul>
					<ul className="slot">  
						<li>Mexican</li>  
						<li>Indian</li>  
						<li>American</li>  
						<li>Italian</li>  
						<li>French</li>  
						<li>Mediterranean</li>  
						<li>Just Beer</li>  
					</ul>
					  
					<input type="button" id="playBtn" value="play" />  
				</div>
			</div>
			);
	}
}

export default Slots;